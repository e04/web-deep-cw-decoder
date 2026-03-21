/// <reference lib="webworker" />
import * as ort from "onnxruntime-web";
import { audioToSpectrogramTensor } from "../utils/spectrogramUtils";
import { decodePredictions, type TextSegment } from "../utils/textDecoder";
import { ENGLISH_CONFIG, JAPANESE_CONFIG } from "../const";

type Lang = "en" | "ja";

// Dynamic model URLs using Vite's import.meta.url
const MODEL_URLS: Record<Lang, string> = {
  en: new URL(`../${ENGLISH_CONFIG.MODEL_FILE}`, import.meta.url).href,
  ja: new URL(`../${JAPANESE_CONFIG.MODEL_FILE}`, import.meta.url).href,
};

type WorkerRequest =
  | { id: number; type: "loadModel"; lang: Lang }
  | {
      id: number;
      type: "runInference";
      lang: Lang;
      audioBuffer: Float32Array;
      filterFreq: number | null;
      filterWidth: number;
    };

type WorkerResponse =
  | { id: number; type: "modelLoaded" }
  | { id: number; type: "inferenceResult"; segments: TextSegment[] }
  | { id: number; type: "error"; error: string };

const sessions: Record<Lang, ort.InferenceSession | null> = {
  en: null,
  ja: null,
};

async function ensureSession(lang: Lang): Promise<ort.InferenceSession> {
  if (sessions[lang]) return sessions[lang]!;
  // Fetch ORT assets from the CDN to avoid module fetch failures in the worker.
  ort.env.wasm.wasmPaths =
    "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.0/dist/";
  sessions[lang] = await ort.InferenceSession.create(MODEL_URLS[lang], {
    executionProviders: ["wasm"],
  });
  return sessions[lang]!;
}

async function handleRunInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  lang: Lang
): Promise<TextSegment[]> {
  const session = await ensureSession(lang);

  const spectrogramInput = audioToSpectrogramTensor(
    audioBuffer,
    filterFreq,
    filterWidth,
  );
  if (!spectrogramInput) {
    return [];
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

  const decodedSegmentsList = decodePredictions(
    outputTensor.data,
    outputTensor.dims,
    lang
  );

  return decodedSegmentsList.length > 0 ? decodedSegmentsList[0] : [];
}

const ctx: DedicatedWorkerGlobalScope = self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;

  const respond = (response: WorkerResponse) => ctx.postMessage(response);

  try {
    if (message.type === "loadModel") {
      await ensureSession(message.lang);
      respond({ id: message.id, type: "modelLoaded" });
      return;
    }

    if (message.type === "runInference") {
      const segments = await handleRunInference(
        message.audioBuffer,
        message.filterFreq,
        message.filterWidth,
        message.lang
      );
      respond({ id: message.id, type: "inferenceResult", segments });
      return;
    }

    respond({
      id: (message as WorkerRequest).id,
      type: "error",
      error: "Unsupported worker message type.",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown worker error";
    respond({ id: message.id, type: "error", error: errorMessage });
  }
};

export {};
