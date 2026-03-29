import { useEffect, useState, useRef, type MutableRefObject } from "react";
import { runInference } from "../utils/inference";
import type { InferenceBackend } from "../utils/inferenceProtocol";
import { waitForNextAudioChunk } from "../useDecode";
import type { AudioBufferState } from "./useAudioProcessing";

type UsePileupDecodeParams = {
  stream: MediaStream | null;
  loaded: boolean;
  backend: InferenceBackend;
  audioBufferRef: MutableRefObject<AudioBufferState>;
  peakFrequenciesRef: MutableRefObject<number[]>;
  enabled: boolean;
  decodeWindowSeconds: number;
};

type UsePileupDecodeResult = {
  textMap: Record<number, string>;
  isDecoding: boolean;
};

export const usePileupDecode = ({
  stream,
  loaded,
  backend,
  audioBufferRef,
  peakFrequenciesRef,
  enabled,
}: UsePileupDecodeParams): UsePileupDecodeResult => {
  const [textMap, setTextMap] = useState<Record<number, string>>({});
  const [isDecoding, setIsDecoding] = useState(false);
  const textMapRef = useRef(textMap);

  useEffect(() => {
    textMapRef.current = textMap;
  }, [textMap]);

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

        const peaks = peakFrequenciesRef.current;
        if (peaks.length === 0) continue;

        // Clean up stale entries
        const currentMap = textMapRef.current;
        const staleKeys = Object.keys(currentMap)
          .map(Number)
          .filter((k) => !peaks.some((p) => Math.abs(p - k) < 30));
        if (staleKeys.length > 0) {
          setTextMap((prev) => {
            const next = { ...prev };
            for (const k of staleKeys) delete next[k];
            return next;
          });
        }

        // Decode each peak sequentially with spectrogram bin shifting
        for (const freq of peaks) {
          if (cancelled) return;

          const text = await runInference(
            audioBufferRef.current.samples,
            null,
            0,
            {
              lang: "en",
              backend,
              shiftTargetFreq: freq,
            },
          );
          if (cancelled) return;

          setTextMap((prev) => ({ ...prev, [freq]: text }));
        }
      }
    };

    void decodeLoop();

    return () => {
      cancelled = true;
      setIsDecoding(false);
      setTextMap({});
    };
  }, [audioBufferRef, backend, enabled, loaded, peakFrequenciesRef, stream]);

  return { textMap, isDecoding };
};
