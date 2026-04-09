import { useEffect, useRef, useLayoutEffect, useState } from "react";
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

const getMinimumCharacterGapPx = (
  fontSize: number,
  textStroke: boolean,
) => Math.max(fontSize * 0.6 + (textStroke ? 2 : 0), 6);

const getTranslatePct = ({
  now,
  lastUpdateTime,
  currentTranslatePct,
  cycleStartTranslatePct,
  scrollStepPct,
}: {
  now: number;
  lastUpdateTime: number;
  currentTranslatePct: number;
  cycleStartTranslatePct: number;
  scrollStepPct: number;
}) => {
  if (lastUpdateTime === 0) {
    return currentTranslatePct;
  }

  const elapsedMs = now - lastUpdateTime;
  const elapsedChunks = elapsedMs / (DEFAULT_SCROLL_DURATION_S * 1000);
  return cycleStartTranslatePct - scrollStepPct * elapsedChunks;
};

type DecodeDisplayProps = {
  text: string;
  isDecoding: boolean;
  backgroundColor?: string;
  decodeWindowSeconds: number;
  animationTick?: number;
  animationVersion?: number | null;
  height?: number;
  fontSize?: number;
  textStroke?: boolean;
};

export const DecodeDisplay = ({
  text,
  isDecoding,
  backgroundColor = "var(--mantine-color-dark-9)",
  decodeWindowSeconds,
  animationTick = 0,
  animationVersion = null,
  height = 32,
  fontSize = 20,
  textStroke = false,
}: DecodeDisplayProps) => {
  const prevTextRef = useRef(text);
  const prevAnimationTickRef = useRef(animationTick);
  const prevAnimationVersionRef = useRef<number | null>(animationVersion);
  const lastUpdateTime = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const cycleStartTranslatePctRef = useRef(0);
  const currentTranslatePctRef = useRef(0);
  const [rowWidthPx, setRowWidthPx] = useState(0);
  const decodeCharCount = getDecodeCharCount(decodeWindowSeconds);
  const scrollStepPct = (100 * SCROLL_FRAME_COUNT) / decodeCharCount;
  const minimumCharacterGapPx = getMinimumCharacterGapPx(fontSize, textStroke);
  const charSlotWidthPx = rowWidthPx / decodeCharCount;

  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const updateWidth = () => {
      setRowWidthPx(el.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const textChanged = text !== prevTextRef.current;
    const tickChanged = animationTick !== prevAnimationTickRef.current;
    const versionChanged = animationVersion !== prevAnimationVersionRef.current;
    if (!textChanged && !tickChanged && !versionChanged) return;

    const previousAnimationVersion = prevAnimationVersionRef.current;

    prevTextRef.current = text;
    prevAnimationTickRef.current = animationTick;
    prevAnimationVersionRef.current = animationVersion;

    const el = rowRef.current;
    if (!el) return;

    const now = performance.now();
    const nextTranslatePct =
      animationVersion == null || previousAnimationVersion == null
        ? 0
        : getTranslatePct({
            now,
            lastUpdateTime: lastUpdateTime.current,
            currentTranslatePct: currentTranslatePctRef.current,
            cycleStartTranslatePct: cycleStartTranslatePctRef.current,
            scrollStepPct,
          }) +
          scrollStepPct *
            Math.max(0, animationVersion - previousAnimationVersion);

    cycleStartTranslatePctRef.current = nextTranslatePct;
    currentTranslatePctRef.current = nextTranslatePct;
    lastUpdateTime.current = now;
    el.style.transform = `translateX(${nextTranslatePct}%)`;
  }, [animationTick, animationVersion, scrollStepPct, text]);

  useEffect(() => {
    const el = rowRef.current;
    if (!el || !isDecoding) {
      if (el) {
        el.style.transform = "translateX(0)";
      }
      prevAnimationVersionRef.current = null;
      cycleStartTranslatePctRef.current = 0;
      currentTranslatePctRef.current = 0;
      lastUpdateTime.current = 0;
      return;
    }

    if (lastUpdateTime.current === 0) {
      lastUpdateTime.current = performance.now();
    }

    const renderFrame = () => {
      const translatePct = getTranslatePct({
        now: performance.now(),
        lastUpdateTime: lastUpdateTime.current,
        currentTranslatePct: currentTranslatePctRef.current,
        cycleStartTranslatePct: cycleStartTranslatePctRef.current,
        scrollStepPct,
      });
      currentTranslatePctRef.current = translatePct;
      el.style.transform = `translateX(${translatePct}%)`;
      rafIdRef.current = window.requestAnimationFrame(renderFrame);
    };

    rafIdRef.current = window.requestAnimationFrame(renderFrame);

    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      prevAnimationVersionRef.current = null;
      cycleStartTranslatePctRef.current = 0;
      currentTranslatePctRef.current = 0;
      lastUpdateTime.current = 0;
      el.style.transform = "translateX(0)";
    };
  }, [isDecoding, scrollStepPct]);

  const positionedChars: Array<{ char: string; leftPx: number }> = [];
  let previousLeftPx = Number.NEGATIVE_INFINITY;

  Array.from(text).forEach((char, charIndex) => {
    if (char === " ") {
      return;
    }

    const baseLeftPx = (charIndex + 0.5) * charSlotWidthPx;
    const leftPx = Math.max(baseLeftPx, previousLeftPx + minimumCharacterGapPx);

    previousLeftPx = leftPx;
    positionedChars.push({ char, leftPx });
  });

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
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {positionedChars.map(({ char, leftPx }, charIndex) => (
            <div
              key={charIndex}
              style={{
                position: "absolute",
                left: `${leftPx}px`,
                top: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
                transform: "translateX(-50%)",
                whiteSpace: "pre",
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
