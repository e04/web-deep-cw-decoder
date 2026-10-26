import { STFT } from "../stft";
import {
  BIN_RESOLUTION,
  CW_DETECT_HOP_LENGTH,
  DECODABLE_MAX_FREQ_HZ,
  DECODABLE_MIN_FREQ_HZ,
  FFT_LENGTH,
  HOP_LENGTH,
  NARROW_SHIFT_BINS,
  PILEUP_FILTER_WIDTH_HZ,
  SAMPLE_RATE,
} from "../const";
import { applyBandpassFilter } from "./audioFilters";

const stft = new STFT(FFT_LENGTH, HOP_LENGTH);
const cwDetectStft = new STFT(FFT_LENGTH, CW_DETECT_HOP_LENGTH);
const TOTAL_BINS = FFT_LENGTH / 2 + 1;
const START_BIN = Math.ceil(DECODABLE_MIN_FREQ_HZ / BIN_RESOLUTION);
const END_BIN = Math.floor(DECODABLE_MAX_FREQ_HZ / BIN_RESOLUTION) + 1;
const CENTER_PAD = FFT_LENGTH / 2;
const NOISE_LEVEL_QUANTILE = 0.9;
const NOISE_LEVEL_RAYLEIGH_FACTOR = Math.sqrt(
  -2 * Math.log(1 - NOISE_LEVEL_QUANTILE),
);
const NOISE_LEVEL_MIN_RELATIVE_TO_PEAK = 1e-3;
const NOISE_LEVEL_MIN = 1e-5;
const CROPPED_BINS = END_BIN - START_BIN;
const NORMAL_CENTER_BIN = Math.round((START_BIN + END_BIN - 1) / 2); // bin 64 = 800Hz
const NARROW_CENTER_IDX = Math.floor(NARROW_SHIFT_BINS / 2);

if (END_BIN > TOTAL_BINS) {
  throw new Error("Configured decode band exceeds the FFT spectrum.");
}

if (CROPPED_BINS !== 65) {
  throw new Error(`Model input must remain 65 bins, got ${CROPPED_BINS}.`);
}

// Matches the model's "noise_q90_log1p" normalization. `noiseSource` lets
// zero-filled bins be left out of the noise estimate.
function normalizeSpectrogramNoiseLog1p(
  spectrogram: Float32Array,
  noiseSource: Float32Array = spectrogram,
): Float32Array {
  const sorted = Float32Array.from(noiseSource).sort();
  if (sorted.length === 0) {
    return spectrogram;
  }
  const noiseLevel = Math.max(
    sorted[Math.floor(NOISE_LEVEL_QUANTILE * (sorted.length - 1))] /
      NOISE_LEVEL_RAYLEIGH_FACTOR,
    sorted[sorted.length - 1] * NOISE_LEVEL_MIN_RELATIVE_TO_PEAK,
    NOISE_LEVEL_MIN,
  );
  for (let i = 0; i < spectrogram.length; i++) {
    spectrogram[i] = Math.log1p(spectrogram[i] / noiseLevel);
  }
  return spectrogram;
}

// Reflect-pads like a centered STFT so frame t is centered on sample t * HOP_LENGTH.
function centerPad(audio: Float32Array): Float32Array | null {
  if (audio.length <= CENTER_PAD + 1) {
    return null;
  }
  const padded = new Float32Array(audio.length + CENTER_PAD * 2);
  for (let i = 0; i < CENTER_PAD; i++) {
    padded[i] = audio[CENTER_PAD - i];
    padded[CENTER_PAD + audio.length + i] = audio[audio.length - 2 - i];
  }
  padded.set(audio, CENTER_PAD);
  return padded;
}

export function audioToSpectrogramTensor(
  audio: Float32Array,
  filterFreq: number | null,
  filterWidth: number
): { data: Float32Array; dims: [number, 1, number, number] } | null {
  let processedAudio = audio;
  if (filterFreq !== null && filterWidth > 0) {
    processedAudio = applyBandpassFilter(
      audio,
      SAMPLE_RATE,
      filterFreq,
      filterWidth
    );
  }

  const paddedAudio = centerPad(processedAudio);
  if (!paddedAudio) {
    return null;
  }
  const timeSteps = stft.getFrameCount(paddedAudio.length);

  const flattenedSpectrogram = new Float32Array(timeSteps * CROPPED_BINS);
  stft.forEachSpectrum(paddedAudio, (complexFrame, frameIndex) => {
    const offset = frameIndex * CROPPED_BINS;
    for (let bin = START_BIN; bin < END_BIN; bin++) {
      const real = complexFrame[bin * 2];
      const imag = complexFrame[bin * 2 + 1];
      flattenedSpectrogram[offset + bin - START_BIN] = Math.sqrt(
        real * real + imag * imag,
      );
    }
  });

  normalizeSpectrogramNoiseLog1p(flattenedSpectrogram);

  return {
    data: flattenedSpectrogram,
    dims: [1, 1, timeSteps, CROPPED_BINS],
  };
}

/**
 * Compute spectrogram with frequency bin shifting.
 * Extracts only `bandwidth` Hz around targetFreq, places it at 800Hz (model center).
 * All other bins are zero-filled for the 65-bin English model.
 */
export function audioToShiftedSpectrogramTensor(
  audio: Float32Array,
  targetFreq: number,
  bandwidth: number = PILEUP_FILTER_WIDTH_HZ,
): { data: Float32Array; dims: [number, 1, number, number] } | null {
  const paddedAudio = centerPad(audio);
  if (!paddedAudio) return null;
  const timeSteps = stft.getFrameCount(paddedAudio.length);

  const targetBin = Math.round(targetFreq / BIN_RESOLUTION);
  const halfWidthBins = Math.ceil(bandwidth / 2 / BIN_RESOLUTION);
  const destCenterIdx = NORMAL_CENTER_BIN - START_BIN; // index 32 in cropped output

  const flattenedSpectrogram = new Float32Array(timeSteps * CROPPED_BINS);

  stft.forEachSpectrum(paddedAudio, (complexFrame, frameIndex) => {
    const offset = frameIndex * CROPPED_BINS;
    for (let d = -halfWidthBins; d <= halfWidthBins; d++) {
      const srcBin = targetBin + d;
      const destIdx = destCenterIdx + d;
      if (
        srcBin >= 0 &&
        srcBin < TOTAL_BINS &&
        destIdx >= 0 &&
        destIdx < CROPPED_BINS
      ) {
        const real = complexFrame[srcBin * 2];
        const imag = complexFrame[srcBin * 2 + 1];
        flattenedSpectrogram[offset + destIdx] = Math.sqrt(
          real * real + imag * imag,
        );
      }
    }
  });

  const destStart = Math.max(0, destCenterIdx - halfWidthBins);
  const destEnd = Math.min(CROPPED_BINS, destCenterIdx + halfWidthBins + 1);
  const populated = new Float32Array(timeSteps * (destEnd - destStart));
  for (let t = 0; t < timeSteps; t++) {
    populated.set(
      flattenedSpectrogram.subarray(
        t * CROPPED_BINS + destStart,
        t * CROPPED_BINS + destEnd,
      ),
      t * (destEnd - destStart),
    );
  }
  normalizeSpectrogramNoiseLog1p(flattenedSpectrogram, populated);

  return {
    data: flattenedSpectrogram,
    dims: [1, 1, timeSteps, CROPPED_BINS],
  };
}

/**
 * Compute spectrogram for the 3-bin pileup model by extracting
 * only the centered narrow slice around the target frequency.
 */
export function audioToNarrowShiftedSpectrogramTensor(
  audio: Float32Array,
  targetFreq: number,
): { data: Float32Array; dims: [number, 1, number, number] } | null {
  const paddedAudio = centerPad(audio);
  if (!paddedAudio) return null;
  const timeSteps = stft.getFrameCount(paddedAudio.length);

  const targetBin = Math.round(targetFreq / BIN_RESOLUTION);
  const flattenedSpectrogram = new Float32Array(timeSteps * NARROW_SHIFT_BINS);

  stft.forEachSpectrum(paddedAudio, (complexFrame, frameIndex) => {
    const offset = frameIndex * NARROW_SHIFT_BINS;
    for (let d = -NARROW_CENTER_IDX; d <= NARROW_CENTER_IDX; d++) {
      const srcBin = targetBin + d;
      const destIdx = NARROW_CENTER_IDX + d;
      if (srcBin >= 0 && srcBin < TOTAL_BINS) {
        const real = complexFrame[srcBin * 2];
        const imag = complexFrame[srcBin * 2 + 1];
        flattenedSpectrogram[offset + destIdx] = Math.sqrt(
          real * real + imag * imag,
        );
      }
    }
  });

  normalizeSpectrogramNoiseLog1p(flattenedSpectrogram);

  return {
    data: flattenedSpectrogram,
    dims: [1, 1, timeSteps, NARROW_SHIFT_BINS],
  };
}

export function audioToBinSequenceTensor(
  audio: Float32Array,
  minFreqHz: number,
  maxFreqHz: number,
): { data: Float32Array; dims: [number, 1, number]; frequencies: number[] } | null {
  const timeSteps = cwDetectStft.getFrameCount(audio.length);
  if (timeSteps === 0) {
    return null;
  }

  const clampedMinFreqHz = Math.max(0, minFreqHz);
  const clampedMaxFreqHz = Math.min(SAMPLE_RATE / 2, maxFreqHz);
  if (clampedMinFreqHz > clampedMaxFreqHz) {
    return null;
  }

  const minBin = Math.max(0, Math.floor(clampedMinFreqHz / BIN_RESOLUTION));
  const maxBin = Math.min(
    TOTAL_BINS - 1,
    Math.ceil(clampedMaxFreqHz / BIN_RESOLUTION),
  );
  const batchSize = maxBin - minBin + 1;

  if (batchSize <= 0) {
    return null;
  }

  const flattenedSequences = new Float32Array(batchSize * timeSteps);
  const frequencies = Array.from(
    { length: batchSize },
    (_, index) => (minBin + index) * BIN_RESOLUTION,
  );

  cwDetectStft.forEachSpectrum(audio, (complexFrame, frameIndex) => {
    for (let bin = minBin; bin <= maxBin; bin++) {
      const real = complexFrame[bin * 2];
      const imag = complexFrame[bin * 2 + 1];
      const magnitude = Math.sqrt(real * real + imag * imag);
      const batchIndex = bin - minBin;
      flattenedSequences[batchIndex * timeSteps + frameIndex] = magnitude;
    }
  });

  for (let batchIndex = 0; batchIndex < batchSize; batchIndex++) {
    const offset = batchIndex * timeSteps;
    let mean = 0;

    for (let frameIndex = 0; frameIndex < timeSteps; frameIndex++) {
      const logMagnitude = Math.log1p(flattenedSequences[offset + frameIndex]);
      flattenedSequences[offset + frameIndex] = logMagnitude;
      mean += logMagnitude;
    }

    mean /= timeSteps;

    let variance = 0;
    for (let frameIndex = 0; frameIndex < timeSteps; frameIndex++) {
      const centered = flattenedSequences[offset + frameIndex] - mean;
      variance += centered * centered;
    }

    const std = Math.max(Math.sqrt(variance / timeSteps), 1e-4);
    for (let frameIndex = 0; frameIndex < timeSteps; frameIndex++) {
      flattenedSequences[offset + frameIndex] =
        (flattenedSequences[offset + frameIndex] - mean) / std;
    }
  }

  return {
    data: flattenedSequences,
    dims: [batchSize, 1, timeSteps],
    frequencies,
  };
}
