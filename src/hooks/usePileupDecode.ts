import { useEffect, useState, useRef, type MutableRefObject } from "react";
import { PILEUP_TEXT_HOLD_MS } from "../const";
import { loadModel, runPileupInference } from "../utils/inference";
import type { InferenceBackend } from "../utils/inferenceProtocol";
import { waitForNextAudioChunk } from "../useDecode";
import type { AudioBufferState } from "./useAudioProcessing";
import type { PileupTrack } from "../utils/pileupCandidates";

type UsePileupDecodeParams = {
  stream: MediaStream | null;
  backend: InferenceBackend;
  audioBufferRef: MutableRefObject<AudioBufferState>;
  tracksRef: MutableRefObject<PileupTrack[]>;
  enabled: boolean;
  decodeWindowSeconds: number;
};

type UsePileupDecodeResult = {
  textMap: Record<number, string>;
  isDecoding: boolean;
  loaded: boolean;
  loadError: string | null;
};

export const usePileupDecode = ({
  stream,
  backend,
  audioBufferRef,
  tracksRef,
  enabled,
}: UsePileupDecodeParams): UsePileupDecodeResult => {
  const [textMap, setTextMap] = useState<Record<number, string>>({});
  const [isDecoding, setIsDecoding] = useState(false);
  const [loadedSignature, setLoadedSignature] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const textMapRef = useRef(textMap);
  const lastNonEmptyAtRef = useRef<Record<number, number>>({});
  const modelSelectionSignature = backend;
  const loaded = loadedSignature === modelSelectionSignature;

  useEffect(() => {
    textMapRef.current = textMap;
  }, [textMap]);

  useEffect(() => {
    setLoadError(null);
  }, [backend]);

  useEffect(() => {
    if (!enabled || loaded) {
      return;
    }

    let cancelled = false;
    setLoadError(null);

    void loadModel("en", backend, "narrow")
      .then(() => {
        if (!cancelled) {
          setLoadedSignature(modelSelectionSignature);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load pileup inference model.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, enabled, loaded, modelSelectionSignature]);

  useEffect(() => {
    if (!stream || !loaded || !enabled) {
      setIsDecoding(false);
      return;
    }

    let cancelled = false;
    setIsDecoding(true);

    const decodeLoop = async () => {
      let lastAudioVersion = -1;

      while (!cancelled) {
        const audioVersion = audioBufferRef.current.version;
        if (audioVersion === lastAudioVersion) {
          await waitForNextAudioChunk(
            audioBufferRef,
            audioVersion,
            () => cancelled,
          );
          if (cancelled) return;
          continue;
        }
        lastAudioVersion = audioVersion;

        const tracks = tracksRef.current;
        if (tracks.length === 0) {
          if (Object.keys(textMapRef.current).length > 0) {
            setTextMap({});
            lastNonEmptyAtRef.current = {};
          }
          continue;
        }

        const nextTexts = await runPileupInference(
          audioBufferRef.current.samples,
          tracks,
          backend,
        );
        if (cancelled) return;

        const updateTime = performance.now();
        setTextMap((prev) => {
          const next = { ...prev };
          const activeTrackIds = new Set(tracks.map((track) => track.id));

          for (const key of Object.keys(next)) {
            const trackId = Number(key);
            if (!activeTrackIds.has(trackId)) {
              delete next[trackId];
              delete lastNonEmptyAtRef.current[trackId];
            }
          }

          for (const track of tracks) {
            const text = nextTexts[track.id] ?? "";
            const hasNewText = text.trim().length > 0;
            const nextText = hasNewText
              ? text
              : prev[track.id] &&
                  updateTime - (lastNonEmptyAtRef.current[track.id] ?? 0) <
                    PILEUP_TEXT_HOLD_MS
                ? prev[track.id]
                : "";

            if (nextText) {
              next[track.id] = nextText;
              if (hasNewText) {
                lastNonEmptyAtRef.current[track.id] = updateTime;
              }
            } else {
              delete next[track.id];
              delete lastNonEmptyAtRef.current[track.id];
            }
          }

          return next;
        });
      }
    };

    void decodeLoop();

    return () => {
      cancelled = true;
      setIsDecoding(false);
      setTextMap({});
      lastNonEmptyAtRef.current = {};
    };
  }, [
    audioBufferRef,
    backend,
    enabled,
    loaded,
    stream,
    tracksRef,
  ]);

  return { textMap, isDecoding, loaded, loadError };
};
