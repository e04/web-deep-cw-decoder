export type Lang = "en" | "ja";

export type InferenceBackend = "wasm" | "webgpu";
export type LoadProgressStage = "ort" | "model";

export const INFERENCE_BACKEND_OPTIONS = [
  { value: "wasm", label: "WASM" },
  { value: "webgpu", label: "WebGPU" },
] as const;

export type WorkerRequest =
  | { id: number; type: "loadModel"; lang: Lang; backend: InferenceBackend }
  | {
      id: number;
      type: "runInference";
      lang: Lang;
      backend: InferenceBackend;
      audioBuffer: Float32Array;
      filterFreq: number | null;
      filterWidth: number;
      shiftTargetFreq?: number;
    };

export type WorkerResponse =
  | {
      id: number;
      type: "loadProgress";
      stage: LoadProgressStage;
      backend: InferenceBackend;
      progress: number;
      lang?: Lang;
    }
  | { id: number; type: "modelLoaded" }
  | { id: number; type: "inferenceResult"; text: string }
  | { id: number; type: "error"; error: string };
