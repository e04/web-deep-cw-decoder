import { STFT } from "../stft";
import { FFT_LENGTH, HOP_LENGTH, SAMPLE_RATE } from "../const";
import { applyBandpassFilter } from "./audioFilters";

const stft = new STFT(FFT_LENGTH, HOP_LENGTH);
const TOTAL_BINS = FFT_LENGTH / 2 + 1;
const START_BIN = Math.floor(TOTAL_BINS / 4);
const END_BIN = TOTAL_BINS - START_BIN;
const CROPPED_BINS = END_BIN - START_BIN;
const BIN_RESOLUTION = SAMPLE_RATE / FFT_LENGTH; // 12.5 Hz/bin
const NORMAL_CENTER_BIN = Math.round((START_BIN + END_BIN - 1) / 2); // bin 64 = 800Hz

export function audioToSpectrogramTensor(
  audio: Float32Array,
  filterFreq: number | null,
  filterWidth: number
): { data: Float32Array; dims: [number, number, number, 1] } | null {
  let processedAudio = audio;
  if (filterFreq !== null && filterWidth > 0) {
    processedAudio = applyBandpassFilter(
      audio,
      SAMPLE_RATE,
      filterFreq,
      filterWidth
    );
  }

  const timeSteps = stft.getFrameCount(processedAudio.length);
  if (timeSteps === 0) {
    return null;
  }

  const flattenedSpectrogram = new Float32Array(timeSteps * CROPPED_BINS);
  stft.forEachSpectrum(processedAudio, (complexFrame, frameIndex) => {
    const offset = frameIndex * CROPPED_BINS;
    for (let bin = START_BIN; bin < END_BIN; bin++) {
      const real = complexFrame[bin * 2];
      const imag = complexFrame[bin * 2 + 1];
      flattenedSpectrogram[offset + bin - START_BIN] = Math.sqrt(
        real * real + imag * imag,
      );
    }
  });

  return {
    data: flattenedSpectrogram,
    dims: [1, timeSteps, CROPPED_BINS, 1],
  };
}

/**
 * Compute spectrogram with frequency bin shifting.
 * Extracts only `bandwidth` Hz around targetFreq, places it at 800Hz (model center).
 * All other bins are zero-filled.
 */
export function audioToShiftedSpectrogramTensor(
  audio: Float32Array,
  targetFreq: number,
  bandwidth: number = 50,
): { data: Float32Array; dims: [number, number, number, 1] } | null {
  const timeSteps = stft.getFrameCount(audio.length);
  if (timeSteps === 0) return null;

  const targetBin = Math.round(targetFreq / BIN_RESOLUTION);
  const halfWidthBins = Math.ceil(bandwidth / 2 / BIN_RESOLUTION);
  const destCenterIdx = NORMAL_CENTER_BIN - START_BIN; // index 32 in cropped output

  const flattenedSpectrogram = new Float32Array(timeSteps * CROPPED_BINS);

  stft.forEachSpectrum(audio, (complexFrame, frameIndex) => {
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

  return {
    data: flattenedSpectrogram,
    dims: [1, timeSteps, CROPPED_BINS, 1],
  };
}
