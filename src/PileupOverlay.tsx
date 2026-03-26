import { Box } from "@mantine/core";
import { DecodeDisplay } from "./DecodeDisplay";
import { MIN_FREQ_HZ, MAX_FREQ_HZ } from "./const";
import type { TextSegment } from "./utils/textDecoder";

type PileupOverlayProps = {
  peakFrequencies: number[];
  segmentsMap: Record<number, TextSegment[]>;
  isDecoding: boolean;
  decodeWindowSeconds: number;
  minFreqHz?: number;
  maxFreqHz?: number;
};

export const PileupOverlay = ({
  peakFrequencies,
  segmentsMap,
  isDecoding,
  decodeWindowSeconds,
  minFreqHz = MIN_FREQ_HZ,
  maxFreqHz = MAX_FREQ_HZ,
}: PileupOverlayProps) => {
  const range = maxFreqHz - minFreqHz;

  return (
    <Box
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {peakFrequencies.map((freq) => {
        const segments = segmentsMap[freq] ?? [];
        const topPercent = ((maxFreqHz - freq) / range) * 100;

        return (
          <Box
            key={freq}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${topPercent}%`,
              transform: "translateY(-50%)",
            }}
          >
            <DecodeDisplay
              segments={segments}
              isDecoding={isDecoding}
              backgroundColor="transparent"
              decodeWindowSeconds={decodeWindowSeconds}
              height={24}
              fontSize={20}
              textStroke
            />
          </Box>
        );
      })}
    </Box>
  );
};
