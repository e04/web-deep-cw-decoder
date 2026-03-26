import { useRef, useEffect } from "react";
import { Box } from "@mantine/core";
import {
  MIN_FREQ_HZ,
  MAX_FREQ_HZ,
  PILEUP_MAX_PEAKS,
} from "./const";
import type { FrequencyDataState } from "./hooks/useSpectrogramRenderer";

const HISTOGRAM_WIDTH = 32;
const EMA_ALPHA = 0.02;
const MIN_PEAK_AMPLITUDE = 30;
const MIN_PEAK_SEPARATION_HZ = 60;
const PEAK_UPDATE_INTERVAL_MS = 1000;
const PEAK_MATCH_HZ = 40;
// A peak must persist this long before being reported
const PEAK_CONFIRM_MS = 0;
// A peak is held for this long after it stops being detected
const PEAK_HOLD_MS = 6000;

type TrackedPeak = {
  frequency: number;
  amplitude: number;
  firstSeen: number;
  lastSeen: number;
};

function findRawPeaks(
  avgData: Float32Array,
  sampleRate: number,
  binCount: number,
  minFreqHz: number,
  maxFreqHz: number,
): { frequency: number; amplitude: number }[] {
  const nyquist = sampleRate / 2;
  const decodableMinBin = Math.floor(
    (minFreqHz / nyquist) * (binCount - 1),
  );
  const decodableMaxBin = Math.min(
    binCount - 1,
    Math.ceil((maxFreqHz / nyquist) * (binCount - 1)),
  );

  const windowSize = 3;
  const candidates: { frequency: number; amplitude: number }[] = [];

  for (
    let b = decodableMinBin + windowSize;
    b <= decodableMaxBin - windowSize;
    b++
  ) {
    let isMax = true;
    for (let w = 1; w <= windowSize; w++) {
      if (avgData[b] <= avgData[b - w] || avgData[b] <= avgData[b + w]) {
        isMax = false;
        break;
      }
    }
    if (isMax && avgData[b] >= MIN_PEAK_AMPLITUDE) {
      candidates.push({
        frequency: (b / (binCount - 1)) * nyquist,
        amplitude: avgData[b],
      });
    }
  }

  candidates.sort((a, b) => b.amplitude - a.amplitude);

  const selected: { frequency: number; amplitude: number }[] = [];
  for (const c of candidates) {
    if (selected.length >= PILEUP_MAX_PEAKS) break;
    if (
      selected.every(
        (s) => Math.abs(s.frequency - c.frequency) >= MIN_PEAK_SEPARATION_HZ,
      )
    ) {
      selected.push(c);
    }
  }

  return selected;
}

function updateTrackedPeaks(
  tracked: TrackedPeak[],
  rawPeaks: { frequency: number; amplitude: number }[],
  now: number,
): TrackedPeak[] {
  const matched = new Set<number>();

  // Match raw peaks to existing tracked peaks
  for (const raw of rawPeaks) {
    const matchIdx = tracked.findIndex(
      (t, i) => !matched.has(i) && Math.abs(t.frequency - raw.frequency) < PEAK_MATCH_HZ,
    );
    if (matchIdx >= 0) {
      matched.add(matchIdx);
      // Slowly drift frequency toward raw detection
      tracked[matchIdx].frequency =
        tracked[matchIdx].frequency * 0.7 + raw.frequency * 0.3;
      tracked[matchIdx].amplitude = raw.amplitude;
      tracked[matchIdx].lastSeen = now;
    } else {
      // New peak
      tracked.push({
        frequency: raw.frequency,
        amplitude: raw.amplitude,
        firstSeen: now,
        lastSeen: now,
      });
    }
  }

  // Remove peaks not seen for PEAK_HOLD_MS
  return tracked.filter((t) => now - t.lastSeen < PEAK_HOLD_MS);
}

function getConfirmedPeaks(tracked: TrackedPeak[], now: number): number[] {
  return tracked
    .filter((t) => now - t.firstSeen >= PEAK_CONFIRM_MS)
    .sort((a, b) => b.amplitude - a.amplitude)
    .slice(0, PILEUP_MAX_PEAKS)
    .map((t) => Math.round(t.frequency))
    .sort((a, b) => a - b);
}

function peaksChanged(oldPeaks: number[], newPeaks: number[]): boolean {
  if (oldPeaks.length !== newPeaks.length) return true;
  for (let i = 0; i < oldPeaks.length; i++) {
    if (Math.abs(oldPeaks[i] - newPeaks[i]) >= PEAK_MATCH_HZ) return true;
  }
  return false;
}

type HistogramProps = {
  frequencyDataRef: React.MutableRefObject<FrequencyDataState | null>;
  peakFrequencies: number[];
  onPeaksChanged: (peaks: number[]) => void;
  height?: number;
  minFreqHz?: number;
  maxFreqHz?: number;
};

export const Histogram = ({
  frequencyDataRef,
  peakFrequencies,
  onPeaksChanged,
  height = 256,
  minFreqHz = MIN_FREQ_HZ,
  maxFreqHz = MAX_FREQ_HZ,
}: HistogramProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const avgDataRef = useRef<Float32Array | null>(null);
  const trackedPeaksRef = useRef<TrackedPeak[]>([]);
  const reportedPeaksRef = useRef<number[]>([]);
  const lastPeakUpdateRef = useRef(0);
  const onPeaksChangedRef = useRef(onPeaksChanged);
  const peakFrequenciesRef = useRef(peakFrequencies);
  const freqRangeRef = useRef({ minFreqHz, maxFreqHz });

  useEffect(() => {
    onPeaksChangedRef.current = onPeaksChanged;
  });
  useEffect(() => {
    peakFrequenciesRef.current = peakFrequencies;
  });
  useEffect(() => {
    freqRangeRef.current = { minFreqHz, maxFreqHz };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;

    const render = () => {
      const freqState = frequencyDataRef.current;
      if (!freqState || !canvas) {
        rafId = requestAnimationFrame(render);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        rafId = requestAnimationFrame(render);
        return;
      }

      const { data, sampleRate, binCount } = freqState;
      const nyquist = sampleRate / 2;

      // Update EMA
      if (!avgDataRef.current || avgDataRef.current.length !== binCount) {
        avgDataRef.current = new Float32Array(binCount);
        avgDataRef.current.set(data);
      } else {
        const avg = avgDataRef.current;
        for (let i = 0; i < binCount; i++) {
          avg[i] = EMA_ALPHA * data[i] + (1 - EMA_ALPHA) * avg[i];
        }
      }

      // Peak detection (throttled)
      const now = performance.now();
      if (now - lastPeakUpdateRef.current >= PEAK_UPDATE_INTERVAL_MS) {
        lastPeakUpdateRef.current = now;
        const { minFreqHz: peakMinF, maxFreqHz: peakMaxF } = freqRangeRef.current;
        const rawPeaks = findRawPeaks(avgDataRef.current, sampleRate, binCount, peakMinF, peakMaxF);
        trackedPeaksRef.current = updateTrackedPeaks(
          trackedPeaksRef.current,
          rawPeaks,
          now,
        );
        const confirmed = getConfirmedPeaks(trackedPeaksRef.current, now);
        if (peaksChanged(reportedPeaksRef.current, confirmed)) {
          reportedPeaksRef.current = confirmed;
          onPeaksChangedRef.current(confirmed);
        }
      }

      // Draw histogram
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const { minFreqHz: drawMinF, maxFreqHz: drawMaxF } = freqRangeRef.current;
      const minBin = Math.floor((drawMinF / nyquist) * (binCount - 1));
      const maxBin = Math.min(
        binCount - 1,
        Math.floor((drawMaxF / nyquist) * (binCount - 1)),
      );

      const peaks = peakFrequenciesRef.current;

      for (let y = 0; y < h; y++) {
        const invY = h - 1 - y;
        const binRange = maxBin - minBin;
        const idx =
          minBin + Math.floor((invY / Math.max(1, h - 1)) * binRange);
        const v = avgDataRef.current[idx] / 255;
        const barWidth = v * w;

        const freq = (idx / (binCount - 1)) * nyquist;
        const isPeak = peaks.some((pf) => Math.abs(pf - freq) < 30);

        if (isPeak) {
          ctx.fillStyle = "#74c0fc";
          ctx.globalAlpha = 0.9;
        } else {
          ctx.fillStyle = "#74c0fc";
          ctx.globalAlpha = 0.3;
        }
        ctx.fillRect(0, y, barWidth, 1);
      }

      ctx.globalAlpha = 1.0;
      rafId = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const { width, height } = entries[0].contentRect;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    });
    resizeObserver.observe(canvas);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [frequencyDataRef]);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      style={{
        width: `${HISTOGRAM_WIDTH}px`,
        height: `${height}px`,
        flexShrink: 0,
        background: "var(--mantine-color-dark-9)",
        borderLeft: "1px solid var(--mantine-color-dark-7)",
      }}
    />
  );
};
