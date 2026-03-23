import { useRef, type CSSProperties } from "react";
import { Box } from "@mantine/core";
import {
  AUDIO_CHUNK_SAMPLES,
  SAMPLE_RATE,
  FFT_LENGTH,
  HOP_LENGTH,
  getBufferSamples,
} from "./const";
import type { TextSegment } from "./utils/textDecoder";

// Default animation duration: audio chunk interval = audio chunk / sample rate
const DEFAULT_SCROLL_DURATION_S = AUDIO_CHUNK_SAMPLES / SAMPLE_RATE;
const SCROLL_FRAME_COUNT = AUDIO_CHUNK_SAMPLES / HOP_LENGTH;
const SCROLL_STEP_CSS_VAR = "--decode-scroll-step-pct" as const;

type DecodeRowStyle = CSSProperties & {
  [SCROLL_STEP_CSS_VAR]: string;
};

const getDecodeCharCount = (decodeWindowSeconds: number) =>
  Math.floor(
    (getBufferSamples(decodeWindowSeconds) - FFT_LENGTH) / HOP_LENGTH,
  ) + 1;

type DecodeDisplayProps = {
  segments: TextSegment[];
  isDecoding: boolean;
  backgroundColor?: string;
  decodeWindowSeconds: number;
};

export const DecodeDisplay = ({
  segments,
  isDecoding,
  backgroundColor = "var(--mantine-color-dark-9)",
  decodeWindowSeconds,
}: DecodeDisplayProps) => {
  const prevSegmentsRef = useRef(segments);
  const updateCount = useRef(0);
  const lastUpdateTime = useRef(0);
  const animDuration = useRef(DEFAULT_SCROLL_DURATION_S);
  const decodeCharCount = getDecodeCharCount(decodeWindowSeconds);
  const charWidthPct = `${100 / decodeCharCount}%`;
  const scrollStepPct = `${(100 * SCROLL_FRAME_COUNT) / decodeCharCount}%`;
  const textRowStyle: DecodeRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    animation: isDecoding
      ? `decode-scroll-left ${animDuration.current}s linear forwards`
      : undefined,
    [SCROLL_STEP_CSS_VAR]: scrollStepPct,
  };

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
          style={textRowStyle}
        >
          {segments.flatMap((segment, segmentIndex) =>
            segment.isAbbreviation
              ? [
                  <div
                    key={`${segmentIndex}-abbr`}
                    style={{
                      width: charWidthPct,
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
                      width: charWidthPct,
                      flexShrink: 0,
                      textAlign: "center",
                    }}
                  >
                    {char}
                  </div>
                )),
          )}
        </div>
      </div>
    </Box>
  );
};
