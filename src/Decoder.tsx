import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  DEFAULT_DECODE_CENTER_FREQ_HZ,
  DEFAULT_DECODE_BANDWIDTH_HZ,
  DEFAULT_DECODE_WINDOW_S,
  DECODE_WINDOW_OPTIONS,
  SAMPLE_RATE,
  PILEUP_WINDOW_S,
  PILEUP_MIN_FREQ_HZ,
  PILEUP_MAX_FREQ_HZ,
  WIDE_LAYOUT_WIDTH_PX,
  type DecodeWindowSeconds,
} from "./const";
import { Scope } from "./Scope";
import { useDecode } from "./useDecode";
import { useAudioProcessing } from "./hooks/useAudioProcessing";
import { useAudioPassthrough } from "./hooks/useAudioPassthrough";
import { useFilteredPassthroughStream } from "./hooks/useFilteredPassthroughStream";
import { useLoadProgress } from "./hooks/useLoadProgress";
import { usePileupDecode } from "./hooks/usePileupDecode";
import { usePileupDetection } from "./hooks/usePileupDetection";
import { usePersistedState } from "./hooks/usePersistedState";
import { useStreamingDecode } from "./hooks/useStreamingDecode";
import { DecodeDisplay } from "./DecodeDisplay";
import { BenchmarkPanel } from "./BenchmarkPanel";
import { LoadProgressBars } from "./LoadProgressBars";
import { PileupOverlay } from "./PileupOverlay";
import { StreamingTranscriptDisplay } from "./StreamingTranscriptDisplay";
import type { PileupTrack } from "./utils/pileupCandidates";
import { Box, Button, Flex, NativeSelect, Stack, Tooltip } from "@mantine/core";
import {
  INFERENCE_BACKEND_OPTIONS,
  type InferenceBackend,
} from "./utils/inferenceProtocol";
import {
  hasMatchingOption,
  parseNumberOption,
  parseStringOption,
} from "./utils/optionUtils";

type DecoderMode = "normal" | "pileup" | "benchmark";
type DecoderLanguage = "EN" | "EN/JA";

const FILTER_WIDTH_OPTIONS = [
  100,
  150,
  250,
  500,
  DEFAULT_DECODE_BANDWIDTH_HZ,
] as const;
const MODE_OPTIONS = ["normal", "pileup", "benchmark"] as const;
const LANGUAGE_OPTIONS: readonly DecoderLanguage[] = ["EN", "EN/JA"];
const BACKEND_OPTIONS: readonly InferenceBackend[] =
  INFERENCE_BACKEND_OPTIONS.map((option) => option.value);

export const Decoder = () => {
  const [mode, setMode] = usePersistedState<DecoderMode>(
    "decoder.mode",
    "normal",
    (value): value is DecoderMode => hasMatchingOption(value, MODE_OPTIONS),
  );
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filterFreq, setFilterFreq] = useState(DEFAULT_DECODE_CENTER_FREQ_HZ);
  const [filterWidth, setFilterWidth] = usePersistedState<number>(
    "decoder.filterWidth",
    800,
    (value): value is number => hasMatchingOption(value, FILTER_WIDTH_OPTIONS),
  );
  const [language, setLanguage] = usePersistedState<DecoderLanguage>(
    "decoder.language",
    "EN",
    (value): value is DecoderLanguage =>
      hasMatchingOption(value, LANGUAGE_OPTIONS),
  );
  const [backend, setBackend] = usePersistedState<InferenceBackend>(
    "decoder.backend",
    "wasm",
    (value): value is InferenceBackend =>
      hasMatchingOption(value, BACKEND_OPTIONS),
  );
  const [decodeWindowSeconds, setDecodeWindowSeconds] =
    usePersistedState<DecodeWindowSeconds>(
      "decoder.decodeWindowSeconds",
      DEFAULT_DECODE_WINDOW_S,
      (value): value is DecodeWindowSeconds =>
        hasMatchingOption(value, DECODE_WINDOW_OPTIONS),
    );

  const [audioInputDevices, setAudioInputDevices] = useState<MediaDeviceInfo[]>(
    [],
  );
  const [selectedAudioInput, _setSelectedAudioInput] =
    usePersistedState<string>(
      "decoder.selectedAudioInput",
      "",
      (value): value is string => typeof value === "string",
    );
  const [selectedAudioOutput, setSelectedAudioOutput] =
    usePersistedState<string>(
      "decoder.selectedAudioOutput",
      "",
      (value): value is string => typeof value === "string",
    );

  const pileupTracksRef = useRef<PileupTrack[]>([]);

  const isPileup = mode === "pileup";
  const isBenchmark = mode === "benchmark";
  const {
    isSupported: isPassthroughSupported,
    audioOutputDevices,
    syncAudioOutputDevices,
  } = useAudioPassthrough(selectedAudioOutput, () => setSelectedAudioOutput(""));
  useFilteredPassthroughStream({
    stream,
    enabled: mode === "normal",
    selectedAudioOutput,
    filterFreq: isPileup ? null : filterFreq,
    filterWidth,
  });

  useEffect(() => {
    if (
      selectedAudioInput &&
      audioInputDevices.length > 0 &&
      !audioInputDevices.some(
        (device) => device.deviceId === selectedAudioInput,
      )
    ) {
      _setSelectedAudioInput("");
    }
  }, [audioInputDevices, selectedAudioInput, _setSelectedAudioInput]);

  useEffect(() => {
    if (!isBenchmark || !stream) {
      return;
    }

    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  }, [isBenchmark, stream]);

  const effectiveWindowSeconds = isPileup
    ? PILEUP_WINDOW_S
    : decodeWindowSeconds;
  const progressLanguage = isPileup ? "EN" : language;

  const audioBufferRef = useAudioProcessing(stream, effectiveWindowSeconds);
  const loadProgress = useLoadProgress(
    backend,
    progressLanguage,
    isPileup ? "narrow" : "standard",
    isPileup,
  );

  const {
    loaded,
    loadedJa,
    loadError: normalLoadError,
    currentText,
    currentTextTick,
    currentTextVersion,
    currentTextJa,
    currentTextJaTick,
    currentTextJaVersion,
    isDecoding,
  } = useDecode({
    filterFreq: isPileup ? null : filterFreq,
    filterWidth,
    stream,
    language: isPileup ? "EN" : language,
    backend,
    decodeWindowSeconds: effectiveWindowSeconds,
    audioBufferRef,
    enabled: mode === "normal",
  });

  const {
    segments: streamingSegments,
    pendingText: streamingPendingText,
    pendingTextJa: streamingPendingTextJa,
    loadError: streamingLoadError,
  } = useStreamingDecode({
    filterFreq: isPileup ? null : filterFreq,
    filterWidth,
    stream,
    language: isPileup ? "EN" : language,
    backend,
    enabled: mode === "normal",
  });

  const {
    tracks: pileupTracks,
    isDetecting: isPileupDetecting,
    loaded: pileupDetectionLoaded,
    loadError: pileupDetectionLoadError,
  } = usePileupDetection({
    stream,
    backend,
    audioBufferRef,
    enabled: isPileup,
    minFreqHz: PILEUP_MIN_FREQ_HZ,
    maxFreqHz: PILEUP_MAX_FREQ_HZ,
  });

  useEffect(() => {
    pileupTracksRef.current = pileupTracks;
  }, [pileupTracks]);

  const {
    textMap,
    isDecoding: isPileupDecoding,
    loaded: pileupLoaded,
    loadError: pileupLoadError,
  } = usePileupDecode({
    stream,
    backend,
    audioBufferRef,
    tracksRef: pileupTracksRef,
    enabled: isPileup,
    decodeWindowSeconds: effectiveWindowSeconds,
  });

  const setSelectedAudioInput = (deviceId: string) => {
    _setSelectedAudioInput(deviceId);
    getStream(deviceId);
  };

  const refreshAudioDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioInputs = devices.filter(
      (device) => device.kind === "audioinput",
    );
    setAudioInputDevices(audioInputs);
    syncAudioOutputDevices(devices);
  };

  const getStream = async (selectedAudioInput?: string) => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    const newStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        deviceId: selectedAudioInput
          ? { exact: selectedAudioInput }
          : undefined,
        sampleRate: SAMPLE_RATE,
        channelCount: 1,
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
      },
    });

    setStream(newStream);
    await refreshAudioDevices();
  };

  const loadError = isPileup
    ? (pileupDetectionLoadError ?? pileupLoadError)
    : isBenchmark
    ? null
    : (normalLoadError ?? streamingLoadError);
  const isLoading = isPileup
    ? !pileupLoaded || !pileupDetectionLoaded
    : isBenchmark
    ? false
    : !loaded || (language === "EN/JA" && !loadedJa);
  const showJapaneseDisplay = mode === "normal" && language === "EN/JA";
  const isActive = isBenchmark
    ? false
    : isPileup
    ? isPileupDecoding || isPileupDetecting
    : isDecoding;
  const scopeHeight = isPileup ? 768 : 256;
  const isWideViewport = useMediaQuery("(min-width: 801px)", true, {
    getInitialValueInEffect: false,
  });
  const showSideControls = useMediaQuery(
    `(min-width: ${WIDE_LAYOUT_WIDTH_PX}px)`,
    true,
    {
      getInitialValueInEffect: false,
    },
  );
  const decoderEdgePadding = isWideViewport ? 8 : 0;
  const controlJustify = showSideControls ? "flex-start" : "flex-end";
  const controlPanelStyle = showSideControls
    ? { width: "420px", maxWidth: "100%" }
    : undefined;
  const controlRowStyle = showSideControls ? { width: "100%" } : undefined;
  const contentWidthSelectStyle = { width: "fit-content" } as const;

  const mainContent = isBenchmark ? (
    <BenchmarkPanel />
  ) : (
    <Stack gap={0}>
      <Box px={decoderEdgePadding}>
        <Flex gap={0}>
          <Box pos="relative" style={{ flex: 1, minWidth: 0 }}>
            {stream ? (
              <Scope
                stream={stream}
                setFilterFreq={setFilterFreq}
                filterFreq={isPileup ? null : filterFreq}
                filterWidth={filterWidth}
                decodeWindowSeconds={effectiveWindowSeconds}
                disableInteraction={isPileup}
                height={scopeHeight}
                brightness={isPileup ? 0.75 : 1}
                maxDevicePixelRatio={isPileup ? 1.25 : undefined}
                {...(isPileup && {
                  minFreqHz: PILEUP_MIN_FREQ_HZ,
                  maxFreqHz: PILEUP_MAX_FREQ_HZ,
                })}
              />
            ) : (
              <Box
                style={{
                  height: `${scopeHeight}px`,
                  width: "100%",
                  background: "var(--mantine-color-dark-9)",
                }}
              />
            )}
            {isPileup && stream && (
              <PileupOverlay
                tracks={pileupTracks}
                textMap={textMap}
                isDecoding={isPileupDecoding}
                decodeWindowSeconds={effectiveWindowSeconds}
                minFreqHz={PILEUP_MIN_FREQ_HZ}
                maxFreqHz={PILEUP_MAX_FREQ_HZ}
              />
            )}
          </Box>
        </Flex>
      </Box>

      {!isPileup && (
        <Box px={decoderEdgePadding}>
          <Stack gap="xs">
            <Stack gap={0}>
              <DecodeDisplay
                text={currentText}
                isDecoding={isDecoding}
                decodeWindowSeconds={decodeWindowSeconds}
                animationTick={currentTextTick}
                animationVersion={currentTextVersion}
              />

              {showJapaneseDisplay && (
                <DecodeDisplay
                  text={currentTextJa}
                  isDecoding={isDecoding}
                  backgroundColor="#36021e"
                  decodeWindowSeconds={decodeWindowSeconds}
                  animationTick={currentTextJaTick}
                  animationVersion={currentTextJaVersion}
                />
              )}
            </Stack>

            <Stack gap={0}>
              <StreamingTranscriptDisplay
                segments={streamingSegments}
                pendingText={streamingPendingText}
                variant="en"
                backgroundColor="var(--mantine-color-dark-9)"
                backend={backend}
              />
              {showJapaneseDisplay && (
                <StreamingTranscriptDisplay
                  segments={streamingSegments}
                  pendingText={streamingPendingTextJa}
                  variant="ja"
                  backgroundColor="#36021e"
                  backend={backend}
                  enableRedecodePopup
                />
              )}
            </Stack>
          </Stack>
        </Box>
      )}
    </Stack>
  );

  const controlPanel = (
    <Stack
      gap="xs"
      align={showSideControls ? "flex-start" : "flex-end"}
      style={controlPanelStyle}
    >
      <Flex
        gap="md"
        justify={controlJustify}
        wrap="wrap"
        style={controlRowStyle}
      >
        <NativeSelect
          label="MODE"
          data={[
            { value: "normal", label: "Normal" },
            { value: "pileup", label: "Pileup" },
            { value: "benchmark", label: "Benchmark" },
          ]}
          value={mode}
          onChange={(event) => {
            const nextMode = parseStringOption(
              event.currentTarget.value,
              MODE_OPTIONS,
            );
            if (nextMode !== undefined) {
              setMode(nextMode);
            }
          }}
          style={contentWidthSelectStyle}
        />
        {!isBenchmark && (
          <>
            <NativeSelect
              label="ENGINE"
              data={INFERENCE_BACKEND_OPTIONS}
              value={backend}
              onChange={(event) => {
                const nextBackend = parseStringOption(
                  event.currentTarget.value,
                  BACKEND_OPTIONS,
                );
                if (nextBackend !== undefined) {
                  setBackend(nextBackend);
                }
              }}
              style={contentWidthSelectStyle}
            />
          </>
        )}
      </Flex>
      {!isBenchmark && (
        <>
          <Flex
            gap="md"
            justify={controlJustify}
            wrap="wrap"
            style={controlRowStyle}
          >
            <Tooltip label="Available after starting the decoder." withArrow>
              <Box>
                <NativeSelect
                  w={200}
                  label="INPUT"
                  data={audioInputDevices.map((device) => ({
                    value: device.deviceId,
                    label:
                      device.label ||
                      `Device ${audioInputDevices.indexOf(device) + 1}`,
                  }))}
                  value={selectedAudioInput}
                  onChange={(event) =>
                    setSelectedAudioInput(event.currentTarget.value)
                  }
                  disabled={!stream}
                />
              </Box>
            </Tooltip>
            {isPassthroughSupported && (
              <NativeSelect
                w={200}
                label="THRU"
                data={[
                  { value: "", label: "None" },
                  ...audioOutputDevices.map((device) => ({
                    value: device.deviceId,
                    label:
                      device.label ||
                      `Device ${audioOutputDevices.indexOf(device) + 1}`,
                  })),
                ]}
                value={selectedAudioOutput}
                onChange={(event) =>
                  setSelectedAudioOutput(event.currentTarget.value)
                }
                disabled={!stream}
              />
            )}
          </Flex>
          <Flex
            gap="md"
            justify={controlJustify}
            wrap="wrap"
            style={controlRowStyle}
          >
            {!isPileup && (
              <>
                <NativeSelect
                  label="WINDOW"
                  data={DECODE_WINDOW_OPTIONS.map((seconds) => ({
                    value: seconds.toString(),
                    label: seconds.toString(),
                  }))}
                  value={decodeWindowSeconds.toString()}
                  onChange={(event) => {
                    const nextWindowSeconds = parseNumberOption(
                      event.currentTarget.value,
                      DECODE_WINDOW_OPTIONS,
                    );
                    if (nextWindowSeconds !== undefined) {
                      setDecodeWindowSeconds(nextWindowSeconds);
                    }
                  }}
                  rightSection={"s"}
                  style={contentWidthSelectStyle}
                />
                <Tooltip
                  label="Click the scope to move the decode band. Use the mouse wheel to fine-tune it."
                  withArrow
                >
                  <Box>
                    <NativeSelect
                      label="BANDWIDTH"
                      data={FILTER_WIDTH_OPTIONS.map((width) => ({
                        value: width.toString(),
                        label: width.toString(),
                      }))}
                      value={filterWidth.toString()}
                      onChange={(event) => {
                        const nextWidth = parseNumberOption(
                          event.currentTarget.value,
                          FILTER_WIDTH_OPTIONS,
                        );
                        if (nextWidth !== undefined) {
                          setFilterWidth(nextWidth);
                        }
                      }}
                      rightSection={"Hz"}
                      style={contentWidthSelectStyle}
                    />
                  </Box>
                </Tooltip>
                <NativeSelect
                  label="CW LANG"
                  data={["EN", "EN/JA"]}
                  value={language}
                  onChange={(event) => {
                    const nextLanguage = parseStringOption(
                      event.currentTarget.value,
                      LANGUAGE_OPTIONS,
                    );
                    if (nextLanguage !== undefined) {
                      setLanguage(nextLanguage);
                    }
                  }}
                  style={contentWidthSelectStyle}
                />
              </>
            )}
          </Flex>
        </>
      )}
    </Stack>
  );

  return (
    <Stack gap={8}>
      {!isBenchmark && (
        <Box px={8}>
          <Flex justify="space-between" align="flex-start">
            <Flex gap="sm" align="flex-start" style={{ flex: 1, minWidth: 0 }}>
              <Button
                w={200}
                color={isActive ? "red" : "indigo"}
                onClick={() => {
                  if (isActive) {
                    setStream(null);
                  } else {
                    getStream(selectedAudioInput ?? undefined);
                  }
                }}
                disabled={isLoading}
              >
                {isActive ? "STOP" : "START"}
              </Button>
              <Box style={{ flex: 1, minWidth: 0, maxWidth: "400px" }}>
                <LoadProgressBars progress={loadProgress} />
              </Box>
              {loadError && (
                <Box
                  style={{
                    color: "var(--mantine-color-red-4)",
                    fontSize: "14px",
                  }}
                >
                  {loadError}
                </Box>
              )}
            </Flex>
          </Flex>
        </Box>
      )}

      {showSideControls ? (
        <Flex gap="md" align="flex-start">
          <Box style={{ flex: 1, minWidth: 0 }}>{mainContent}</Box>
          <Box pr={8}>{controlPanel}</Box>
        </Flex>
      ) : (
        <>
          {mainContent}
          <Box px={8}>{controlPanel}</Box>
        </>
      )}
    </Stack>
  );
};
