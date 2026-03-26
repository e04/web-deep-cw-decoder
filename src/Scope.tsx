import { useRef } from "react";
import { Box } from "@mantine/core";
import { MIN_FREQ_HZ, MAX_FREQ_HZ } from "./const";
import { useSpectrogramRenderer } from "./hooks/useSpectrogramRenderer";
import type { FrequencyDataState } from "./hooks/useSpectrogramRenderer";
import { useCanvasInteraction } from "./hooks/useCanvasInteraction";
import { calculateBandPosition } from "./utils/frequencyUtils";

type ScopeProps = {
  stream: MediaStream;
  setFilterFreq: (freq: number | null) => void;
  filterFreq: number | null;
  filterWidth: number;
  gain: number;
  decodeWindowSeconds: number;
  frequencyDataRef?: React.MutableRefObject<FrequencyDataState | null>;
  disableInteraction?: boolean;
  height?: number;
  minFreqHz?: number;
  maxFreqHz?: number;
};

export const Scope = ({
  stream,
  setFilterFreq,
  filterFreq,
  filterWidth,
  gain,
  decodeWindowSeconds,
  frequencyDataRef,
  disableInteraction,
  height = 256,
  minFreqHz = MIN_FREQ_HZ,
  maxFreqHz = MAX_FREQ_HZ,
}: ScopeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useSpectrogramRenderer({ stream, gain, canvasRef, decodeWindowSeconds, frequencyDataRef, minFreqHz, maxFreqHz });

  useCanvasInteraction({ canvasRef, filterFreq, setFilterFreq, filterWidth, enabled: !disableInteraction });

  const { topPercent, heightPercent } = calculateBandPosition(
    filterFreq,
    filterWidth,
    minFreqHz,
    maxFreqHz,
  );

  return (
    <Box style={{ position: "relative", width: "100%" }}>
      <Box
        component="canvas"
        ref={canvasRef}
        style={{
          display: "block",
          background: "var(--mantine-color-dark-9)",
          width: "100%",
          height: `${height}px`,
        }}
      />
      {!disableInteraction && (
        <Box
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${topPercent}%`,
            height: `${heightPercent}%`,
            borderTop: "1px solid var(--mantine-color-red-7)",
            borderBottom: "1px solid var(--mantine-color-red-7)",
            pointerEvents: "none",
          }}
        />
      )}
    </Box>
  );
};
