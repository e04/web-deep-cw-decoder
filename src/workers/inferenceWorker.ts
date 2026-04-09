/// <reference lib="webworker" />
import type * as Ort from "onnxruntime-web";

import {
  PILEUP_FILTER_WIDTH_HZ,
  PILEUP_MATCH_HZ,
  PILEUP_MAX_PEAKS,
} from "../const";
import {
  type EnglishModelVariant,
  type InferenceDecodeMode,
  type InferenceBackend,
  type Lang,
  type LoadProgressStage,
  type ModelKey,
  MODEL_KEYS,
  type WorkerRequest,
  type WorkerResponse,
  getModelKey,
} from "../utils/inferenceProtocol";
import {
  audioToBinSequenceTensor,
  audioToNarrowShiftedSpectrogramTensor,
  audioToShiftedSpectrogramTensor,
  audioToSpectrogramTensor,
} from "../utils/spectrogramUtils";
import { selectStrongSeparatedCandidates } from "../utils/pileupCandidates";
import { decodePredictionsDetailed } from "../utils/textDecoder";
import ortWasmThreadedModuleUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.mjs?url";
import ortWasmThreadedBinaryUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm?url";
import ortWasmJsepModuleUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.mjs?url";
import ortWasmJsepBinaryUrl from "../../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm?url";

type OrtModule = typeof Ort;

function resolveModelUrl(fileName: string): string {
  return new URL(`/models/${fileName}`, self.location.origin).toString();
}

const MODEL_URLS: Record<ModelKey, string> = {
  cw_detect: resolveModelUrl("detect_cw/88C0EAD8-52C6-460C-9B9F-EE6CB56221F3"),
  en: resolveModelUrl("en/39578E22-27CE-4AFB-989F-450345767A53"),
  en_narrow: resolveModelUrl("en_narrow/4C1FFB1B-6F80-4B73-A5D2-6089EAF8E102"),
  ja: resolveModelUrl("ja/A960AA1B-FFD3-4795-A881-484F4EEB0455"),
};

const ORT_RUNTIME_ASSETS: Record<
  InferenceBackend,
  {
    binaryUrl: string;
    wasmPaths: {
      mjs: string;
    };
  }
> = {
  wasm: {
    binaryUrl: ortWasmThreadedBinaryUrl,
    wasmPaths: {
      mjs: ortWasmThreadedModuleUrl,
    },
  },
  webgpu: {
    binaryUrl: ortWasmJsepBinaryUrl,
    wasmPaths: {
      mjs: ortWasmJsepModuleUrl,
    },
  },
};

function createModelKeyRecord<T>(createValue: () => T): Record<ModelKey, T> {
  return Object.fromEntries(
    MODEL_KEYS.map((modelKey) => [modelKey, createValue()]),
  ) as Record<ModelKey, T>;
}

const modelDataPromises: Record<ModelKey, Promise<Uint8Array> | null> =
  createModelKeyRecord(() => null);

const modelDataCache: Record<ModelKey, Uint8Array | null> =
  createModelKeyRecord(() => null);

const ortBinaryPromises: Partial<Record<InferenceBackend, Promise<Uint8Array>>> =
  {};
const ortBinaryCache: Partial<Record<InferenceBackend, Uint8Array>> = {};

const ortModulePromises: Partial<Record<InferenceBackend, Promise<OrtModule>>> =
  {};

const sessions: Record<
  InferenceBackend,
  Record<ModelKey, Ort.InferenceSession | null>
> = {
  wasm: createModelKeyRecord(() => null),
  webgpu: createModelKeyRecord(() => null),
};

const backendRequestQueues: Partial<Record<InferenceBackend, Promise<void>>> = {};

function clampProgress(progress: number): number {
  return Math.max(0, Math.min(progress, 1));
}

function queueBackendRequest<T>(
  backend: InferenceBackend,
  task: () => Promise<T>,
): Promise<T> {
  if (backend !== "webgpu") {
    return task();
  }

  const previousTask = backendRequestQueues[backend] ?? Promise.resolve();
  const nextTask = previousTask.catch(() => undefined).then(task);

  backendRequestQueues[backend] = nextTask.then(
    () => undefined,
    () => undefined,
  );

  return nextTask;
}

async function fetchBinaryWithProgress(
  url: string,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch asset: ${response.status} ${response.statusText}`);
  }

  const totalBytes = Number(response.headers.get("content-length") ?? "0");
  const reader = response.body?.getReader();
  if (!reader) {
    const binary = new Uint8Array(await response.arrayBuffer());
    onProgress?.(1);
    return binary;
  }

  const chunks: Uint8Array[] = [];
  let receivedBytes = 0;
  onProgress?.(0);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;

    chunks.push(value);
    receivedBytes += value.byteLength;

    if (totalBytes > 0) {
      onProgress?.(clampProgress(receivedBytes / totalBytes));
    }
  }

  const binary = new Uint8Array(receivedBytes);
  let offset = 0;
  for (const chunk of chunks) {
    binary.set(chunk, offset);
    offset += chunk.byteLength;
  }

  onProgress?.(1);
  return binary;
}

async function getOrtBinary(
  backend: InferenceBackend,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const cachedBinary = ortBinaryCache[backend];
  if (cachedBinary) {
    onProgress?.(1);
    return cachedBinary;
  }

  const cachedPromise = ortBinaryPromises[backend];
  if (cachedPromise) {
    const binary = await cachedPromise;
    onProgress?.(1);
    return binary;
  }

  const binaryPromise = fetchBinaryWithProgress(
    ORT_RUNTIME_ASSETS[backend].binaryUrl,
    onProgress,
  )
    .then((binary) => {
      ortBinaryCache[backend] = binary;
      return binary;
    })
    .catch((error) => {
      ortBinaryPromises[backend] = undefined;
      throw error;
    });

  ortBinaryPromises[backend] = binaryPromise;

  return binaryPromise;
}

async function getModelData(
  modelKey: ModelKey,
  onProgress?: (progress: number) => void,
): Promise<Uint8Array> {
  const cachedModel = modelDataCache[modelKey];
  if (cachedModel) {
    onProgress?.(1);
    return cachedModel;
  }

  const cachedPromise = modelDataPromises[modelKey];
  if (cachedPromise) {
    const model = await cachedPromise;
    onProgress?.(1);
    return model;
  }

  const modelPromise = fetchBinaryWithProgress(MODEL_URLS[modelKey], onProgress)
    .then((model) => {
      modelDataCache[modelKey] = model;
      return model;
    })
    .catch((error) => {
      modelDataPromises[modelKey] = null;
      throw error;
    });

  modelDataPromises[modelKey] = modelPromise;

  return modelPromise;
}

async function getOrtModule(
  backend: InferenceBackend,
  onProgress?: (progress: number) => void,
): Promise<OrtModule> {
  const cachedModule = ortModulePromises[backend];
  if (cachedModule) return cachedModule;

  const modulePromise = (async () => {
    const ortBinary = await getOrtBinary(backend, onProgress);
    const ort = backend === "webgpu"
      ? await import("onnxruntime-web")
      : await import("onnxruntime-web/wasm");

    // Keep ORT runtime assets inside the app bundle so inference still works offline.
    ort.env.wasm.wasmPaths = ORT_RUNTIME_ASSETS[backend].wasmPaths;
    ort.env.wasm.wasmBinary = ortBinary;

    return ort as OrtModule;
  })();

  ortModulePromises[backend] = modulePromise;

  return modulePromise;
}

async function ensureSession(
  modelKey: ModelKey,
  backend: InferenceBackend,
  onOrtProgress?: (progress: number) => void,
  onModelProgress?: (progress: number) => void,
): Promise<Ort.InferenceSession> {
  const existingSession = sessions[backend][modelKey];
  if (existingSession) return existingSession;

  const [ort, modelData] = await Promise.all([
    getOrtModule(backend, onOrtProgress),
    getModelData(modelKey, onModelProgress),
  ]);
  const session = await ort.InferenceSession.create(modelData, {
    executionProviders: [backend],
  });

  sessions[backend][modelKey] = session;

  return session;
}

async function handleRunInference(
  audioBuffer: Float32Array,
  filterFreq: number | null,
  filterWidth: number,
  lang: Lang,
  backend: InferenceBackend,
  shiftTargetFreq?: number,
  englishModelVariant: EnglishModelVariant = "standard",
  decodeMode: InferenceDecodeMode = "display",
): Promise<{
  text: string;
  plainText?: string;
  wordSpaceSpans?: { startFrame: number; endFrame: number }[];
  characterSpans?: { char: string; startFrame: number; endFrame: number }[];
}> {
  const ort = await getOrtModule(backend);
  const modelKey = getModelKey(lang, englishModelVariant);
  const session = await ensureSession(modelKey, backend);

  const spectrogramInput = englishModelVariant === "narrow"
    ? shiftTargetFreq == null
      ? null
      : audioToNarrowShiftedSpectrogramTensor(audioBuffer, shiftTargetFreq)
    : shiftTargetFreq != null
    ? audioToShiftedSpectrogramTensor(audioBuffer, shiftTargetFreq, filterWidth)
    : filterFreq != null
    ? audioToShiftedSpectrogramTensor(audioBuffer, filterFreq, filterWidth)
    : audioToSpectrogramTensor(audioBuffer, filterFreq, filterWidth);
  if (!spectrogramInput) {
    return { text: "" };
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

  const decodedResults = decodePredictionsDetailed(
    outputTensor.data,
    outputTensor.dims,
    lang,
  );
  const decodedResult = decodedResults[0];

  if (!decodedResult) {
    return { text: "" };
  }

  if (decodeMode === "plain") {
    return { text: decodedResult.plainText };
  }

  if (decodeMode === "detailed") {
    return {
      text: decodedResult.displayText,
      plainText: decodedResult.plainText,
      wordSpaceSpans: decodedResult.wordSpaceSpans,
      characterSpans: decodedResult.characterSpans,
    };
  }

  return { text: decodedResult.displayText };
}

async function handleDetectCwBins(
  audioBuffer: Float32Array,
  backend: InferenceBackend,
  minFreqHz: number,
  maxFreqHz: number,
  lockSnrThresholdDb: number,
  releaseSnrThresholdDb: number,
  lockedFrequencies: number[],
): Promise<{ frequency: number; snrDb: number }[]> {
  const ort = await getOrtModule(backend);
  const session = await ensureSession("cw_detect", backend);
  const binSequences = audioToBinSequenceTensor(audioBuffer, minFreqHz, maxFreqHz);
  if (!binSequences) {
    return [];
  }

  const inputTensor = new ort.Tensor(
    "float32",
    binSequences.data,
    binSequences.dims,
  );

  const inputName = session.inputNames[0];
  const feeds = { [inputName]: inputTensor };
  const results = await session.run(feeds);
  const outputTensor = results[session.outputNames[0]];
  const rawSnrValues = outputTensor.data as Float32Array | number[];
  const snrValues = new Float32Array(binSequences.frequencies.length);
  for (let index = 0; index < snrValues.length; index++) {
    snrValues[index] = Number(rawSnrValues[index] ?? 0);
  }

  const scoredBins = binSequences.frequencies.map((frequency, index) => ({
    frequency,
    snrDb: snrValues[index],
  }));

  scoredBins.sort((left, right) => right.snrDb - left.snrDb);

  const aboveLockThresholdCandidates = scoredBins.filter(
    (candidate) => candidate.snrDb >= lockSnrThresholdDb,
  );
  const retainedCandidates: { frequency: number; snrDb: number }[] = [];
  const retainedFrequencies = new Set<number>();

  for (const lockedFrequency of lockedFrequencies) {
    const retainedCandidate = scoredBins.find(
      (candidate) =>
        !retainedFrequencies.has(candidate.frequency) &&
        Math.abs(candidate.frequency - lockedFrequency) <= PILEUP_MATCH_HZ &&
        candidate.snrDb >= releaseSnrThresholdDb,
    );

    if (!retainedCandidate) {
      continue;
    }

    retainedCandidates.push(retainedCandidate);
    retainedFrequencies.add(retainedCandidate.frequency);
  }

  retainedCandidates.sort((left, right) => right.snrDb - left.snrDb);

  const newLockCandidates = selectStrongSeparatedCandidates(
    aboveLockThresholdCandidates.filter((candidate) =>
      retainedCandidates.every(
        (retainedCandidate) =>
          Math.abs(retainedCandidate.frequency - candidate.frequency) >=
          PILEUP_FILTER_WIDTH_HZ,
      )
    ),
    Math.max(0, PILEUP_MAX_PEAKS - retainedCandidates.length),
    PILEUP_FILTER_WIDTH_HZ,
  );
  const selectedCandidates = [...retainedCandidates, ...newLockCandidates];
  return selectedCandidates;
}

async function handleRunPileupInference(
  audioBuffer: Float32Array,
  backend: InferenceBackend,
  tracks: { id: number; frequency: number }[],
): Promise<Record<number, string>> {
  if (tracks.length === 0) {
    return {};
  }

  const ort = await getOrtModule(backend);
  const session = await ensureSession(getModelKey("en", "narrow"), backend);
  const inputName = session.inputNames[0];
  const outputName = session.outputNames[0];
  const textMap: Record<number, string> = {};

  for (const track of tracks) {
    const spectrogramInput = audioToNarrowShiftedSpectrogramTensor(
      audioBuffer,
      track.frequency,
    );
    if (!spectrogramInput) {
      continue;
    }

    const inputTensor = new ort.Tensor(
      "float32",
      spectrogramInput.data,
      spectrogramInput.dims,
    );
    const results = await session.run({ [inputName]: inputTensor });
    const outputTensor = results[outputName];
    const decodedResults = decodePredictionsDetailed(
      outputTensor.data,
      outputTensor.dims,
      "en",
    );
    const decodedResult = decodedResults[0];

    if (decodedResult?.displayText) {
      textMap[track.id] = decodedResult.displayText;
    }
  }

  return textMap;
}

const ctx: DedicatedWorkerGlobalScope =
  self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  const requestId = message.id;

  const respond = (response: WorkerResponse) => ctx.postMessage(response);
  const reportProgress = (
    stage: LoadProgressStage,
    progress: number,
    backend: InferenceBackend,
    modelKey?: ModelKey,
  ) => {
    respond({
      id: requestId,
      type: "loadProgress",
      stage,
      backend,
      modelKey,
      progress: clampProgress(progress),
    });
  };

  try {
    await queueBackendRequest(message.backend, async () => {
      // onnxruntime-web WebGPU requests are not safe to overlap in one worker.
      if (message.type === "loadModel") {
        const modelKey = getModelKey(
          message.lang,
          message.englishModelVariant,
        );
        await ensureSession(
          modelKey,
          message.backend,
          (progress) => reportProgress("ort", progress, message.backend),
          (progress) =>
            reportProgress("model", progress, message.backend, modelKey),
        );
        respond({ id: message.id, type: "modelLoaded" });
        return;
      }

      if (message.type === "loadCwDetectionModel") {
        const modelKey: ModelKey = "cw_detect";
        await ensureSession(
          modelKey,
          message.backend,
          (progress) => reportProgress("ort", progress, message.backend),
          (progress) =>
            reportProgress("model", progress, message.backend, modelKey),
        );
        respond({ id: message.id, type: "modelLoaded" });
        return;
      }

      if (message.type === "resetCwDetectionState") {
        respond({ id: message.id, type: "stateReset" });
        return;
      }

      if (message.type === "runInference") {
        const result = await handleRunInference(
          message.audioBuffer,
          message.filterFreq,
          message.filterWidth,
          message.lang,
          message.backend,
          message.shiftTargetFreq,
          message.englishModelVariant,
          message.decodeMode,
        );
        respond({ id: message.id, type: "inferenceResult", ...result });
        return;
      }

      if (message.type === "runPileupInference") {
        const textMap = await handleRunPileupInference(
          message.audioBuffer,
          message.backend,
          message.tracks,
        );
        respond({
          id: message.id,
          type: "pileupInferenceResult",
          textMap,
        });
        return;
      }

      if (message.type === "detectCwBins") {
        const candidates = await handleDetectCwBins(
          message.audioBuffer,
          message.backend,
          message.minFreqHz,
          message.maxFreqHz,
          message.lockSnrThresholdDb,
          message.releaseSnrThresholdDb,
          message.lockedFrequencies,
        );
        respond({
          id: message.id,
          type: "cwDetectionResult",
          candidates,
        });
        return;
      }

      respond({
        id: requestId,
        type: "error",
        error: "Unsupported worker message type.",
      });
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown worker error";
    respond({ id: requestId, type: "error", error: errorMessage });
  }
};

export {};
