import { useEffect, useState } from "react";
import {
  getLoadProgressSnapshot,
  subscribeToLoadProgress,
  type BackendLoadProgress,
} from "../utils/inference";
import type {
  EnglishModelVariant,
  InferenceBackend,
} from "../utils/inferenceProtocol";
import { getModelKey } from "../utils/inferenceProtocol";

type DecoderLanguage = "EN" | "EN/JA";

export type LoadProgressView = {
  ortPercent: number;
  modelEnLabel: string;
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
  englishModelVariant: EnglishModelVariant = "standard",
  includePileupDetectionModel = false,
  snapshot: BackendLoadProgress = getLoadProgressSnapshot(backend),
): LoadProgressView {
  const englishModelKey = getModelKey("en", englishModelVariant);
  const modelEnProgress =
    includePileupDetectionModel && englishModelVariant === "narrow"
      ? Math.min(snapshot.model[englishModelKey], snapshot.model.cw_detect)
      : snapshot.model[englishModelKey];

  return {
    ortPercent: toPercent(snapshot.ort),
    modelEnLabel:
      includePileupDetectionModel && englishModelVariant === "narrow"
        ? "MODELS"
        : "MODEL EN",
    modelEnPercent: toPercent(modelEnProgress),
    modelJaPercent: toPercent(snapshot.model[getModelKey("ja", "standard")]),
    showJaModel: language === "EN/JA" && englishModelVariant === "standard",
  };
}

export function useLoadProgress(
  backend: InferenceBackend,
  language: DecoderLanguage,
  englishModelVariant: EnglishModelVariant = "standard",
  includePileupDetectionModel = false,
): LoadProgressView {
  const [loadProgress, setLoadProgress] = useState<LoadProgressView>(
    () =>
      getLoadProgressView(
        backend,
        language,
        englishModelVariant,
        includePileupDetectionModel,
      ),
  );

  useEffect(() => {
    setLoadProgress(
      getLoadProgressView(
        backend,
        language,
        englishModelVariant,
        includePileupDetectionModel,
      ),
    );

    return subscribeToLoadProgress(() => {
      setLoadProgress(
        getLoadProgressView(
          backend,
          language,
          englishModelVariant,
          includePileupDetectionModel,
        ),
      );
    });
  }, [
    backend,
    englishModelVariant,
    includePileupDetectionModel,
    language,
  ]);

  return loadProgress;
}
