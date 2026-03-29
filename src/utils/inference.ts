import type {
  InferenceBackend,
  Lang,
  WorkerRequest,
  WorkerResponse,
} from "./inferenceProtocol";

type FinalWorkerResponse = Exclude<WorkerResponse, { type: "loadProgress" }>;

type PendingRequest = {
  resolve: (response: FinalWorkerResponse) => void;
  reject: (error: Error) => void;
};

type RunInferenceRequest = Omit<
  Extract<WorkerRequest, { type: "runInference" }>,
  "id"
>;

type RunInferenceOptions = {
  lang?: Lang;
  backend?: InferenceBackend;
  shiftTargetFreq?: number;
};

export type BackendLoadProgress = {
  ort: number;
  model: Record<Lang, number>;
};

let inferenceWorker: Worker | null = null;
let nextRequestId = 1;

const modelLoadPromises: Record<
  InferenceBackend,
  Record<Lang, Promise<void> | null>
> = {
  wasm: { en: null, ja: null },
  webgpu: { en: null, ja: null },
};

const pendingRequests = new Map<number, PendingRequest>();
const progressSubscribers = new Set<() => void>();
const loadProgressState: Record<InferenceBackend, BackendLoadProgress> = {
  wasm: { ort: 0, model: { en: 0, ja: 0 } },
  webgpu: { ort: 0, model: { en: 0, ja: 0 } },
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
  lang?: Lang,
): void {
  const nextProgress = Math.max(0, Math.min(progress, 1));
  const backendProgress = loadProgressState[backend];

  if (stage === "ort") {
    if (backendProgress.ort === nextProgress) return;
    backendProgress.ort = nextProgress;
    notifyProgressSubscribers();
    return;
  }

  if (!lang) return;
  if (backendProgress.model[lang] === nextProgress) return;
  backendProgress.model[lang] = nextProgress;
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

  modelLoadPromises.wasm.en = null;
  modelLoadPromises.wasm.ja = null;
  modelLoadPromises.webgpu.en = null;
  modelLoadPromises.webgpu.ja = null;

  pendingRequests.forEach(({ reject }) => {
    reject(new Error(message));
  });
  pendingRequests.clear();

  loadProgressState.wasm.ort = 0;
  loadProgressState.wasm.model.en = 0;
  loadProgressState.wasm.model.ja = 0;
  loadProgressState.webgpu.ort = 0;
  loadProgressState.webgpu.model.en = 0;
  loadProgressState.webgpu.model.ja = 0;
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
        message.lang,
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
  request: Omit<WorkerRequest, "id">,
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
): Promise<void> {
  const cachedPromise = modelLoadPromises[backend][lang];
  if (cachedPromise) return cachedPromise;

  const promise = sendMessage({ type: "loadModel", lang, backend })
    .then((response) => {
      setLoadProgress(backend, "ort", 1);
      setLoadProgress(backend, "model", 1, lang);
      if (response.type === "modelLoaded") return;
      if (response.type === "error") throw new Error(response.error);
      throw new Error("Unexpected worker response while loading model.");
    })
    .catch((error) => {
      modelLoadPromises[backend][lang] = null;
      throw error;
    });

  modelLoadPromises[backend][lang] = promise;

  return promise;
}

export async function runInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  options: RunInferenceOptions = {},
): Promise<string> {
  const {
    lang = "en",
    backend = "wasm",
    shiftTargetFreq,
  } = options;

  try {
    await loadModel(lang, backend);
  } catch (error) {
    console.error("Failed to load inference model", error);
    return "";
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
    };

    const response = await sendMessage(
      request,
      [audioCopy.buffer],
    );

    if (response.type === "inferenceResult") {
      return response.text;
    }

    return "";
  } catch (error) {
    console.error("Inference worker error", error);
    return "";
  }
}
