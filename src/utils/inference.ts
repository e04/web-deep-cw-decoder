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

let inferenceWorker: Worker | null = null;
let nextRequestId = 1;
let modelLoadPromise: Promise<void> | null = null;
const pendingRequests = new Map<
  number,
  {
    resolve: (response: WorkerResponse) => void;
    reject: (error: Error) => void;
  }
>();

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
    pendingRequests.forEach(({ reject }) => {
      reject(new Error(event.message));
    });
    pendingRequests.clear();
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

export async function loadModel(): Promise<void> {
  if (modelLoadPromise) return modelLoadPromise;

  modelLoadPromise = sendMessage({ type: "loadModel" })
    .then((response) => {
      if (response.type === "modelLoaded") return;
      if (response.type === "error") throw new Error(response.error);
      throw new Error("Unexpected worker response while loading model.");
    })
    .catch((error) => {
      modelLoadPromise = null;
      throw error;
    });

  return modelLoadPromise;
}

export async function runInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
): Promise<string> {
  try {
    await loadModel();
  } catch (error) {
    console.error("Failed to load inference model", error);
    return "";
  }

  const audioCopy = audioBuffer.slice();

  try {
    const response = await sendMessage(
      {
        type: "runInference",
        audioBuffer: audioCopy,
        filterFreq,
        filterWidth,
      } as Omit<WorkerRequest, "id">,
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
