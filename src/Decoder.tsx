import { useState } from "react";
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
  const { startDecoding, loaded, currentText, isDecoding } = useDecode({
    filterFreq,
    filterWidth,
  });

  const getStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        sampleRate: SAMPLE_RATE,
        channelCount: 1,
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
      },
    });
    setStream(stream);
    return stream;
  };

  const _startDecoding = async () => {
    const stream = await getStream();
    await startDecoding(stream);
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
      </Flex>
      <Box pos="relative">
        {stream ? (
          <Scope
            stream={stream}
            setFilterFreq={setFilterFreq}
            filterFreq={filterFreq}
            filterWidth={filterWidth}
          />
        ) : (
          <Box
            style={{
              height: "256px",
              width: "100%",
              background: "var(--mantine-color-black)",
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
          fontFamily: '"Roboto Mono", monospace',
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

      <Flex gap="md" justify="flex-end">
        <NativeSelect
          label="FIL WID"
          data={["50", "100", "250", "500"]}
          value={filterWidth.toString()}
          onChange={(event) =>
            setFilterWidth(Number(event.currentTarget.value))
          }
          rightSection={"Hz"}
        />{" "}
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
