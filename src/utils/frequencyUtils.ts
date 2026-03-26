import {
  MIN_FREQ_HZ,
  MAX_FREQ_HZ,
  DEFAULT_DECODE_BANDWIDTH_HZ,
} from "../const";

export const calculateBandPosition = (
  filterFreq: number | null,
  filterWidth: number,
  minFreq: number = MIN_FREQ_HZ,
  maxFreq: number = MAX_FREQ_HZ,
): { topPercent: number; heightPercent: number } => {
  const isEnableFilter = filterFreq != null;
  const _filterFreq = isEnableFilter ? filterFreq : 800;
  const _filterWidth = isEnableFilter
    ? filterWidth
    : DEFAULT_DECODE_BANDWIDTH_HZ;

  const range = maxFreq - minFreq;
  const half = _filterWidth / 2;
  const lower = Math.max(minFreq, _filterFreq - half);
  const upper = Math.min(maxFreq, _filterFreq + half);

  const topPercent = ((maxFreq - upper) / range) * 100;
  const heightPercent = ((upper - lower) / range) * 100;

  return { topPercent, heightPercent };
};
