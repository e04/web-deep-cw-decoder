/// <reference lib="webworker" />
import type * as Ort from "onnxruntime-web";

import {
  ENGLISH_CONFIG,
  JAPANESE_CONFIG,
} from "../const";
import {
  type InferenceBackend,
  type Lang,
  type LoadProgressStage,
  type WorkerRequest,
  type WorkerResponse,
} from "../utils/inferenceProtocol";
import {
  audioToShiftedSpectrogramTensor,
  audioToSpectrogramTensor,
} from "../utils/spectrogramUtils";
import { decodePredictions } from "../utils/textDecoder";
import ortWasmJsepModuleUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.mjs?url";
import ortWasmJsepBinaryUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm?url";
import ortWasmAsyncifyModuleUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.mjs?url";
import ortWasmAsyncifyBinaryUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm?url";

type OrtModule = typeof Ort;

// Dynamic model URLs using Vite's import.meta.url
const MODEL_URLS: Record<Lang, string> = {
  en: new URL(`../${ENGLISH_CONFIG.MODEL_FILE}`, import.meta.url).href,
  ja: new URL(`../${JAPANESE_CONFIG.MODEL_FILE}`, import.meta.url).href,
};

const ORT_RUNTIME_ASSETS: Record<
  InferenceBackend,
  {
    binaryUrl: string;
    wasmPaths: {
      mjs: string;
    };
  }
> = {
  wasm: {
    binaryUrl: ortWasmJsepBinaryUrl,
    wasmPaths: {
      mjs: ortWasmJsepModuleUrl,
    },
  },
  webgpu: {
    binaryUrl: ortWasmAsyncifyBinaryUrl,
    wasmPaths: {
      mjs: ortWasmAsyncifyModuleUrl,
    },
  },
};

const modelDataPromises: Record<Lang, Promise<Uint8Array> | null> = {
  en: null,
  ja: null,
};

const modelDataCache: Record<Lang, Uint8Array | null> = {
  en: null,
  ja: null,
};

const ortBinaryPromises: Partial<Record<InferenceBackend, Promise<Uint8Array>>> =
  {};
const ortBinaryCache: Partial<Record<InferenceBackend, Uint8Array>> = {};

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

function clampProgress(progress: number): number {
  return Math.max(0, Math.min(progress, 1));
}

async function fetchBinaryWithProgress(
  url: string,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch asset: ${response.status} ${response.statusText}`);
  }

  const totalBytes = Number(response.headers.get("content-length") ?? "0");
  const reader = response.body?.getReader();
  if (!reader) {
    const binary = new Uint8Array(await response.arrayBuffer());
    onProgress?.(1);
    return binary;
  }

  const chunks: Uint8Array[] = [];
  let receivedBytes = 0;
  onProgress?.(0);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;

    chunks.push(value);
    receivedBytes += value.byteLength;

    if (totalBytes > 0) {
      onProgress?.(clampProgress(receivedBytes / totalBytes));
    }
  }

  const binary = new Uint8Array(receivedBytes);
  let offset = 0;
  for (const chunk of chunks) {
    binary.set(chunk, offset);
    offset += chunk.byteLength;
  }

  onProgress?.(1);
  return binary;
}

async function getOrtBinary(
  backend: InferenceBackend,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const cachedBinary = ortBinaryCache[backend];
  if (cachedBinary) {
    onProgress?.(1);
    return cachedBinary;
  }

  const cachedPromise = ortBinaryPromises[backend];
  if (cachedPromise) {
    const binary = await cachedPromise;
    onProgress?.(1);
    return binary;
  }

  const binaryPromise = fetchBinaryWithProgress(
    ORT_RUNTIME_ASSETS[backend].binaryUrl,
    onProgress,
  )
    .then((binary) => {
      ortBinaryCache[backend] = binary;
      return binary;
    })
    .catch((error) => {
      ortBinaryPromises[backend] = undefined;
      throw error;
    });

  ortBinaryPromises[backend] = binaryPromise;

  return binaryPromise;
}

async function getModelData(
  lang: Lang,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const cachedModel = modelDataCache[lang];
  if (cachedModel) {
    onProgress?.(1);
    return cachedModel;
  }

  const cachedPromise = modelDataPromises[lang];
  if (cachedPromise) {
    const model = await cachedPromise;
    onProgress?.(1);
    return model;
  }

  const modelPromise = fetchBinaryWithProgress(MODEL_URLS[lang], onProgress)
    .then((model) => {
      modelDataCache[lang] = model;
      return model;
    })
    .catch((error) => {
      modelDataPromises[lang] = null;
      throw error;
    });

  modelDataPromises[lang] = modelPromise;

  return modelPromise;
}

async function getOrtModule(
  backend: InferenceBackend,
  onProgress?: (progress: number) => void,
): Promise<OrtModule> {
  const cachedModule = ortModulePromises[backend];
  if (cachedModule) return cachedModule;

  const modulePromise = (async () => {
    const ortBinary = await getOrtBinary(backend, onProgress);
    const ort = backend === "webgpu"
      ? await import("onnxruntime-web/webgpu")
      : await import("onnxruntime-web/wasm");

    // Serve ORT assets from the app itself so decoding still works offline.
    ort.env.wasm.wasmPaths = ORT_RUNTIME_ASSETS[backend].wasmPaths;
    ort.env.wasm.wasmBinary = ortBinary;

    return ort as OrtModule;
  })();

  ortModulePromises[backend] = modulePromise;

  return modulePromise;
}

async function ensureSession(
  lang: Lang,
  backend: InferenceBackend,
  onOrtProgress?: (progress: number) => void,
  onModelProgress?: (progress: number) => void,
): Promise<Ort.InferenceSession> {
  const existingSession = sessions[backend][lang];
  if (existingSession) return existingSession;

  const [ort, modelData] = await Promise.all([
    getOrtModule(backend, onOrtProgress),
    getModelData(lang, onModelProgress),
  ]);
  const session = await ort.InferenceSession.create(modelData, {
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
  const reportProgress = (
    stage: LoadProgressStage,
    progress: number,
    backend: InferenceBackend,
    lang?: Lang,
  ) => {
    respond({
      id: requestId,
      type: "loadProgress",
      stage,
      backend,
      lang,
      progress: clampProgress(progress),
    });
  };

  try {
    if (message.type === "loadModel") {
      await ensureSession(
        message.lang,
        message.backend,
        (progress) => reportProgress("ort", progress, message.backend),
        (progress) =>
          reportProgress("model", progress, message.backend, message.lang),
      );
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
