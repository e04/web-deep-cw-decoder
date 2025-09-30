import type { InferenceSession } from "onnxruntime-web";
import { audioToSpectrogram } from "./spectrogramUtils";
import { decodePredictions } from "./textDecoder";
// @ts-expect-error - ONNX model import
import model from "../model.onnx";

let ortSession: InferenceSession | null = null;

export async function loadModel(): Promise<void> {
  if (ortSession) return;
  ortSession = await ort.InferenceSession.create(model, {
    executionProviders: ["wasm"],
  });
}

export async function runInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number
): Promise<string> {
  if (!ortSession) return "";

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

  const inputName = ortSession.inputNames[0];
  const feeds = { [inputName]: inputTensor };
  const results = await ortSession.run(feeds);
  const outputTensor = results[ortSession.outputNames[0]];

  const decodedTextList = decodePredictions(
    outputTensor.data,
    outputTensor.dims
  );

  return decodedTextList.length > 0 ? decodedTextList[0] : "";
}
