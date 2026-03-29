/// <reference lib="webworker" />
import type * as Ort from "onnxruntime-web";

import {
  ENGLISH_CONFIG,
  JAPANESE_CONFIG,
} from "../const";
import {
  type InferenceBackend,
  type Lang,
  type WorkerRequest,
  type WorkerResponse,
} from "../utils/inferenceProtocol";
import {
  audioToShiftedSpectrogramTensor,
  audioToSpectrogramTensor,
} from "../utils/spectrogramUtils";
import { decodePredictions } from "../utils/textDecoder";

type OrtModule = typeof Ort;

const ORT_WASM_PATH =
  "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.0/dist/";

// Dynamic model URLs using Vite's import.meta.url
const MODEL_URLS: Record<Lang, string> = {
  en: new URL(`../${ENGLISH_CONFIG.MODEL_FILE}`, import.meta.url).href,
  ja: new URL(`../${JAPANESE_CONFIG.MODEL_FILE}`, import.meta.url).href,
};

const ortModulePromises: Partial<Record<InferenceBackend, Promise<OrtModule>>> =
  {};

const sessions: Record<
  InferenceBackend,
  Record<Lang, Ort.InferenceSession | null>
> = {
  wasm: {
    en: null,
    ja: null,
  },
  webgpu: {
    en: null,
    ja: null,
  },
};

async function getOrtModule(backend: InferenceBackend): Promise<OrtModule> {
  const cachedModule = ortModulePromises[backend];
  if (cachedModule) return cachedModule;

  const modulePromise = (async () => {
    const ort = backend === "webgpu"
      ? await import("onnxruntime-web/webgpu")
      : await import("onnxruntime-web/wasm");

    // Fetch ORT assets from the CDN to avoid module fetch failures in the worker.
    ort.env.wasm.wasmPaths = ORT_WASM_PATH;

    return ort as OrtModule;
  })();

  ortModulePromises[backend] = modulePromise;

  return modulePromise;
}

async function ensureSession(
  lang: Lang,
  backend: InferenceBackend,
): Promise<Ort.InferenceSession> {
  const existingSession = sessions[backend][lang];
  if (existingSession) return existingSession;

  const ort = await getOrtModule(backend);
  const session = await ort.InferenceSession.create(MODEL_URLS[lang], {
    executionProviders: [backend],
  });

  sessions[backend][lang] = session;

  return session;
}

async function handleRunInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  lang: Lang,
  backend: InferenceBackend,
  shiftTargetFreq?: number,
): Promise<string> {
  const ort = await getOrtModule(backend);
  const session = await ensureSession(lang, backend);

  const spectrogramInput = shiftTargetFreq != null
    ? audioToShiftedSpectrogramTensor(audioBuffer, shiftTargetFreq)
    : audioToSpectrogramTensor(audioBuffer, filterFreq, filterWidth);
  if (!spectrogramInput) {
    return "";
  }

  const inputTensor = new ort.Tensor(
    "float32",
    spectrogramInput.data,
    spectrogramInput.dims,
  );

  const inputName = session.inputNames[0];
  const feeds = { [inputName]: inputTensor };
  const results = await session.run(feeds);
  const outputTensor = results[session.outputNames[0]];

  const decodedTexts = decodePredictions(
    outputTensor.data,
    outputTensor.dims,
    lang,
  );

  return decodedTexts.length > 0 ? decodedTexts[0] : "";
}

const ctx: DedicatedWorkerGlobalScope =
  self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  const requestId = message.id;

  const respond = (response: WorkerResponse) => ctx.postMessage(response);

  try {
    if (message.type === "loadModel") {
      await ensureSession(message.lang, message.backend);
      respond({ id: message.id, type: "modelLoaded" });
      return;
    }

    if (message.type === "runInference") {
      const text = await handleRunInference(
        message.audioBuffer,
        message.filterFreq,
        message.filterWidth,
        message.lang,
        message.backend,
        message.shiftTargetFreq,
      );
      respond({ id: message.id, type: "inferenceResult", text });
      return;
    }

    respond({
      id: requestId,
      type: "error",
      error: "Unsupported worker message type.",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown worker error";
    respond({ id: requestId, type: "error", error: errorMessage });
  }
};

export {};
