import { useEffect, useMemo, useRef, useState } from "react";
import {
  AUDIO_CHUNK_SAMPLES,
  FFT_LENGTH,
  HOP_LENGTH,
  SAMPLE_RATE,
} from "../const";
import { waitForNextAudioChunk } from "../useDecode";
import {
  loadModel,
  runInferenceDetailed,
  type DetailedInferenceResult,
} from "../utils/inference";
import type {
  InferenceBackend,
  InferenceCharacterSpan,
  InferenceWordSpaceSpan,
} from "../utils/inferenceProtocol";

const STREAMING_MAX_SEGMENT_SECONDS = 30;
const STREAMING_TAIL_GUARD_SECONDS = 1.25;
const STREAMING_MIN_PENDING_SECONDS = 2;
const STREAMING_MIN_CONFIRMED_SECONDS = 2;
const STREAMING_REDECODE_AUDIO_RETENTION_SECONDS = 120;
const STREAMING_ANALYSIS_MIN_INTERVAL_MS = 1000;

const STREAMING_MAX_SEGMENT_SAMPLES =
  STREAMING_MAX_SEGMENT_SECONDS * SAMPLE_RATE;
const STREAMING_TAIL_GUARD_SAMPLES =
  STREAMING_TAIL_GUARD_SECONDS * SAMPLE_RATE;
const STREAMING_MIN_PENDING_SAMPLES =
  STREAMING_MIN_PENDING_SECONDS * SAMPLE_RATE;
const STREAMING_MIN_CONFIRMED_SAMPLES =
  STREAMING_MIN_CONFIRMED_SECONDS * SAMPLE_RATE;
const STREAMING_REDECODE_AUDIO_RETENTION_SAMPLES =
  STREAMING_REDECODE_AUDIO_RETENTION_SECONDS * SAMPLE_RATE;

type DecoderLanguage = "EN" | "EN/JA";

type UseStreamingDecodeParams = {
  filterFreq: number | null;
  filterWidth: number;
  stream: MediaStream | null;
  language: DecoderLanguage;
  backend: InferenceBackend;
  enabled?: boolean;
};

type UseStreamingDecodeResult = {
  loaded: boolean;
  loadedJa: boolean;
  loadError: string | null;
  text: string;
  textJa: string;
  pendingText: string;
  pendingTextJa: string;
  segments: StreamingDecodeSegment[];
  isDecoding: boolean;
};

type StreamingAudioState = {
  version: number;
};

type ConfirmedSplitPoint = {
  sample: number;
  endFrame: number;
};

export type StreamingDecodeLane = {
  text: string;
  characterSpans: InferenceCharacterSpan[];
};

export type StreamingDecodeSegment = {
  id: number;
  audioBuffer: Float32Array | null;
  filterFreq: number | null;
  filterWidth: number;
  en: StreamingDecodeLane | null;
  ja: StreamingDecodeLane | null;
};

function appendAudioChunk(
  currentSamples: Float32Array,
  nextChunk: Float32Array,
): Float32Array {
  const nextSamples = new Float32Array(currentSamples.length + nextChunk.length);
  nextSamples.set(currentSamples);
  nextSamples.set(nextChunk, currentSamples.length);
  return nextSamples;
}

function dropLeadingSamples(
  currentSamples: Float32Array,
  sampleCount: number,
): Float32Array {
  if (sampleCount <= 0) {
    return currentSamples;
  }

  if (sampleCount >= currentSamples.length) {
    return new Float32Array(0);
  }

  return currentSamples.slice(sampleCount);
}

function getSpanSplitSample(span: InferenceWordSpaceSpan): number {
  const midFrame = (span.startFrame + span.endFrame) / 2;
  return Math.round(midFrame * HOP_LENGTH + FFT_LENGTH / 2);
}

function getConfirmedSplitPoint(
  spans: InferenceWordSpaceSpan[],
  analysisLength: number,
  allowNearEnd = false,
): ConfirmedSplitPoint | null {
  const maxCommittedSample = allowNearEnd
    ? analysisLength
    : Math.max(
        STREAMING_MIN_CONFIRMED_SAMPLES,
        analysisLength - STREAMING_TAIL_GUARD_SAMPLES,
      );

  for (let index = spans.length - 1; index >= 0; index -= 1) {
    const span = spans[index];
    const splitSample = getSpanSplitSample(span);
    if (
      splitSample >= STREAMING_MIN_CONFIRMED_SAMPLES &&
      splitSample <= maxCommittedSample
    ) {
      return {
        sample: splitSample,
        endFrame: span.endFrame,
      };
    }
  }

  return null;
}

function normalizeDecodedSegment(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function normalizeDetailedResult(
  result: DetailedInferenceResult,
): StreamingDecodeLane {
  const inputChars = Array.from(result.plainText);
  if (
    inputChars.length === 0 ||
    inputChars.length !== result.characterSpans.length
  ) {
    return {
      text: normalizeDecodedSegment(result.plainText),
      characterSpans: [],
    };
  }

  const normalizedChars: string[] = [];
  const normalizedSpans: InferenceCharacterSpan[] = [];
  let pendingWhitespaceStart: number | null = null;
  let pendingWhitespaceEnd: number | null = null;

  inputChars.forEach((char, index) => {
    const span = result.characterSpans[index];
    if (!span) {
      return;
    }

    if (/\s/.test(char)) {
      if (normalizedChars.length === 0) {
        return;
      }

      if (pendingWhitespaceStart == null) {
        pendingWhitespaceStart = span.startFrame;
      }
      pendingWhitespaceEnd = span.endFrame;
      return;
    }

    if (pendingWhitespaceStart != null && pendingWhitespaceEnd != null) {
      normalizedChars.push(" ");
      normalizedSpans.push({
        char: " ",
        startFrame: pendingWhitespaceStart,
        endFrame: pendingWhitespaceEnd,
      });
      pendingWhitespaceStart = null;
      pendingWhitespaceEnd = null;
    }

    normalizedChars.push(char);
    normalizedSpans.push({
      char,
      startFrame: span.startFrame,
      endFrame: span.endFrame,
    });
  });

  return {
    text: normalizedChars.join(""),
    characterSpans: normalizedSpans,
  };
}

function trimDetailedResultToFrame(
  result: DetailedInferenceResult,
  endFrame: number,
): DetailedInferenceResult {
  const characterSpans = result.characterSpans.filter(
    (span) => span.endFrame <= endFrame,
  );
  const plainText = characterSpans.map((span) => span.char).join("");

  return {
    displayText: plainText,
    plainText,
    wordSpaceSpans: result.wordSpaceSpans.filter(
      (span) => span.endFrame <= endFrame,
    ),
    characterSpans,
  };
}

function joinSegmentText(
  segments: StreamingDecodeSegment[],
  lane: "en" | "ja",
): string {
  return segments
    .map((segment) => segment[lane]?.text ?? "")
    .filter(Boolean)
    .join(" ");
}

function pruneSegmentAudioBuffers(
  segments: StreamingDecodeSegment[],
): StreamingDecodeSegment[] {
  let retainedAudioSamples = 0;
  let keptAudioSegmentCount = 0;
  let changed = false;

  const segmentsWithPrunedAudio = [...segments];

  for (let index = segmentsWithPrunedAudio.length - 1; index >= 0; index -= 1) {
    const segment = segmentsWithPrunedAudio[index];
    const audioBuffer = segment?.audioBuffer;
    if (!audioBuffer) {
      continue;
    }

    const shouldKeepAudio =
      keptAudioSegmentCount === 0 ||
      retainedAudioSamples < STREAMING_REDECODE_AUDIO_RETENTION_SAMPLES;

    if (shouldKeepAudio) {
      retainedAudioSamples += audioBuffer.length;
      keptAudioSegmentCount += 1;
      continue;
    }

    segmentsWithPrunedAudio[index] = {
      ...segment,
      audioBuffer: null,
    };
    changed = true;
  }

  return changed ? segmentsWithPrunedAudio : segments;
}

function stripSegmentAudioBuffers(
  segments: StreamingDecodeSegment[],
): StreamingDecodeSegment[] {
  let changed = false;

  const nextSegments = segments.map((segment) => {
    if (segment.audioBuffer == null) {
      return segment;
    }

    changed = true;
    return {
      ...segment,
      audioBuffer: null,
    };
  });

  return changed ? nextSegments : segments;
}

function waitForDelay(
  delayMs: number,
  isCancelled: () => boolean,
): Promise<void> {
  if (delayMs <= 0 || isCancelled()) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });
}

export const useStreamingDecode = ({
  filterFreq,
  filterWidth,
  stream,
  language,
  backend,
  enabled = true,
}: UseStreamingDecodeParams): UseStreamingDecodeResult => {
  const [loadedEnSignature, setLoadedEnSignature] = useState<string | null>(
    null,
  );
  const [loadedJaSignature, setLoadedJaSignature] = useState<string | null>(
    null,
  );
  const [loadError, setLoadError] = useState<string | null>(null);
  const [segments, setSegments] = useState<StreamingDecodeSegment[]>([]);
  const [pendingText, setPendingText] = useState("");
  const [pendingTextJa, setPendingTextJa] = useState("");
  const [isDecoding, setIsDecoding] = useState(false);

  const pendingSamplesRef = useRef(new Float32Array(0));
  const audioStateRef = useRef<StreamingAudioState>({ version: 0 });
  const audioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const transcriptSessionRef = useRef<string | null>(null);
  const decodeSettingsSignatureRef = useRef<string | null>(null);
  const nextSegmentIdRef = useRef(1);
  const modelSelectionSignature = backend;

  const loaded = loadedEnSignature === modelSelectionSignature;
  const loadedJa = loadedJaSignature === modelSelectionSignature;
  const text = useMemo(() => joinSegmentText(segments, "en"), [segments]);
  const textJa = useMemo(() => joinSegmentText(segments, "ja"), [segments]);
  const transcriptSessionSignature = useMemo(() => {
    if (!enabled || !stream) {
      return null;
    }

    return stream.id;
  }, [enabled, stream]);
  const decodeSettingsSignature = useMemo(() => {
    if (!enabled || !stream) {
      return null;
    }

    return [
      backend,
      language,
      filterFreq ?? "null",
      filterWidth,
    ].join("|");
  }, [backend, enabled, filterFreq, filterWidth, language, stream]);

  useEffect(() => {
    setLoadError(null);
  }, [backend, language]);

  useEffect(() => {
    if (!enabled || loaded) {
      return;
    }

    let cancelled = false;

    void loadModel("en", backend, "standard")
      .then(() => {
        if (!cancelled) {
          setLoadedEnSignature(modelSelectionSignature);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load streaming inference model.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, enabled, loaded, modelSelectionSignature]);

  useEffect(() => {
    if (!enabled || language !== "EN/JA" || loadedJa) {
      return;
    }

    let cancelled = false;

    void loadModel("ja", backend, "standard")
      .then(() => {
        if (!cancelled) {
          setLoadedJaSignature(modelSelectionSignature);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load streaming inference model.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [
    backend,
    enabled,
    language,
    loadedJa,
    modelSelectionSignature,
  ]);

  useEffect(() => {
    pendingSamplesRef.current = new Float32Array(0);
    audioStateRef.current.version += 1;

    if (transcriptSessionRef.current === transcriptSessionSignature) {
      return;
    }

    transcriptSessionRef.current = transcriptSessionSignature;
    if (decodeSettingsSignature != null) {
      decodeSettingsSignatureRef.current = decodeSettingsSignature;
    }
    setSegments((currentSegments) => stripSegmentAudioBuffers(currentSegments));
    setPendingText("");
    setPendingTextJa("");
  }, [decodeSettingsSignature, transcriptSessionSignature]);

  useEffect(() => {
    pendingSamplesRef.current = new Float32Array(0);
    audioStateRef.current.version += 1;

    if (!decodeSettingsSignature) {
      decodeSettingsSignatureRef.current = null;
      setPendingText("");
      setPendingTextJa("");
      return;
    }

    if (decodeSettingsSignatureRef.current === decodeSettingsSignature) {
      return;
    }

    decodeSettingsSignatureRef.current = decodeSettingsSignature;
    setSegments((currentSegments) => stripSegmentAudioBuffers(currentSegments));
    setPendingText("");
    setPendingTextJa("");
  }, [decodeSettingsSignature]);

  useEffect(() => {
    if (!stream || !enabled) {
      return;
    }

    const audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
    const source = audioContext.createMediaStreamSource(stream);
    const scriptProcessor = audioContext.createScriptProcessor(
      AUDIO_CHUNK_SAMPLES,
      1,
      1,
    );

    scriptProcessor.onaudioprocess = (event) => {
      const chunk = event.inputBuffer.getChannelData(0);
      pendingSamplesRef.current = appendAudioChunk(
        pendingSamplesRef.current,
        chunk.slice(),
      );
      audioStateRef.current.version += 1;
    };

    source.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    scriptProcessorRef.current = scriptProcessor;

    return () => {
      if (scriptProcessorRef.current) {
        scriptProcessorRef.current.disconnect();
        scriptProcessorRef.current = null;
      }
      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [enabled, stream]);

  useEffect(() => {
    const ready =
      stream &&
      enabled &&
      loaded &&
      (language !== "EN/JA" || loadedJa);
    const audioState = audioStateRef.current;

    if (!ready) {
      setIsDecoding(false);
      setPendingText("");
      setPendingTextJa("");
      return;
    }

    let cancelled = false;
    setIsDecoding(true);

    const decodeLoop = async () => {
      let lastAudioVersion = -1;
      let lastDetailedInferenceAt = 0;

      while (!cancelled) {
        const audioVersion = audioState.version;
        if (audioVersion === lastAudioVersion) {
          await waitForNextAudioChunk(
            audioStateRef,
            audioVersion,
            () => cancelled,
          );
          if (cancelled) {
            return;
          }
          continue;
        }

        lastAudioVersion = audioVersion;

        const pendingSnapshot = pendingSamplesRef.current;
        if (pendingSnapshot.length < STREAMING_MIN_PENDING_SAMPLES) {
          setPendingText("");
          setPendingTextJa("");
          continue;
        }

        const now = performance.now();
        const elapsedSinceLastDetailedInference =
          now - lastDetailedInferenceAt;
        if (
          lastDetailedInferenceAt > 0 &&
          elapsedSinceLastDetailedInference < STREAMING_ANALYSIS_MIN_INTERVAL_MS
        ) {
          await waitForDelay(
            STREAMING_ANALYSIS_MIN_INTERVAL_MS -
              elapsedSinceLastDetailedInference,
            () => cancelled,
          );
          if (cancelled) {
            return;
          }
        }

        const analysisLength = Math.min(
          pendingSnapshot.length,
          STREAMING_MAX_SEGMENT_SAMPLES,
        );
        const analysisAudio = pendingSnapshot.slice(0, analysisLength);
        lastDetailedInferenceAt = performance.now();
        const analysisResult = await runInferenceDetailed(
          analysisAudio,
          filterFreq,
          filterWidth,
          { lang: "en", backend },
        );
        if (cancelled) {
          return;
        }

        const nextPendingText = normalizeDetailedResult(analysisResult).text;
        let analysisResultJa: DetailedInferenceResult | null = null;
        let nextPendingTextJa = "";

        if (language === "EN/JA") {
          analysisResultJa = await runInferenceDetailed(
            analysisAudio,
            filterFreq,
            filterWidth,
            { lang: "ja", backend },
          );
          if (cancelled) {
            return;
          }

          nextPendingTextJa = normalizeDetailedResult(analysisResultJa).text;
        }

        setPendingText(nextPendingText);
        setPendingTextJa(nextPendingTextJa);

        const confirmedSplitPoint =
          getConfirmedSplitPoint(
            analysisResult.wordSpaceSpans,
            analysisLength,
          ) ??
          (pendingSnapshot.length >= STREAMING_MAX_SEGMENT_SAMPLES
            ? getConfirmedSplitPoint(
                analysisResult.wordSpaceSpans,
                analysisLength,
                true,
              )
            : null);
        const confirmedLength =
          confirmedSplitPoint?.sample ??
          (pendingSnapshot.length >= STREAMING_MAX_SEGMENT_SAMPLES
            ? STREAMING_MAX_SEGMENT_SAMPLES
            : null);

        if (
          confirmedLength == null ||
          confirmedLength < STREAMING_MIN_CONFIRMED_SAMPLES
        ) {
          continue;
        }

        const confirmedAudio = analysisAudio.slice(0, confirmedLength);
        let nextEnResult: StreamingDecodeLane;
        let nextJaResult: StreamingDecodeLane | null = null;

        if (confirmedSplitPoint) {
          nextEnResult = normalizeDetailedResult(
            trimDetailedResultToFrame(
              analysisResult,
              confirmedSplitPoint.endFrame,
            ),
          );
          if (analysisResultJa) {
            nextJaResult = normalizeDetailedResult(
              trimDetailedResultToFrame(
                analysisResultJa,
                confirmedSplitPoint.endFrame,
              ),
            );
          }
        } else {
          nextEnResult = normalizeDetailedResult(
            await runInferenceDetailed(
              confirmedAudio,
              filterFreq,
              filterWidth,
              { lang: "en", backend },
            ),
          );
          if (cancelled) {
            return;
          }

          if (language === "EN/JA") {
            nextJaResult = normalizeDetailedResult(
              await runInferenceDetailed(
                confirmedAudio,
                filterFreq,
                filterWidth,
                { lang: "ja", backend },
              ),
            );
            if (cancelled) {
              return;
            }
          }
        }

        if (nextEnResult.text || nextJaResult?.text) {
          const nextSegment: StreamingDecodeSegment = {
            id: nextSegmentIdRef.current++,
            audioBuffer: confirmedAudio,
            filterFreq,
            filterWidth,
            en: nextEnResult.text ? nextEnResult : null,
            ja: nextJaResult?.text ? nextJaResult : null,
          };

          setSegments((currentSegments) =>
            pruneSegmentAudioBuffers([...currentSegments, nextSegment]),
          );
        }

        // Clear the preview immediately so newly committed text does not
        // momentarily appear twice before the next tail decode lands.
        setPendingText("");
        setPendingTextJa("");
        pendingSamplesRef.current = dropLeadingSamples(
          pendingSamplesRef.current,
          confirmedLength,
        );
        audioState.version += 1;
      }
    };

    void decodeLoop();

    return () => {
      cancelled = true;
      setIsDecoding(false);
      pendingSamplesRef.current = new Float32Array(0);
      audioState.version += 1;
    };
  }, [
    backend,
    enabled,
    filterFreq,
    filterWidth,
    language,
    loaded,
    loadedJa,
    stream,
  ]);

  return {
    loaded,
    loadedJa,
    loadError,
    text,
    textJa,
    pendingText,
    pendingTextJa,
    segments,
    isDecoding,
  };
};
