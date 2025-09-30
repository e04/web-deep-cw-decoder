import { useEffect, useState, useRef } from "react";
import { INFERENCE_INTERVAL_S } from "./const";
import { loadModel, runInference } from "./utils/inference";
import { useAudioProcessing } from "./hooks/useAudioProcessing";

type UseDecodeParams = {
  filterFreq: number | null;
  filterWidth: number;
  gain: number;
  stream: MediaStream | null;
};

/**
 * CWデコード機能を提供するカスタムフック
 */
export const useDecode = ({
  filterFreq,
  filterWidth,
  gain,
  stream,
}: UseDecodeParams) => {
  const [loaded, setLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(" ");
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });
  const inferenceIntervalId = useRef<NodeJS.Timeout | null>(null);

  // オーディオ処理
  const audioBufferRef = useAudioProcessing(stream, gain);

  // モデルのロード
  useEffect(() => {
    (async () => {
      await loadModel();
      setLoaded(true);
    })();
  }, []);

  // フィルターパラメータの更新
  useEffect(() => {
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  // デコード処理
  useEffect(() => {
    if (!stream || !loaded) {
      return;
    }

    // 定期的に推論を実行
    inferenceIntervalId.current = setInterval(async () => {
      const { filterFreq, filterWidth } = filterParamsRef.current;
      const text = await runInference(
        audioBufferRef.current,
        filterFreq,
        filterWidth
      );
      setCurrentText(text);
    }, INFERENCE_INTERVAL_S * 1000);

    setIsDecoding(true);

    return () => {
      setIsDecoding(false);
      if (inferenceIntervalId.current) {
        clearInterval(inferenceIntervalId.current);
      }
    };
  }, [stream, loaded, audioBufferRef]);

  return { loaded, currentText, isDecoding };
};
