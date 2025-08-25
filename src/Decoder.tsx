import { useState, useEffect } from "react"; // useEffectをインポート
import { SAMPLE_RATE } from "./const";
import { Scope } from "./Scope";
import { useDecode } from "./useDecode";
import {
  Box,
  Button,
  Flex,
  Badge,
  Stack,
  NativeSelect,
  Tooltip,
} from "@mantine/core";

export const Decoder = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filterFreq, setFilterFreq] = useState<number | null>(null);
  const [filterWidth, setFilterWidth] = useState<number>(250);
  const [gain, setGain] = useState<number>(0);

  const [audioInputDevices, setAudioInputDevices] = useState<MediaDeviceInfo[]>(
    []
  );
  const [selectedAudioInput, setSelectedAudioInput] = useState<string>("");

  const { startDecoding, loaded, currentText, isDecoding } = useDecode({
    filterFreq,
    filterWidth,
    gain,
  });

  useEffect(() => {
    const getAudioDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = devices.filter(
        (device) => device.kind === "audioinput"
      );
      setAudioInputDevices(audioInputs);

      if (audioInputs.length > 0 && !selectedAudioInput) {
        setSelectedAudioInput(audioInputs[0].deviceId);
      }
    };

    getAudioDevices();
    navigator.mediaDevices.addEventListener("devicechange", getAudioDevices);

    return () => {
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        getAudioDevices
      );
    };
  }, []);

  const getStream = async () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    const constraints = {
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
    };

    const newStream = await navigator.mediaDevices.getUserMedia(constraints);
    setStream(newStream);
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioInputs = devices.filter(
      (device) => device.kind === "audioinput"
    );
    setAudioInputDevices(audioInputs);
    return newStream;
  };

  const _startDecoding = async () => {
    const stream = await getStream();
    if (stream) {
      await startDecoding(stream);
    }
  };

  return (
    <Stack gap={8}>
      <Flex justify="space-between" align="center">
        <Button
          w={200}
          color="indigo"
          onClick={_startDecoding}
          disabled={!loaded || isDecoding}
        >
          {isDecoding ? "DECODING" : loaded ? "START" : "LOADING..."}
        </Button>
        <Button
          color="red"
          onClick={() => {
            location.reload();
          }}
          variant="outline"
        >
          RESET
        </Button>
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
        <Box pos="absolute" top={8} right={8}>
          <Badge
            color={
              filterFreq
                ? "var(--mantine-color-gray-1)"
                : "var(--mantine-color-gray-6)"
            }
            size="md"
            variant="outline"
          >
            {filterFreq ? `FIL CEN: ${filterFreq} Hz ` : "FIL OFF"}
          </Badge>
        </Box>
      </Box>

      <Box
        style={{
          whiteSpace: "pre-wrap",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
          backgroundColor: "var(--mantine-color-dark-9)",
          borderRadius: "4px",
          border: "1px solid var(--mantine-color-dark-4)",
        }}
      >
        {Array.from(currentText).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Box>

      <Flex gap="md" justify="flex-end" wrap="wrap">
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
          disabled={isDecoding}
        />
        <NativeSelect
          label="GAIN"
          data={["0", "20"]}
          value={gain.toString()}
          onChange={(event) => setGain(Number(event.currentTarget.value))}
          rightSection={"dB"}
          disabled={isDecoding}
        />
        <NativeSelect
          label="FIL WID"
          data={["50", "100", "250", "500"]}
          value={filterWidth.toString()}
          onChange={(event) =>
            setFilterWidth(Number(event.currentTarget.value))
          }
          rightSection={"Hz"}
        />
        <Tooltip label="COMING SOON" color="black">
          <NativeSelect
            label="CW LANG"
            data={["EN", "EN/JP"]}
            value="EN"
            disabled
          />
        </Tooltip>
      </Flex>
    </Stack>
  );
};
