import type { TextSegment } from "./textDecoder";

type Lang = "en" | "ja";

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

let inferenceWorker: Worker | null = null;
let nextRequestId = 1;
const modelLoadPromises: Record<Lang, Promise<void> | null> = {
  en: null,
  ja: null,
};
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

export async function loadModel(lang: Lang = "en"): Promise<void> {
  if (modelLoadPromises[lang]) return modelLoadPromises[lang]!;

  const promise = sendMessage({ type: "loadModel", lang })
    .then((response) => {
      if (response.type === "modelLoaded") return;
      if (response.type === "error") throw new Error(response.error);
      throw new Error("Unexpected worker response while loading model.");
    })
    .catch((error) => {
      modelLoadPromises[lang] = null;
      throw error;
    });

  modelLoadPromises[lang] = promise;

  return promise;
}

export async function runInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  lang: Lang = "en",
): Promise<TextSegment[]> {
  try {
    await loadModel(lang);
  } catch (error) {
    console.error("Failed to load inference model", error);
    return [];
  }

  const audioCopy = audioBuffer.slice();

  try {
    const response = await sendMessage(
      {
        type: "runInference",
        lang,
        audioBuffer: audioCopy,
        filterFreq,
        filterWidth,
      } as Omit<WorkerRequest, "id">,
      [audioCopy.buffer],
    );

    if (response.type === "inferenceResult") {
      return response.segments;
    }

    return [];
  } catch (error) {
    console.error("Inference worker error", error);
    return [];
  }
}
