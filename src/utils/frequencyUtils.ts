import {
  MIN_FREQ_HZ,
  MAX_FREQ_HZ,
} from "../const";

export const clampFrequencyToRange = (
  frequency: number,
  minFreq: number = MIN_FREQ_HZ,
  maxFreq: number = MAX_FREQ_HZ,
): number => Math.min(maxFreq, Math.max(minFreq, frequency));

export const calculateVisibleBandBounds = (
  centerFreq: number,
  bandWidth: number,
  minFreq: number = MIN_FREQ_HZ,
  maxFreq: number = MAX_FREQ_HZ,
): { lowerFreq: number; upperFreq: number } => {
  const halfWidth = bandWidth / 2;

  return {
    lowerFreq: Math.max(minFreq, centerFreq - halfWidth),
    upperFreq: Math.min(maxFreq, centerFreq + halfWidth),
  };
};

export const calculateBandPosition = (
  filterFreq: number | null,
  filterWidth: number,
  minFreq: number = MIN_FREQ_HZ,
  maxFreq: number = MAX_FREQ_HZ,
): { topPercent: number; heightPercent: number } => {
  if (filterFreq == null) {
    return { topPercent: 0, heightPercent: 0 };
  }

  const range = maxFreq - minFreq;
  const { lowerFreq, upperFreq } = calculateVisibleBandBounds(
    filterFreq,
    filterWidth,
    minFreq,
    maxFreq,
  );

  const topPercent = ((maxFreq - upperFreq) / range) * 100;
  const heightPercent = ((upperFreq - lowerFreq) / range) * 100;

  return { topPercent, heightPercent };
};
