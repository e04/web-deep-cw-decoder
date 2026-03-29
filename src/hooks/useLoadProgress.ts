import { useEffect, useState } from "react";
import {
  getLoadProgressSnapshot,
  subscribeToLoadProgress,
  type BackendLoadProgress,
} from "../utils/inference";
import type { InferenceBackend } from "../utils/inferenceProtocol";

type DecoderLanguage = "EN" | "EN/JA";

export type LoadProgressView = {
  ortPercent: number;
  modelEnPercent: number;
  modelJaPercent: number;
  showJaModel: boolean;
};

function toPercent(progress: number): number {
  return Math.round(progress * 100);
}

function getLoadProgressView(
  backend: InferenceBackend,
  language: DecoderLanguage,
  snapshot: BackendLoadProgress = getLoadProgressSnapshot(backend),
): LoadProgressView {
  return {
    ortPercent: toPercent(snapshot.ort),
    modelEnPercent: toPercent(snapshot.model.en),
    modelJaPercent: toPercent(snapshot.model.ja),
    showJaModel: language === "EN/JA",
  };
}

export function useLoadProgress(
  backend: InferenceBackend,
  language: DecoderLanguage,
): LoadProgressView {
  const [loadProgress, setLoadProgress] = useState<LoadProgressView>(
    () => getLoadProgressView(backend, language),
  );

  useEffect(() => {
    setLoadProgress(getLoadProgressView(backend, language));

    return subscribeToLoadProgress(() => {
      setLoadProgress(getLoadProgressView(backend, language));
    });
  }, [backend, language]);

  return loadProgress;
}
