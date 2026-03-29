import { useRef, useLayoutEffect } from "react";
import { Box } from "@mantine/core";
import {
  AUDIO_CHUNK_SAMPLES,
  SAMPLE_RATE,
  FFT_LENGTH,
  HOP_LENGTH,
  getBufferSamples,
} from "./const";

// Default animation duration: audio chunk interval = audio chunk / sample rate
const DEFAULT_SCROLL_DURATION_S = AUDIO_CHUNK_SAMPLES / SAMPLE_RATE;
const SCROLL_FRAME_COUNT = AUDIO_CHUNK_SAMPLES / HOP_LENGTH;

const getDecodeCharCount = (decodeWindowSeconds: number) =>
  Math.floor(
    (getBufferSamples(decodeWindowSeconds) - FFT_LENGTH) / HOP_LENGTH,
  ) + 1;

type DecodeDisplayProps = {
  text: string;
  isDecoding: boolean;
  backgroundColor?: string;
  decodeWindowSeconds: number;
  height?: number;
  fontSize?: number;
  textStroke?: boolean;
};

export const DecodeDisplay = ({
  text,
  isDecoding,
  backgroundColor = "var(--mantine-color-dark-9)",
  decodeWindowSeconds,
  height = 32,
  fontSize = 20,
  textStroke = false,
}: DecodeDisplayProps) => {
  const prevTextRef = useRef(text);
  const lastUpdateTime = useRef(0);
  const animDuration = useRef(DEFAULT_SCROLL_DURATION_S);
  const rowRef = useRef<HTMLDivElement>(null);
  const decodeCharCount = getDecodeCharCount(decodeWindowSeconds);
  const charWidthPct = `${100 / decodeCharCount}%`;
  const scrollStepPct = (100 * SCROLL_FRAME_COUNT) / decodeCharCount;

  // Drive the scroll animation via Web Animations API so the DOM element is
  // reused across updates – no unmount/remount flicker.
  useLayoutEffect(() => {
    if (text === prevTextRef.current) return;
    prevTextRef.current = text;

    const now = performance.now();
    if (lastUpdateTime.current > 0) {
      animDuration.current = Math.max(
        DEFAULT_SCROLL_DURATION_S,
        (now - lastUpdateTime.current) / 1000,
      );
    }
    lastUpdateTime.current = now;

    const el = rowRef.current;
    if (!el || !isDecoding) return;

    // Cancel any in-flight animation and start fresh
    el.getAnimations().forEach((a) => a.cancel());
    el.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${scrollStepPct}%)` },
      ],
      {
        duration: animDuration.current * 1000,
        easing: "linear",
        fill: "forwards",
      },
    );
  }, [text, isDecoding, scrollStepPct]);

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        borderTop: textStroke ? "none" : "1px solid var(--mantine-color-dark-8)",
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
          ...(textStroke
            ? {
                WebkitTextStroke: "3px black",
                paintOrder: "stroke fill",
              }
            : {}),
        }}
      >
        <div
          ref={rowRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {Array.from(text).map((char, charIndex) => (
            <div
              key={charIndex}
              style={{
                width: charWidthPct,
                flexShrink: 0,
                textAlign: "center",
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};
