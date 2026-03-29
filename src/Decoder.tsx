import { useState, useRef, useEffect } from "react";
import {
  DEFAULT_DECODE_BANDWIDTH_HZ,
  DEFAULT_DECODE_WINDOW_S,
  DECODE_WINDOW_OPTIONS,
  SAMPLE_RATE,
  PILEUP_WINDOW_S,
  PILEUP_MIN_FREQ_HZ,
  PILEUP_MAX_FREQ_HZ,
  type DecodeWindowSeconds,
} from "./const";
import { Scope } from "./Scope";
import { useDecode } from "./useDecode";
import { useAudioProcessing } from "./hooks/useAudioProcessing";
import { usePileupDecode } from "./hooks/usePileupDecode";
import { usePersistedState } from "./hooks/usePersistedState";
import { DecodeDisplay } from "./DecodeDisplay";
import { Histogram } from "./Histogram";
import { PileupOverlay } from "./PileupOverlay";
import type { FrequencyDataState } from "./hooks/useSpectrogramRenderer";
import { Box, Button, Flex, Stack, NativeSelect, Tooltip } from "@mantine/core";
import {
  INFERENCE_BACKEND_OPTIONS,
  type InferenceBackend,
} from "./utils/inferenceProtocol";
import {
  hasMatchingOption,
  parseNumberOption,
  parseStringOption,
} from "./utils/optionUtils";

type DecoderMode = "normal" | "pileup";
type DecoderLanguage = "EN" | "EN/JA";

const GAIN_OPTIONS = [0, 20] as const;
const FILTER_WIDTH_OPTIONS = [100, 150, 250] as const;
const MODE_OPTIONS = ["normal", "pileup"] as const;
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
  const [filterFreq, setFilterFreq] = useState<number | null>(null);
  const [filterWidth, setFilterWidth] = usePersistedState<number>(
    "decoder.filterWidth",
    250,
    (value): value is number => hasMatchingOption(value, FILTER_WIDTH_OPTIONS),
  );
  const [gain, setGain] = usePersistedState<number>(
    "decoder.gain",
    0,
    (value): value is number => hasMatchingOption(value, GAIN_OPTIONS),
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
  const [selectedAudioInput, _setSelectedAudioInput] = usePersistedState<string>(
    "decoder.selectedAudioInput",
    "",
    (value): value is string => typeof value === "string",
  );

  const [pileupPeaks, setPileupPeaks] = useState<number[]>([]);
  const pileupPeaksRef = useRef<number[]>([]);
  const frequencyDataRef = useRef<FrequencyDataState | null>(null);

  useEffect(() => {
    pileupPeaksRef.current = pileupPeaks;
  }, [pileupPeaks]);

  const isPileup = mode === "pileup";

  // Reset filter when entering pileup mode
  useEffect(() => {
    if (isPileup) {
      setFilterFreq(null);
      setPileupPeaks([]);
    }
  }, [isPileup]);

  useEffect(() => {
    if (
      selectedAudioInput &&
      audioInputDevices.length > 0 &&
      !audioInputDevices.some((device) => device.deviceId === selectedAudioInput)
    ) {
      _setSelectedAudioInput("");
    }
  }, [audioInputDevices, selectedAudioInput]);

  const effectiveWindowSeconds = isPileup ? PILEUP_WINDOW_S : decodeWindowSeconds;

  const audioBufferRef = useAudioProcessing(stream, gain, effectiveWindowSeconds);

  const {
    loaded,
    loadedJa,
    loadError,
    currentText,
    currentTextJa,
    isDecoding,
  } =
    useDecode({
      filterFreq: isPileup ? null : filterFreq,
      filterWidth,
      stream,
      language: isPileup ? "EN" : language,
      backend,
      decodeWindowSeconds: effectiveWindowSeconds,
      audioBufferRef,
      enabled: !isPileup,
    });

  const { textMap, isDecoding: isPileupDecoding } = usePileupDecode({
    stream,
    loaded,
    backend,
    audioBufferRef,
    peakFrequenciesRef: pileupPeaksRef,
    enabled: isPileup,
    decodeWindowSeconds: effectiveWindowSeconds,
  });

  const setSelectedAudioInput = (deviceId: string) => {
    _setSelectedAudioInput(deviceId);
    getStream(deviceId);
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

    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioInputs = devices.filter(
      (device) => device.kind === "audioinput",
    );
    setAudioInputDevices(audioInputs);
  };

  const isLoading = !loaded || (!isPileup && language === "EN/JA" && !loadedJa);
  const isFilterEnabled = filterFreq !== null;
  const activeFilterWidth = isFilterEnabled
    ? filterWidth
    : DEFAULT_DECODE_BANDWIDTH_HZ;
  const showJapaneseDisplay = !isPileup && language === "EN/JA";
  const isActive = isPileup ? isPileupDecoding : isDecoding;
  const scopeHeight = isPileup ? 768 : 256;

  return (
    <Stack gap={8}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="sm">
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
          {isLoading && (
            <Box
              style={{ color: "var(--mantine-color-gray-5)", fontSize: "14px" }}
            >
              LOADING...
            </Box>
          )}
          {loadError && (
            <Box
              style={{ color: "var(--mantine-color-red-4)", fontSize: "14px" }}
            >
              {loadError}
            </Box>
          )}
        </Flex>
      </Flex>

      <Stack gap={0}>
        <Flex gap={0}>
          <Box pos="relative" style={{ flex: 1, minWidth: 0 }}>
            {stream ? (
              <Scope
                stream={stream}
                setFilterFreq={setFilterFreq}
                filterFreq={isPileup ? null : filterFreq}
                filterWidth={filterWidth}
                gain={gain}
                decodeWindowSeconds={effectiveWindowSeconds}
                frequencyDataRef={frequencyDataRef}
                disableInteraction={isPileup}
                height={scopeHeight}
                canvasClassName={isPileup ? "scopeCanvas--pileup" : undefined}
                {...(isPileup && { minFreqHz: PILEUP_MIN_FREQ_HZ, maxFreqHz: PILEUP_MAX_FREQ_HZ })}
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
                peakFrequencies={pileupPeaks}
                textMap={textMap}
                isDecoding={isPileupDecoding}
                decodeWindowSeconds={effectiveWindowSeconds}
                minFreqHz={PILEUP_MIN_FREQ_HZ}
                maxFreqHz={PILEUP_MAX_FREQ_HZ}
              />
            )}
          </Box>
          {isPileup && stream && (
            <Histogram
              frequencyDataRef={frequencyDataRef}
              peakFrequencies={pileupPeaks}
              onPeaksChanged={setPileupPeaks}
              height={scopeHeight}
              minFreqHz={PILEUP_MIN_FREQ_HZ}
              maxFreqHz={PILEUP_MAX_FREQ_HZ}
            />
          )}
        </Flex>

        {!isPileup && (
          <Stack gap={0}>
            <DecodeDisplay
              text={currentText}
              isDecoding={isDecoding}
              decodeWindowSeconds={decodeWindowSeconds}
            />

            {showJapaneseDisplay && (
              <DecodeDisplay
                text={currentTextJa}
                isDecoding={isDecoding}
                backgroundColor="#36021e"
                decodeWindowSeconds={decodeWindowSeconds}
              />
            )}
          </Stack>
        )}
      </Stack>

      <Stack gap="xs" align="flex-end">
        <Flex gap="md" justify="flex-end" wrap="wrap">
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
          />
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
          <NativeSelect
            label="GAIN"
            data={["0", "20"]}
            value={gain.toString()}
            onChange={(event) => setGain(Number(event.currentTarget.value))}
            rightSection={"dB"}
          />
          <NativeSelect
            label="MODE"
            data={[
              { value: "normal", label: "Normal" },
              { value: "pileup", label: "Pileup" },
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
          />
        </Flex>
        {!isPileup && (
          <Flex gap="md" justify="flex-end" wrap="wrap">
            <Tooltip label="Shorter windows are more accurate." withArrow>
              <Box>
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
                />
              </Box>
            </Tooltip>
            <Tooltip label="Click the scope to enable the filter." withArrow>
              <Box>
                <NativeSelect
                  label="FIL WID"
                  data={[
                    {
                      value: DEFAULT_DECODE_BANDWIDTH_HZ.toString(),
                      label: `${DEFAULT_DECODE_BANDWIDTH_HZ} (OFF)`,
                    },
                    { value: "100", label: "100" },
                    { value: "150", label: "150" },
                    { value: "250", label: "250" },
                  ]}
                  value={activeFilterWidth.toString()}
                  onChange={(event) => {
                    const nextWidth = Number(event.currentTarget.value);
                    if (nextWidth === DEFAULT_DECODE_BANDWIDTH_HZ) {
                      setFilterFreq(null);
                      return;
                    }

                    setFilterWidth(nextWidth);
                  }}
                  disabled={!isFilterEnabled}
                  rightSection={"Hz"}
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
            />
          </Flex>
        )}
      </Stack>
    </Stack>
  );
};
