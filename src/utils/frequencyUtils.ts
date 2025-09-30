import { MIN_FREQ_HZ, MAX_FREQ_HZ } from "../const";

export const calculateBandPosition = (
  filterFreq: number | null,
  filterWidth: number
): { topPercent: number; heightPercent: number } => {
  const isEnableFilter = filterFreq != null;
  const _filterFreq = isEnableFilter ? filterFreq : 800;
  const _filterWidth = isEnableFilter ? filterWidth : 800;

  const range = MAX_FREQ_HZ - MIN_FREQ_HZ;
  const half = _filterWidth / 2;
  const lower = Math.max(MIN_FREQ_HZ, _filterFreq - half);
  const upper = Math.min(MAX_FREQ_HZ, _filterFreq + half);

  const topPercent = ((MAX_FREQ_HZ - upper) / range) * 100;
  const heightPercent = ((upper - lower) / range) * 100;

  return { topPercent, heightPercent };
};
