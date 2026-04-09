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
  const [loadedEnSignature, setLoadedEnSignature] = useState<string | null>(
    null,
  );
  const [loadedJaSignature, setLoadedJaSignature] = useState<string | null>(
    null,
  );
  const [loadError, setLoadError] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState("");
  const [currentTextTick, setCurrentTextTick] = useState(0);
  const [currentTextVersion, setCurrentTextVersion] =
    useState<number | null>(null);
  const [currentTextJa, setCurrentTextJa] = useState("");
  const [currentTextJaTick, setCurrentTextJaTick] = useState(0);
  const [currentTextJaVersion, setCurrentTextJaVersion] =
    useState<number | null>(null);
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });
  const modelSelectionSignature = backend;

  const loaded = loadedEnSignature === modelSelectionSignature;
  const loadedJa = loadedJaSignature === modelSelectionSignature;

  useEffect(() => {
    setLoadError(null);
  }, [backend, language]);

  useEffect(() => {
    if (!enabled || loaded) return;

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
              : "Failed to load inference backend.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, enabled, loaded, modelSelectionSignature]);

  useEffect(() => {
    if (!enabled || language !== "EN/JA" || loadedJa) return;

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
              : "Failed to load inference backend.",
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
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  useEffect(() => {
    setCurrentText("");
    setCurrentTextTick(0);
    setCurrentTextVersion(null);
    setCurrentTextJa("");
    setCurrentTextJaTick(0);
    setCurrentTextJaVersion(null);
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
        const sampleSnapshot = audioBufferRef.current.samples.slice();

        const textEn = await runInference(
          sampleSnapshot,
          filterFreq,
          filterWidth,
          { lang: "en", backend },
        );
        if (cancelled) {
          return;
        }
        setCurrentText(textEn);
        setCurrentTextTick((tick) => tick + 1);
        setCurrentTextVersion(audioVersion);

        if (language === "EN/JA" && loadedJa) {
          const textJa = await runInference(
            sampleSnapshot,
            filterFreq,
            filterWidth,
            { lang: "ja", backend },
          );
          if (cancelled) {
            return;
          }
          setCurrentTextJa(textJa);
          setCurrentTextJaTick((tick) => tick + 1);
          setCurrentTextJaVersion(audioVersion);
        }
      }
    };

    setIsDecoding(true);
    void decodeContinuously();

    return () => {
      cancelled = true;
      setIsDecoding(false);
    };
  }, [
    audioBufferRef,
    backend,
    enabled,
    language,
    loaded,
    loadedJa,
    stream,
  ]);

  return {
    loaded,
    loadedJa,
    loadError,
    currentText,
    currentTextTick,
    currentTextVersion,
    currentTextJa,
    currentTextJaTick,
    currentTextJaVersion,
    isDecoding,
  };
};
