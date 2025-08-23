export class STFT {
  private fftSize: number;
  private reverseTable: Uint32Array;
  private sinTable: Float32Array;
  private cosTable: Float32Array;

  constructor(fftSize: number) {
    if ((fftSize & (fftSize - 1)) !== 0) {
      throw new Error("FFT size must be a power of 2.");
    }
    this.fftSize = fftSize;
    this.reverseTable = new Uint32Array(fftSize);
    this.sinTable = new Float32Array(fftSize);
    this.cosTable = new Float32Array(fftSize);

    let limit = 1;
    let bit = fftSize >> 1;
    while (limit < fftSize) {
      for (let i = 0; i < limit; i++) {
        this.reverseTable[i + limit] = this.reverseTable[i] + bit;
      }
      limit = limit << 1;
      bit = bit >> 1;
    }

    for (let i = 0; i < fftSize; i++) {
      this.sinTable[i] = Math.sin((-2 * Math.PI * i) / fftSize);
      this.cosTable[i] = Math.cos((-2 * Math.PI * i) / fftSize);
    }
  }

  createComplexArray(): Float32Array {
    return new Float32Array(this.fftSize * 2);
  }

  toComplexArray(realArray: Float32Array): Float32Array {
    const complexArray = this.createComplexArray();
    for (let i = 0; i < this.fftSize; i++) {
      complexArray[i * 2] = realArray[i];
    }
    return complexArray;
  }

  transform(output: Float32Array, input: Float32Array): void {
    for (let i = 0; i < this.fftSize; i++) {
      const reversedIndex = this.reverseTable[i];
      if (i < reversedIndex) {
        [input[i * 2], input[reversedIndex * 2]] = [
          input[reversedIndex * 2],
          input[i * 2],
        ];
        [input[i * 2 + 1], input[reversedIndex * 2 + 1]] = [
          input[reversedIndex * 2 + 1],
          input[i * 2 + 1],
        ];
      }
    }

    for (let halfSize = 1; halfSize < this.fftSize; halfSize *= 2) {
      const step = 2 * halfSize;
      const angleStep = this.fftSize / step;
      for (let i = 0; i < this.fftSize; i += step) {
        for (let j = 0; j < halfSize; j++) {
          const angleIndex = j * angleStep;
          const wReal = this.cosTable[angleIndex];
          const wImag = this.sinTable[angleIndex];

          const i_j = (i + j) * 2;
          const i_j_half = (i + j + halfSize) * 2;

          const tr = wReal * input[i_j_half] - wImag * input[i_j_half + 1];
          const ti = wReal * input[i_j_half + 1] + wImag * input[i_j_half];

          const ur = input[i_j];
          const ui = input[i_j + 1];

          output[i_j] = ur + tr;
          output[i_j + 1] = ui + ti;
          output[i_j_half] = ur - tr;
          output[i_j_half + 1] = ui - ti;
        }
      }
      if (halfSize * 2 < this.fftSize) {
        for (let k = 0; k < this.fftSize * 2; k++) {
          input[k] = output[k];
        }
      }
    }
  }
}
