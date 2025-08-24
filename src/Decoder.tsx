import { useState } from "react";
import { SAMPLE_RATE } from "./const";
import { Scope } from "./Scope";
import { useDecode } from "./useDecode";
import { Box, Button, Space, Stack } from "@mantine/core";

const filterWidth = 200;

export const Decoder = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filterFreq, setFilterFreq] = useState<number | null>(null);
  const { startDecoding, loaded, currentText } = useDecode({
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
    <Stack gap="xs">
      <Button onClick={_startDecoding} disabled={!loaded || !!stream}>
        {stream ? "Decoding" : loaded ? "Start" : "Loading..."}
      </Button>
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
          }}
        />
      )}
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
        }}
      >
        {Array.from(currentText).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <Space w={64} />
      </Box>
    </Stack>
  );
};
