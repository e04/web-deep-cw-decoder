import { useEffect, useState, useRef } from "react";
import { INFERENCE_INTERVAL_S } from "./const";
import { loadModel, runInference } from "./utils/inference";
import { useAudioProcessing } from "./hooks/useAudioProcessing";
import type { TextSegment } from "./utils/textDecoder";

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
  const inferenceIntervalId = useRef<NodeJS.Timeout | null>(null);

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

    inferenceIntervalId.current = setInterval(async () => {
      const { filterFreq, filterWidth } = filterParamsRef.current;
      
      const segmentsEn = await runInference(
        audioBufferRef.current,
        filterFreq,
        filterWidth,
        "en"
      );
      setCurrentSegments(segmentsEn);
      
      if (language === "EN/JA" && loadedJa) {
        const segmentsJa = await runInference(
          audioBufferRef.current,
          filterFreq,
          filterWidth,
          "ja"
        );
        setCurrentSegmentsJa(segmentsJa);
      }
    }, INFERENCE_INTERVAL_S * 1000);

    setIsDecoding(true);

    return () => {
      setIsDecoding(false);
      if (inferenceIntervalId.current) {
        clearInterval(inferenceIntervalId.current);
      }
    };
  }, [stream, loaded, loadedJa, language, audioBufferRef]);

  return { loaded, loadedJa, currentSegments, currentSegmentsJa, isDecoding };
};
