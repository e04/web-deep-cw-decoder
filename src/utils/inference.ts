import type {
  InferenceCharacterSpan,
  EnglishModelVariant,
  InferenceDecodeMode,
  InferenceBackend,
  InferenceWordSpaceSpan,
  Lang,
  ModelKey,
  WorkerRequest,
  WorkerResponse,
} from "./inferenceProtocol";
import { MODEL_KEYS, getModelKey } from "./inferenceProtocol";

type FinalWorkerResponse = Exclude<WorkerResponse, { type: "loadProgress" }>;

type PendingRequest = {
  resolve: (response: FinalWorkerResponse) => void;
  reject: (error: Error) => void;
};

type RunInferenceRequest = Omit<
  Extract<WorkerRequest, { type: "runInference" }>,
  "id"
>;
type RunPileupInferenceRequest = Omit<
  Extract<WorkerRequest, { type: "runPileupInference" }>,
  "id"
>;
type LoadModelRequest = Omit<Extract<WorkerRequest, { type: "loadModel" }>, "id">;
type LoadCwDetectionModelRequest = Omit<
  Extract<WorkerRequest, { type: "loadCwDetectionModel" }>,
  "id"
>;
type ResetCwDetectionStateRequest = Omit<
  Extract<WorkerRequest, { type: "resetCwDetectionState" }>,
  "id"
>;
type DetectCwBinsRequest = Omit<
  Extract<WorkerRequest, { type: "detectCwBins" }>,
  "id"
>;

type RunInferenceOptions = {
  lang?: Lang;
  backend?: InferenceBackend;
  shiftTargetFreq?: number;
  englishModelVariant?: EnglishModelVariant;
  decodeMode?: InferenceDecodeMode;
};

type InferenceResultResponse = Extract<
  FinalWorkerResponse,
  { type: "inferenceResult" }
>;
type PileupInferenceResultResponse = Extract<
  FinalWorkerResponse,
  { type: "pileupInferenceResult" }
>;

export type DetailedInferenceResult = {
  displayText: string;
  plainText: string;
  wordSpaceSpans: InferenceWordSpaceSpan[];
  characterSpans: InferenceCharacterSpan[];
};

export type BackendLoadProgress = {
  ort: number;
  model: Record<ModelKey, number>;
};

export type CwDetectionCandidate = {
  frequency: number;
  snrDb: number;
};

let inferenceWorker: Worker | null = null;
let nextRequestId = 1;

function createModelKeyRecord<T>(createValue: () => T): Record<ModelKey, T> {
  return Object.fromEntries(
    MODEL_KEYS.map((modelKey) => [modelKey, createValue()]),
  ) as Record<ModelKey, T>;
}

const modelLoadPromises: Record<
  InferenceBackend,
  Record<ModelKey, Promise<void> | null>
> = {
  wasm: createModelKeyRecord(() => null),
  webgpu: createModelKeyRecord(() => null),
};

const pendingRequests = new Map<number, PendingRequest>();
const progressSubscribers = new Set<() => void>();
const loadProgressState: Record<InferenceBackend, BackendLoadProgress> = {
  wasm: { ort: 0, model: createModelKeyRecord(() => 0) },
  webgpu: { ort: 0, model: createModelKeyRecord(() => 0) },
};

function notifyProgressSubscribers(): void {
  progressSubscribers.forEach((listener) => {
    listener();
  });
}

function setLoadProgress(
  backend: InferenceBackend,
  stage: "ort" | "model",
  progress: number,
  modelKey?: ModelKey,
): void {
  const nextProgress = Math.max(0, Math.min(progress, 1));
  const backendProgress = loadProgressState[backend];

  if (stage === "ort") {
    if (backendProgress.ort === nextProgress) return;
    backendProgress.ort = nextProgress;
    notifyProgressSubscribers();
    return;
  }

  if (!modelKey) return;
  if (backendProgress.model[modelKey] === nextProgress) return;
  backendProgress.model[modelKey] = nextProgress;
  notifyProgressSubscribers();
}

export function getLoadProgressSnapshot(
  backend: InferenceBackend,
): BackendLoadProgress {
  const progress = loadProgressState[backend];

  return {
    ort: progress.ort,
    model: { ...progress.model },
  };
}

export function subscribeToLoadProgress(listener: () => void): () => void {
  progressSubscribers.add(listener);

  return () => {
    progressSubscribers.delete(listener);
  };
}

function resetWorker(message: string): void {
  inferenceWorker?.terminate();
  inferenceWorker = null;

  MODEL_KEYS.forEach((modelKey) => {
    modelLoadPromises.wasm[modelKey] = null;
    modelLoadPromises.webgpu[modelKey] = null;
  });

  pendingRequests.forEach(({ reject }) => {
    reject(new Error(message));
  });
  pendingRequests.clear();

  loadProgressState.wasm.ort = 0;
  loadProgressState.webgpu.ort = 0;
  MODEL_KEYS.forEach((modelKey) => {
    loadProgressState.wasm.model[modelKey] = 0;
    loadProgressState.webgpu.model[modelKey] = 0;
  });
  notifyProgressSubscribers();
}

function getWorker(): Worker {
  if (inferenceWorker) return inferenceWorker;

  inferenceWorker = new Worker(
    new URL("../workers/inferenceWorker.ts", import.meta.url),
    { type: "module" },
  );

  inferenceWorker.onmessage = (event: MessageEvent<WorkerResponse>) => {
    const message = event.data;

    if (message.type === "loadProgress") {
      setLoadProgress(
        message.backend,
        message.stage,
        message.progress,
        message.modelKey,
      );
      return;
    }

    const pending = pendingRequests.get(message.id);
    if (!pending) return;

    pendingRequests.delete(message.id);

    if (message.type === "error") {
      pending.reject(new Error(message.error));
      return;
    }

    pending.resolve(message);
  };

  inferenceWorker.onerror = (event: ErrorEvent) => {
    resetWorker(event.message || "Inference worker crashed.");
  };

  return inferenceWorker;
}

function sendMessage(
  request:
    | LoadModelRequest
    | RunInferenceRequest
    | RunPileupInferenceRequest
    | LoadCwDetectionModelRequest
    | ResetCwDetectionStateRequest
    | DetectCwBinsRequest,
  transfer?: Transferable[],
): Promise<FinalWorkerResponse> {
  const worker = getWorker();
  const requestId = nextRequestId++;
  const message = { ...request, id: requestId } as WorkerRequest;

  return new Promise<FinalWorkerResponse>((resolve, reject) => {
    pendingRequests.set(requestId, { resolve, reject });
    worker.postMessage(message, transfer ?? []);
  });
}

export async function loadModel(
  lang: Lang = "en",
  backend: InferenceBackend = "wasm",
  englishModelVariant: EnglishModelVariant = "standard",
): Promise<void> {
  const modelKey = getModelKey(lang, englishModelVariant);
  const cachedPromise = modelLoadPromises[backend][modelKey];
  if (cachedPromise) return cachedPromise;

  const promise = sendMessage({
    type: "loadModel",
    lang,
    backend,
    englishModelVariant,
  })
    .then((response) => {
      setLoadProgress(backend, "ort", 1);
      setLoadProgress(backend, "model", 1, modelKey);
      if (response.type === "modelLoaded") return;
      if (response.type === "error") throw new Error(response.error);
      throw new Error("Unexpected worker response while loading model.");
    })
    .catch((error) => {
      modelLoadPromises[backend][modelKey] = null;
      throw error;
    });

  modelLoadPromises[backend][modelKey] = promise;

  return promise;
}

export async function loadCwDetectionModel(
  backend: InferenceBackend = "wasm",
): Promise<void> {
  const modelKey: ModelKey = "cw_detect";
  const cachedPromise = modelLoadPromises[backend][modelKey];
  if (cachedPromise) {
    return cachedPromise;
  }

  const promise = sendMessage({
    type: "loadCwDetectionModel",
    backend,
  })
    .then((response) => {
      setLoadProgress(backend, "ort", 1);
      setLoadProgress(backend, "model", 1, modelKey);
      if (response.type === "modelLoaded") {
        return;
      }
      if (response.type === "error") {
        throw new Error(response.error);
      }
      throw new Error("Unexpected worker response while loading CW detection model.");
    })
    .catch((error) => {
      modelLoadPromises[backend][modelKey] = null;
      throw error;
    });

  modelLoadPromises[backend][modelKey] = promise;

  return promise;
}

async function requestInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  options: RunInferenceOptions = {},
): Promise<InferenceResultResponse | null> {
  const {
    lang = "en",
    backend = "wasm",
    shiftTargetFreq,
    englishModelVariant = "standard",
    decodeMode = "display",
  } = options;

  try {
    await loadModel(lang, backend, englishModelVariant);
  } catch (error) {
    console.error("Failed to load inference model", error);
    return null;
  }

  const audioCopy = audioBuffer.slice();

  try {
    const request: RunInferenceRequest = {
      type: "runInference",
      lang,
      backend,
      audioBuffer: audioCopy,
      filterFreq,
      filterWidth,
      shiftTargetFreq,
      englishModelVariant,
      decodeMode,
    };

    const response = await sendMessage(
      request,
      [audioCopy.buffer],
    );

    if (response.type === "inferenceResult") {
      return response;
    }

    return null;
  } catch (error) {
    console.error("Inference worker error", error);
    return null;
  }
}

export async function runInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  options: RunInferenceOptions = {},
): Promise<string> {
  const response = await requestInference(audioBuffer, filterFreq, filterWidth, {
    ...options,
    decodeMode: "display",
  });

  return response?.text ?? "";
}

export async function runPileupInference(
  audioBuffer: Float32Array,
  tracks: { id: number; frequency: number }[],
  backend: InferenceBackend = "wasm",
): Promise<Record<number, string>> {
  if (tracks.length === 0) {
    return {};
  }

  try {
    await loadModel("en", backend, "narrow");
  } catch (error) {
    console.error("Failed to load pileup inference model", error);
    return {};
  }

  const audioCopy = audioBuffer.slice();

  try {
    const response = (await sendMessage(
      {
        type: "runPileupInference",
        backend,
        audioBuffer: audioCopy,
        tracks,
      },
      [audioCopy.buffer],
    )) as PileupInferenceResultResponse;

    if (response.type === "pileupInferenceResult") {
      return response.textMap;
    }

    return {};
  } catch (error) {
    console.error("Pileup inference worker error", error);
    return {};
  }
}

export async function runInferencePlain(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  options: RunInferenceOptions = {},
): Promise<string> {
  const response = await requestInference(audioBuffer, filterFreq, filterWidth, {
    ...options,
    decodeMode: "plain",
  });

  return response?.text ?? "";
}

export async function runInferenceDetailed(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  options: RunInferenceOptions = {},
): Promise<DetailedInferenceResult> {
  const response = await requestInference(audioBuffer, filterFreq, filterWidth, {
    ...options,
    decodeMode: "detailed",
  });

  return {
    displayText: response?.text ?? "",
    plainText: response?.plainText ?? response?.text ?? "",
    wordSpaceSpans: response?.wordSpaceSpans ?? [],
    characterSpans: response?.characterSpans ?? [],
  };
}

export async function detectCwBins(
  audioBuffer: Float32Array,
  backend: InferenceBackend = "wasm",
  minFreqHz: number,
  maxFreqHz: number,
  lockSnrThresholdDb: number,
  releaseSnrThresholdDb: number,
  lockedFrequencies: number[],
): Promise<CwDetectionCandidate[]> {
  try {
    await loadCwDetectionModel(backend);
  } catch (error) {
    console.error("Failed to load CW detection model", error);
    return [];
  }

  const audioCopy = audioBuffer.slice();

  try {
    const request: DetectCwBinsRequest = {
      type: "detectCwBins",
      backend,
      audioBuffer: audioCopy,
      minFreqHz,
      maxFreqHz,
      lockSnrThresholdDb,
      releaseSnrThresholdDb,
      lockedFrequencies,
    };
    const response = await sendMessage(request, [audioCopy.buffer]);

    if (response.type === "cwDetectionResult") {
      return response.candidates;
    }

    return [];
  } catch (error) {
    console.error("CW detection worker error", error);
    return [];
  }
}

export async function resetCwDetectionState(
  backend: InferenceBackend = "wasm",
): Promise<void> {
  try {
    const response = await sendMessage({
      type: "resetCwDetectionState",
      backend,
    });

    if (response.type === "stateReset") {
      return;
    }
  } catch (error) {
    console.error("Failed to reset CW detection state", error);
  }
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    resetWorker("Inference worker reloaded.");
  });
}
