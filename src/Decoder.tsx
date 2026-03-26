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
import { DecodeDisplay } from "./DecodeDisplay";
import { Histogram } from "./Histogram";
import { PileupOverlay } from "./PileupOverlay";
import type { FrequencyDataState } from "./hooks/useSpectrogramRenderer";
import { Box, Button, Flex, Stack, NativeSelect, Tooltip } from "@mantine/core";

type DecoderMode = "normal" | "pileup";

export const Decoder = () => {
  const [mode, setMode] = useState<DecoderMode>("normal");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filterFreq, setFilterFreq] = useState<number | null>(null);
  const [filterWidth, setFilterWidth] = useState<number>(250);
  const [gain, setGain] = useState<number>(0);
  const [language, setLanguage] = useState<"EN" | "EN/JA">("EN");
  const [decodeWindowSeconds, setDecodeWindowSeconds] =
    useState<DecodeWindowSeconds>(DEFAULT_DECODE_WINDOW_S);

  const [audioInputDevices, setAudioInputDevices] = useState<MediaDeviceInfo[]>(
    [],
  );
  const [selectedAudioInput, _setSelectedAudioInput] = useState<string>("");

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

  const effectiveWindowSeconds = isPileup ? PILEUP_WINDOW_S : decodeWindowSeconds;

  const audioBufferRef = useAudioProcessing(stream, gain, effectiveWindowSeconds);

  const { loaded, loadedJa, currentSegments, currentSegmentsJa, isDecoding } =
    useDecode({
      filterFreq: isPileup ? null : filterFreq,
      filterWidth,
      stream,
      language: isPileup ? "EN" : language,
      decodeWindowSeconds: effectiveWindowSeconds,
      audioBufferRef,
      enabled: !isPileup,
    });

  const { segmentsMap, isDecoding: isPileupDecoding } = usePileupDecode({
    stream,
    loaded,
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
  const scopeHeight = isPileup ? 512 : 256;

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
                segmentsMap={segmentsMap}
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
              segments={currentSegments}
              isDecoding={isDecoding}
              decodeWindowSeconds={decodeWindowSeconds}
            />

            {showJapaneseDisplay && (
              <DecodeDisplay
                segments={currentSegmentsJa}
                isDecoding={isDecoding}
                backgroundColor="#36021e"
                decodeWindowSeconds={decodeWindowSeconds}
              />
            )}
          </Stack>
        )}
      </Stack>

      <Flex gap="md" justify="flex-end" wrap="wrap">
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
        {!isPileup && (
          <NativeSelect
            label="WINDOW"
            data={DECODE_WINDOW_OPTIONS.map((seconds) => ({
              value: seconds.toString(),
              label: seconds.toString(),
            }))}
            value={decodeWindowSeconds.toString()}
            onChange={(event) =>
              setDecodeWindowSeconds(
                Number(event.currentTarget.value) as DecodeWindowSeconds,
              )
            }
            rightSection={"s"}
          />
        )}
        {!isPileup && (
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
        )}
        {!isPileup && (
          <NativeSelect
            label="CW LANG"
            data={["EN", "EN/JA"]}
            value={language}
            onChange={(event) =>
              setLanguage(event.currentTarget.value as "EN" | "EN/JA")
            }
          />
        )}
        <NativeSelect
          label="MODE"
          data={[
            { value: "normal", label: "Normal" },
            { value: "pileup", label: "Pileup" },
          ]}
          value={mode}
          onChange={(event) =>
            setMode(event.currentTarget.value as DecoderMode)
          }
        />
      </Flex>
    </Stack>
  );
};
