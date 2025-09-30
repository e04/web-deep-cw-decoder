import { useRef } from "react";
import { Box } from "@mantine/core";
import { useSpectrogramRenderer } from "./hooks/useSpectrogramRenderer";
import { useCanvasInteraction } from "./hooks/useCanvasInteraction";
import { calculateBandPosition } from "./utils/frequencyUtils";

type ScopeProps = {
  stream: MediaStream;
  setFilterFreq: (freq: number | null) => void;
  filterFreq: number | null;
  filterWidth: number;
  gain: number;
};

export const Scope = ({
  stream,
  setFilterFreq,
  filterFreq,
  filterWidth,
  gain,
}: ScopeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useSpectrogramRenderer({ stream, gain, canvasRef });

  useCanvasInteraction({ canvasRef, filterFreq, setFilterFreq, filterWidth });

  const { topPercent, heightPercent } = calculateBandPosition(
    filterFreq,
    filterWidth
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
          height: "256px",
          borderRadius: "4px",
          border: "1px solid var(--mantine-color-dark-4)",
        }}
      />
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
    </Box>
  );
};
