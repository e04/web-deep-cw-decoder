import { STFT } from "../stft";
import { FFT_LENGTH, HOP_LENGTH, SAMPLE_RATE } from "../const";
import { applyBandpassFilter } from "./audioFilters";

function computeMagnitudeSpectrogram(
  complexSpectrogram: Float32Array[]
): Float32Array[] {
  return complexSpectrogram.map((complexFrame) => {
    const magnitudes = new Float32Array(FFT_LENGTH / 2 + 1);

    for (let j = 0; j < magnitudes.length; j++) {
      const real = complexFrame[j * 2];
      const imag = complexFrame[j * 2 + 1];
      magnitudes[j] = Math.sqrt(real * real + imag * imag);
    }

    return magnitudes;
  });
}

function cropSpectrogram(spectrogram: Float32Array[]): Float32Array[] {
  const nBins = FFT_LENGTH / 2 + 1;
  const cutBins = Math.floor(nBins / 4);
  const startBin = cutBins;
  const endBin = nBins - cutBins;

  return spectrogram.map((frame) => frame.slice(startBin, endBin));
}

export function audioToSpectrogram(
  audio: Float32Array,
  filterFreq: number | null,
  filterWidth: number
): Float32Array[] {
  let processedAudio = audio;
  if (filterFreq !== null && filterWidth > 0) {
    processedAudio = applyBandpassFilter(
      audio,
      SAMPLE_RATE,
      filterFreq,
      filterWidth
    );
  }

  const stft = new STFT(FFT_LENGTH, HOP_LENGTH);
  const complexSpectrogram = stft.analyze(processedAudio);

  const magnitudeSpectrogram = computeMagnitudeSpectrogram(complexSpectrogram);

  return cropSpectrogram(magnitudeSpectrogram);
}
