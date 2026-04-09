import { Box } from "@mantine/core";
import { DecodeDisplay } from "./DecodeDisplay";
import { MIN_FREQ_HZ, MAX_FREQ_HZ } from "./const";
import type { PileupTrack } from "./utils/pileupCandidates";

type PileupOverlayProps = {
  tracks: PileupTrack[];
  textMap: Record<number, string>;
  isDecoding: boolean;
  decodeWindowSeconds: number;
  minFreqHz?: number;
  maxFreqHz?: number;
};

export const PileupOverlay = ({
  tracks,
  textMap,
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
      {tracks.map((track) => {
        const text = textMap[track.id] ?? "";
        const topPercent = ((maxFreqHz - track.frequency) / range) * 100;

        return (
          <Box
            key={track.id}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${topPercent}%`,
              transform: "translateY(-50%)",
            }}
          >
            <DecodeDisplay
              text={text}
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
