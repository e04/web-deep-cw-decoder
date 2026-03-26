import { useEffect, useState, useRef, type MutableRefObject } from "react";
import { loadModel, runInference } from "./utils/inference";
import type { AudioBufferState } from "./hooks/useAudioProcessing";
import type { TextSegment } from "./utils/textDecoder";

export const waitForNextAudioChunk = (
  audioBufferRef: MutableRefObject<{ version: number }>,
  currentVersion: number,
  isCancelled: () => boolean,
): Promise<void> =>
  new Promise((resolve) => {
    const pollForAudio = () => {
      if (isCancelled() || audioBufferRef.current.version !== currentVersion) {
        resolve();
        return;
      }
      window.setTimeout(pollForAudio, 10);
    };

    pollForAudio();
  });

type UseDecodeParams = {
  filterFreq: number | null;
  filterWidth: number;
  stream: MediaStream | null;
  language: "EN" | "EN/JA";
  decodeWindowSeconds: number;
  audioBufferRef: MutableRefObject<AudioBufferState>;
  enabled?: boolean;
};

export const useDecode = ({
  filterFreq,
  filterWidth,
  stream,
  language,
  decodeWindowSeconds,
  audioBufferRef,
  enabled = true,
}: UseDecodeParams) => {
  const [loaded, setLoaded] = useState(false);
  const [loadedJa, setLoadedJa] = useState(false);
  const [currentSegments, setCurrentSegments] = useState<TextSegment[]>([]);
  const [currentSegmentsJa, setCurrentSegmentsJa] = useState<TextSegment[]>([]);
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });

  useEffect(() => {
    (async () => {
      await loadModel("en");
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (language === "EN/JA" && !loadedJa) {
      (async () => {
        await loadModel("ja");
        setLoadedJa(true);
      })();
    }
  }, [language, loadedJa]);

  useEffect(() => {
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  useEffect(() => {
    setCurrentSegments([]);
    setCurrentSegmentsJa([]);
  }, [decodeWindowSeconds]);

  useEffect(() => {
    if (!stream || !loaded || !enabled) {
      return;
    }

    let cancelled = false;
    let lastAudioVersion = -1;

    const decodeContinuously = async () => {
      while (!cancelled) {
        const audioVersion = audioBufferRef.current.version;
        if (audioVersion === lastAudioVersion) {
          await waitForNextAudioChunk(
            audioBufferRef,
            audioVersion,
            () => cancelled,
          );
          if (cancelled) {
            return;
          }
          continue;
        }

        lastAudioVersion = audioVersion;
        const { filterFreq, filterWidth } = filterParamsRef.current;

        const segmentsEn = await runInference(
          audioBufferRef.current.samples,
          filterFreq,
          filterWidth,
          "en"
        );
        if (cancelled) {
          return;
        }
        setCurrentSegments(segmentsEn);

        if (language === "EN/JA" && loadedJa) {
          const segmentsJa = await runInference(
            audioBufferRef.current.samples,
            filterFreq,
            filterWidth,
            "ja"
          );
          if (cancelled) {
            return;
          }
          setCurrentSegmentsJa(segmentsJa);
        }
      }
    };

    setIsDecoding(true);
    void decodeContinuously();

    return () => {
      cancelled = true;
      setIsDecoding(false);
    };
  }, [stream, loaded, loadedJa, language, audioBufferRef, enabled]);

  return { loaded, loadedJa, currentSegments, currentSegmentsJa, isDecoding };
};
