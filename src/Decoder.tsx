import { useState } from "react";
import { DEFAULT_DECODE_BANDWIDTH_HZ, SAMPLE_RATE } from "./const";
import { Scope } from "./Scope";
import { useDecode } from "./useDecode";
import { DecodeDisplay } from "./components/DecodeDisplay";
import { Box, Button, Flex, Stack, NativeSelect, Tooltip } from "@mantine/core";

export const Decoder = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filterFreq, setFilterFreq] = useState<number | null>(null);
  const [filterWidth, setFilterWidth] = useState<number>(250);
  const [gain, setGain] = useState<number>(0);
  // const [language, setLanguage] = useState<"EN" | "EN/JA">("EN");
  const [language] = useState<"EN" | "EN/JA">("EN");

  const [audioInputDevices, setAudioInputDevices] = useState<MediaDeviceInfo[]>(
    [],
  );
  const [selectedAudioInput, _setSelectedAudioInput] = useState<string>("");

  const { loaded, loadedJa, currentSegments, currentSegmentsJa, isDecoding } = useDecode({
    filterFreq,
    filterWidth,
    gain,
    stream,
    language,
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

  const isLoading = !loaded || (language === "EN/JA" && !loadedJa);
  const isFilterEnabled = filterFreq !== null;
  const activeFilterWidth = isFilterEnabled
    ? filterWidth
    : DEFAULT_DECODE_BANDWIDTH_HZ;

  return (
    <Stack gap={4}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="sm">
          <Button
            w={200}
            color={isDecoding ? "red" : "indigo"}
            onClick={() => {
              if (isDecoding) {
                setStream(null);
              } else {
                getStream(selectedAudioInput ?? undefined);
              }
            }}
          >
            {isDecoding ? "STOP" : "START"}
          </Button>
          {isLoading && (
            <Box style={{ color: "var(--mantine-color-gray-5)", fontSize: "14px" }}>
              LOADING...
            </Box>
          )}
        </Flex>
      </Flex>

      <Box pos="relative">
        {stream ? (
          <Scope
            stream={stream}
            setFilterFreq={setFilterFreq}
            filterFreq={filterFreq}
            filterWidth={filterWidth}
            gain={gain}
          />
        ) : (
          <Box
            style={{
              height: "256px",
              width: "100%",
              background: "var(--mantine-color-dark-9)",
              borderRadius: "4px",
              border: "1px solid var(--mantine-color-dark-4)",
            }}
          />
        )}
      </Box>

      <Stack gap={4}>
        <DecodeDisplay segments={currentSegments} isDecoding={isDecoding} />

        {language === "EN/JA" && (
          <DecodeDisplay
            segments={currentSegmentsJa}
            isDecoding={isDecoding}
            backgroundColor="#36021e"
          />
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
                  device.label || `Device ${audioInputDevices.indexOf(device) + 1}`,
              }))}
              value={selectedAudioInput}
              onChange={(event) => setSelectedAudioInput(event.currentTarget.value)}
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
        {/* <NativeSelect
          label="CW LANG"
          data={["EN", "EN/JA"]}
          value={language}
          onChange={(event) =>
            setLanguage(event.currentTarget.value as "EN" | "EN/JA")
          }
        /> */}
      </Flex>
    </Stack>
  );
};
