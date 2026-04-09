import { PILEUP_FILTER_WIDTH_HZ, PILEUP_MAX_PEAKS } from "../const";

// Signal tracking EMA
const SIGNAL_EMA_ALPHA = 0.08;

// Local-percentile noise floor estimation
const NOISE_WINDOW_HALF = 50;
const NOISE_PERCENTILE = 0.25;

// SNR-based peak detection
const SNR_THRESHOLD_DB = 8;
const MIN_PEAK_AMPLITUDE = 15;
const MIN_PEAK_SEPARATION_HZ = PILEUP_FILTER_WIDTH_HZ;
const MIN_PROMINENCE = 4;
const PROMINENCE_SEARCH_BINS = 30;

// Peak tracking
const PEAK_UPDATE_INTERVAL_MS = 250;
const PEAK_MATCH_HZ = 40;
const PEAK_CONFIRM_MS = 400;
const PEAK_HOLD_MS = 5000;

type TrackedPeak = {
  frequency: number;
  amplitude: number;
  firstSeen: number;
  lastSeen: number;
};

function selectStrongSeparatedPeaks<T extends { frequency: number; amplitude: number }>(
  peaks: T[],
  maxPeaks: number,
  minSeparationHz: number,
): T[] {
  const selected: T[] = [];
  for (const peak of peaks) {
    if (selected.length >= maxPeaks) break;
    if (
      selected.every(
        (s) => Math.abs(s.frequency - peak.frequency) >= minSeparationHz,
      )
    ) {
      selected.push(peak);
    }
  }
  return selected;
}

function estimateLocalNoiseFloor(
  signalData: Float32Array,
  minBin: number,
  maxBin: number,
): Float32Array {
  const noiseFloor = new Float32Array(signalData.length);
  const buf: number[] = [];
  for (let b = minBin; b <= maxBin; b++) {
    const lo = Math.max(minBin, b - NOISE_WINDOW_HALF);
    const hi = Math.min(maxBin, b + NOISE_WINDOW_HALF);
    buf.length = 0;
    for (let i = lo; i <= hi; i++) {
      buf.push(signalData[i]);
    }
    buf.sort((a, c) => a - c);
    noiseFloor[b] = buf[Math.floor(buf.length * NOISE_PERCENTILE)];
  }
  return noiseFloor;
}

function findRawPeaks(
  signalData: Float32Array,
  sampleRate: number,
  binCount: number,
  minFreqHz: number,
  maxFreqHz: number,
): { frequency: number; amplitude: number }[] {
  const nyquist = sampleRate / 2;
  const decodableMinBin = Math.floor((minFreqHz / nyquist) * (binCount - 1));
  const decodableMaxBin = Math.min(
    binCount - 1,
    Math.ceil((maxFreqHz / nyquist) * (binCount - 1)),
  );

  const noiseFloor = estimateLocalNoiseFloor(signalData, decodableMinBin, decodableMaxBin);

  const snr = new Float32Array(binCount);
  for (let i = decodableMinBin; i <= decodableMaxBin; i++) {
    snr[i] = signalData[i] - noiseFloor[i];
  }

  const windowSize = 3;
  const candidates: { frequency: number; amplitude: number }[] = [];

  for (let b = decodableMinBin + windowSize; b <= decodableMaxBin - windowSize; b++) {
    let isMax = true;
    for (let w = 1; w <= windowSize; w++) {
      if (snr[b] <= snr[b - w] || snr[b] <= snr[b + w]) {
        isMax = false;
        break;
      }
    }
    if (!isMax) continue;
    if (snr[b] < SNR_THRESHOLD_DB || signalData[b] < MIN_PEAK_AMPLITUDE) continue;

    // Prominence: height above the higher of the two nearest valleys
    let leftMin = snr[b];
    for (let i = b - 1; i >= Math.max(decodableMinBin, b - PROMINENCE_SEARCH_BINS); i--) {
      if (snr[i] > snr[b]) break;
      leftMin = Math.min(leftMin, snr[i]);
    }
    let rightMin = snr[b];
    for (let i = b + 1; i <= Math.min(decodableMaxBin, b + PROMINENCE_SEARCH_BINS); i++) {
      if (snr[i] > snr[b]) break;
      rightMin = Math.min(rightMin, snr[i]);
    }
    const prominence = snr[b] - Math.max(leftMin, rightMin);
    if (prominence < MIN_PROMINENCE) continue;

    candidates.push({
      frequency: (b / (binCount - 1)) * nyquist,
      amplitude: snr[b],
    });
  }

  candidates.sort((a, b) => b.amplitude - a.amplitude);

  return selectStrongSeparatedPeaks(candidates, PILEUP_MAX_PEAKS, MIN_PEAK_SEPARATION_HZ);
}

function updateTrackedPeaks(
  tracked: TrackedPeak[],
  rawPeaks: { frequency: number; amplitude: number }[],
  now: number,
): TrackedPeak[] {
  const matched = new Set<number>();

  for (const raw of rawPeaks) {
    const matchIdx = tracked.findIndex(
      (t, i) => !matched.has(i) && Math.abs(t.frequency - raw.frequency) < PEAK_MATCH_HZ,
    );
    if (matchIdx >= 0) {
      matched.add(matchIdx);
      tracked[matchIdx].frequency =
        tracked[matchIdx].frequency * 0.7 + raw.frequency * 0.3;
      tracked[matchIdx].amplitude = raw.amplitude;
      tracked[matchIdx].lastSeen = now;
    } else {
      tracked.push({
        frequency: raw.frequency,
        amplitude: raw.amplitude,
        firstSeen: now,
        lastSeen: now,
      });
    }
  }

  return tracked.filter((t) => now - t.lastSeen < PEAK_HOLD_MS);
}

function getConfirmedPeaks(tracked: TrackedPeak[], now: number): number[] {
  const confirmed = tracked
    .filter((t) => now - t.firstSeen >= PEAK_CONFIRM_MS)
    .sort((a, b) => b.amplitude - a.amplitude);
  return selectStrongSeparatedPeaks(confirmed, PILEUP_MAX_PEAKS, MIN_PEAK_SEPARATION_HZ)
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

export class PeakDetector {
  private signalData: Float32Array | null = null;
  private trackedPeaks: TrackedPeak[] = [];
  private reportedPeaks: number[] = [];
  private lastUpdateTime = 0;

  /** Current smoothed signal data for histogram drawing */
  get signal(): Float32Array | null {
    return this.signalData;
  }

  /** Update signal EMA with new frequency data. Call every frame. */
  updateEma(data: Uint8Array, binCount: number): void {
    if (!this.signalData || this.signalData.length !== binCount) {
      this.signalData = new Float32Array(binCount);
      this.signalData.set(data);
    } else {
      const sig = this.signalData;
      for (let i = 0; i < binCount; i++) {
        sig[i] = SIGNAL_EMA_ALPHA * data[i] + (1 - SIGNAL_EMA_ALPHA) * sig[i];
      }
    }
  }

  /**
   * Run peak detection if enough time has elapsed.
   * Returns the new confirmed peaks array if peaks changed, otherwise null.
   */
  detectPeaks(
    sampleRate: number,
    binCount: number,
    minFreqHz: number,
    maxFreqHz: number,
  ): number[] | null {
    if (!this.signalData) return null;

    const now = performance.now();
    if (now - this.lastUpdateTime < PEAK_UPDATE_INTERVAL_MS) return null;
    this.lastUpdateTime = now;

    const rawPeaks = findRawPeaks(
      this.signalData, sampleRate, binCount, minFreqHz, maxFreqHz,
    );
    this.trackedPeaks = updateTrackedPeaks(this.trackedPeaks, rawPeaks, now);
    const confirmed = getConfirmedPeaks(this.trackedPeaks, now);

    if (peaksChanged(this.reportedPeaks, confirmed)) {
      this.reportedPeaks = confirmed;
      return confirmed;
    }
    return null;
  }
}
