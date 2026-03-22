import { useRef } from "react";
import { Box } from "@mantine/core";
import { SAMPLE_RATE, BUFFER_SAMPLES, FFT_LENGTH, HOP_LENGTH } from "./const";
import type { TextSegment } from "./utils/textDecoder";

// Default animation duration: audio chunk interval = 2048 samples / 3200 Hz
const DEFAULT_SCROLL_DURATION_S = 2048 / SAMPLE_RATE; // 0.64s

// Number of characters in the decode output = STFT frame count
const DECODE_CHAR_COUNT = Math.floor((BUFFER_SAMPLES - FFT_LENGTH) / HOP_LENGTH) + 1; // 597
const CHAR_WIDTH_PCT = `${100 / DECODE_CHAR_COUNT}%`;

type DecodeDisplayProps = {
  segments: TextSegment[];
  isDecoding: boolean;
  backgroundColor?: string;
};

export const DecodeDisplay = ({
  segments,
  isDecoding,
  backgroundColor = "var(--mantine-color-dark-9)",
}: DecodeDisplayProps) => {
  const prevSegmentsRef = useRef(segments);
  const updateCount = useRef(0);
  const lastUpdateTime = useRef(0);
  const animDuration = useRef(DEFAULT_SCROLL_DURATION_S);

  // Update only when segments reference actually changes (not on unrelated re-renders)
  if (segments !== prevSegmentsRef.current) {
    prevSegmentsRef.current = segments;
    const now = performance.now();
    if (lastUpdateTime.current > 0) {
      animDuration.current = (now - lastUpdateTime.current) / 1000;
    }
    lastUpdateTime.current = now;
    updateCount.current += 1;
  }

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "32px",
        fontSize: "20px",
        borderTop: "1px solid var(--mantine-color-dark-8)",
      }}
    >
      {/* Background layer – stays solid, unaffected by mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor,
        }}
      />
      {/* Text layer – faded at both edges */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          whiteSpace: "pre-wrap",
          maskImage:
            "linear-gradient(to right, transparent 1%, black 15%, black 85%, transparent 99%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 1%, black 15%, black 85%, transparent 99%)",
        }}
      >
        <div
          key={updateCount.current}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            animation: isDecoding
              ? `decode-scroll-left ${animDuration.current}s linear forwards`
              : undefined,
          }}
        >
        {segments.flatMap((segment, segmentIndex) =>
          segment.isAbbreviation
            ? [
                <div
                  key={`${segmentIndex}-abbr`}
                  style={{
                    width: CHAR_WIDTH_PCT,
                    flexShrink: 0,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    textDecorationLine: "overline",
                  }}
                >
                  {segment.text}
                </div>,
              ]
            : Array.from(segment.text).map((char, charIndex) => (
                <div
                  key={`${segmentIndex}-${charIndex}`}
                  style={{
                    width: CHAR_WIDTH_PCT,
                    flexShrink: 0,
                    textAlign: "center",
                  }}
                >
                  {char}
                </div>
              ))
        )}
        </div>
      </div>
    </Box>
  );
};
