export type Lang = "en" | "ja";
export type EnglishModelVariant = "standard" | "narrow";
export type ModelKey =
  | "en"
  | "en_narrow"
  | "ja"
  | "cw_detect";
export type InferenceDecodeMode = "display" | "plain" | "detailed";
export type InferenceWordSpaceSpan = {
  startFrame: number;
  endFrame: number;
};
export type InferenceCharacterSpan = {
  char: string;
  startFrame: number;
  endFrame: number;
};

export type InferenceBackend = "wasm" | "webgpu";
export type LoadProgressStage = "ort" | "model";

export const INFERENCE_BACKEND_OPTIONS = [
  { value: "wasm", label: "WASM" },
  { value: "webgpu", label: "WebGPU" },
] as const;
export const MODEL_KEYS: readonly ModelKey[] = [
  "en",
  "en_narrow",
  "ja",
  "cw_detect",
] as const;

export function getModelKey(
  lang: Lang,
  englishModelVariant: EnglishModelVariant = "standard",
): ModelKey {
  if (lang === "ja") {
    return "ja";
  }

  if (englishModelVariant === "narrow") {
    return "en_narrow";
  }

  return "en";
}

export type WorkerRequest =
  | {
      id: number;
      type: "loadModel";
      lang: Lang;
      backend: InferenceBackend;
      englishModelVariant?: EnglishModelVariant;
    }
  | {
      id: number;
      type: "runInference";
      lang: Lang;
      backend: InferenceBackend;
      audioBuffer: Float32Array;
      filterFreq: number | null;
      filterWidth: number;
      shiftTargetFreq?: number;
      englishModelVariant?: EnglishModelVariant;
      decodeMode?: InferenceDecodeMode;
    }
  | {
      id: number;
      type: "runPileupInference";
      backend: InferenceBackend;
      audioBuffer: Float32Array;
      tracks: { id: number; frequency: number }[];
    }
  | {
      id: number;
      type: "loadCwDetectionModel";
      backend: InferenceBackend;
    }
  | {
      id: number;
      type: "resetCwDetectionState";
      backend: InferenceBackend;
    }
  | {
      id: number;
      type: "detectCwBins";
      backend: InferenceBackend;
      audioBuffer: Float32Array;
      minFreqHz: number;
      maxFreqHz: number;
      lockSnrThresholdDb: number;
      releaseSnrThresholdDb: number;
      lockedFrequencies: number[];
    };

export type WorkerResponse =
  | {
      id: number;
      type: "loadProgress";
      stage: LoadProgressStage;
      backend: InferenceBackend;
      progress: number;
      modelKey?: ModelKey;
    }
  | { id: number; type: "modelLoaded" }
  | { id: number; type: "stateReset" }
  | {
      id: number;
      type: "inferenceResult";
      text: string;
      plainText?: string;
      wordSpaceSpans?: InferenceWordSpaceSpan[];
      characterSpans?: InferenceCharacterSpan[];
    }
  | {
      id: number;
      type: "pileupInferenceResult";
      textMap: Record<number, string>;
    }
  | {
      id: number;
      type: "cwDetectionResult";
      candidates: { frequency: number; snrDb: number }[];
    }
  | { id: number; type: "error"; error: string };
