import { useEffect, useState, useRef, type MutableRefObject } from "react";
import { loadModel, runInference } from "./utils/inference";
import { useAudioProcessing } from "./hooks/useAudioProcessing";
import type { TextSegment } from "./utils/textDecoder";

const waitForNextAudioChunk = (
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
  gain: number;
  stream: MediaStream | null;
  language: "EN" | "EN/JA";
};

/**
 * CWデコード機能を提供するカスタムフック
 */
export const useDecode = ({
  filterFreq,
  filterWidth,
  gain,
  stream,
  language,
}: UseDecodeParams) => {
  const [loaded, setLoaded] = useState(false);
  const [loadedJa, setLoadedJa] = useState(false);
  const [currentSegments, setCurrentSegments] = useState<TextSegment[]>([]);
  const [currentSegmentsJa, setCurrentSegmentsJa] = useState<TextSegment[]>([]);
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });
  const audioBufferRef = useAudioProcessing(stream, gain);

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

  // フィルターパラメータの更新
  useEffect(() => {
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  // デコード処理
  useEffect(() => {
    if (!stream || !loaded) {
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
  }, [stream, loaded, loadedJa, language, audioBufferRef]);

  return { loaded, loadedJa, currentSegments, currentSegmentsJa, isDecoding };
};
