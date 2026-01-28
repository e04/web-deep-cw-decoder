/// <reference lib="webworker" />
import * as ort from "onnxruntime-web";
import { audioToSpectrogram } from "../utils/spectrogramUtils";
import { decodePredictions } from "../utils/textDecoder";
// @ts-expect-error - ONNX model import
import model from "../model.onnx";

type WorkerRequest =
  | { id: number; type: "loadModel" }
  | {
      id: number;
      type: "runInference";
      audioBuffer: Float32Array;
      filterFreq: number | null;
      filterWidth: number;
    };

type WorkerResponse =
  | { id: number; type: "modelLoaded" }
  | { id: number; type: "inferenceResult"; text: string }
  | { id: number; type: "error"; error: string };

let session: ort.InferenceSession | null = null;

async function ensureSession(): Promise<void> {
  if (session) return;
  // Fetch ORT assets from the CDN to avoid module fetch failures in the worker.
  ort.env.wasm.wasmPaths =
    "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/";
  session = await ort.InferenceSession.create(model, {
    executionProviders: ["wasm"],
  });
}

async function handleRunInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number
): Promise<string> {
  if (!session) return "";

  const spectrogram = audioToSpectrogram(audioBuffer, filterFreq, filterWidth);
  const timeSteps = spectrogram.length;
  if (timeSteps === 0) return "";

  const freqBins = spectrogram[0].length;
  const flattenedSpectrogram = new Float32Array(timeSteps * freqBins);
  for (let t = 0; t < timeSteps; t++) {
    flattenedSpectrogram.set(spectrogram[t], t * freqBins);
  }

  const dims = [1, timeSteps, freqBins, 1];
  const inputTensor = new ort.Tensor("float32", flattenedSpectrogram, dims);

  const inputName = session.inputNames[0];
  const feeds = { [inputName]: inputTensor };
  const results = await session.run(feeds);
  const outputTensor = results[session.outputNames[0]];

  const decodedTextList = decodePredictions(
    outputTensor.data,
    outputTensor.dims
  );

  return decodedTextList.length > 0 ? decodedTextList[0] : "";
}

const ctx: DedicatedWorkerGlobalScope = self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;

  const respond = (response: WorkerResponse) => ctx.postMessage(response);

  try {
    if (message.type === "loadModel") {
      await ensureSession();
      respond({ id: message.id, type: "modelLoaded" });
      return;
    }

    if (message.type === "runInference") {
      if (!session) {
        await ensureSession();
      }
      const text = await handleRunInference(
        message.audioBuffer,
        message.filterFreq,
        message.filterWidth
      );
      respond({ id: message.id, type: "inferenceResult", text });
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
