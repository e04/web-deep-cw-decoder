import type {
  InferenceBackend,
  Lang,
  WorkerRequest,
  WorkerResponse,
} from "./inferenceProtocol";

type PendingRequest = {
  resolve: (response: WorkerResponse) => void;
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
}

function getWorker(): Worker {
  if (inferenceWorker) return inferenceWorker;

  inferenceWorker = new Worker(
    new URL("../workers/inferenceWorker.ts", import.meta.url),
    { type: "module" },
  );

  inferenceWorker.onmessage = (event: MessageEvent<WorkerResponse>) => {
    const message = event.data;
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
): Promise<WorkerResponse> {
  const worker = getWorker();
  const requestId = nextRequestId++;
  const message = { ...request, id: requestId } as WorkerRequest;

  return new Promise<WorkerResponse>((resolve, reject) => {
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
