import { STFT } from "../stft";
import { FFT_LENGTH, HOP_LENGTH, SAMPLE_RATE } from "../const";
import { applyBandpassFilter } from "./audioFilters";

const stft = new STFT(FFT_LENGTH, HOP_LENGTH);
const TOTAL_BINS = FFT_LENGTH / 2 + 1;
const START_BIN = Math.floor(TOTAL_BINS / 4);
const END_BIN = TOTAL_BINS - START_BIN;
const CROPPED_BINS = END_BIN - START_BIN;

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
