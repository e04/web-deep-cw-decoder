export function applyBandpassFilter(
  audioData: Float32Array,
  sampleRate: number,
  centerFreq: number,
  bandwidth: number,
  passes: number = 4
): Float32Array {
  const q = centerFreq / bandwidth;
  const omega = (2 * Math.PI * centerFreq) / sampleRate;
  const sinOmega = Math.sin(omega);
  const cosOmega = Math.cos(omega);
  const alpha = sinOmega / (2 * q);

  const b0 = alpha;
  const b1 = 0;
  const b2 = -alpha;
  const a0 = 1 + alpha;
  const a1 = -2 * cosOmega;
  const a2 = 1 - alpha;

  const normB0 = b0 / a0;
  const normB1 = b1 / a0;
  const normB2 = b2 / a0;
  const normA1 = a1 / a0;
  const normA2 = a2 / a0;

  let input = audioData;
  let output = new Float32Array(audioData.length);

  for (let p = 0; p < passes; p++) {
    let x1 = 0,
      x2 = 0;
    let y1 = 0,
      y2 = 0;

    for (let i = 0; i < input.length; i++) {
      const x0 = input[i];
      const y0 =
        normB0 * x0 + normB1 * x1 + normB2 * x2 - normA1 * y1 - normA2 * y2;

      output[i] = y0;

      x2 = x1;
      x1 = x0;
      y2 = y1;
      y1 = y0;
    }

    input = output;

    if (p < passes - 1) {
      output = new Float32Array(audioData.length);
    }
  }

  return output;
}
