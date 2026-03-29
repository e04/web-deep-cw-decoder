import { useEffect, useRef, useState, type MutableRefObject } from "react";

import type { AudioBufferState } from "./hooks/useAudioProcessing";
import { loadModel, runInference } from "./utils/inference";
import type { InferenceBackend } from "./utils/inferenceProtocol";

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
  backend: InferenceBackend;
  decodeWindowSeconds: number;
  audioBufferRef: MutableRefObject<AudioBufferState>;
  enabled?: boolean;
};

export const useDecode = ({
  filterFreq,
  filterWidth,
  stream,
  language,
  backend,
  decodeWindowSeconds,
  audioBufferRef,
  enabled = true,
}: UseDecodeParams) => {
  const [loadedEnBackend, setLoadedEnBackend] =
    useState<InferenceBackend | null>(null);
  const [loadedJaBackend, setLoadedJaBackend] =
    useState<InferenceBackend | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState("");
  const [currentTextJa, setCurrentTextJa] = useState("");
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });

  const loaded = loadedEnBackend === backend;
  const loadedJa = loadedJaBackend === backend;

  useEffect(() => {
    setLoadError(null);
  }, [backend, language]);

  useEffect(() => {
    if (loaded) return;

    let cancelled = false;

    void loadModel("en", backend)
      .then(() => {
        if (!cancelled) {
          setLoadedEnBackend(backend);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load inference backend.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, loaded]);

  useEffect(() => {
    if (language !== "EN/JA" || loadedJa) return;

    let cancelled = false;

    void loadModel("ja", backend)
      .then(() => {
        if (!cancelled) {
          setLoadedJaBackend(backend);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load inference backend.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, language, loadedJa]);

  useEffect(() => {
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  useEffect(() => {
    setCurrentText("");
    setCurrentTextJa("");
  }, [backend, decodeWindowSeconds]);

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

        const textEn = await runInference(
          audioBufferRef.current.samples,
          filterFreq,
          filterWidth,
          { lang: "en", backend },
        );
        if (cancelled) {
          return;
        }
        setCurrentText(textEn);

        if (language === "EN/JA" && loadedJa) {
          const textJa = await runInference(
            audioBufferRef.current.samples,
            filterFreq,
            filterWidth,
            { lang: "ja", backend },
          );
          if (cancelled) {
            return;
          }
          setCurrentTextJa(textJa);
        }
      }
    };

    setIsDecoding(true);
    void decodeContinuously();

    return () => {
      cancelled = true;
      setIsDecoding(false);
    };
  }, [audioBufferRef, backend, enabled, language, loaded, loadedJa, stream]);

  return {
    loaded,
    loadedJa,
    loadError,
    currentText,
    currentTextJa,
    isDecoding,
  };
};
