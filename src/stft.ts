export class FFT {
  public readonly fftSize: number;
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
      const angle = (-2 * Math.PI * i) / fftSize;
      this.sinTable[i] = Math.sin(angle);
      this.cosTable[i] = Math.cos(angle);
    }
  }

  public transform(complexArray: Float32Array): void {
    for (let i = 0; i < this.fftSize; i++) {
      const reversedIndex = this.reverseTable[i];
      if (i < reversedIndex) {
        [complexArray[i * 2], complexArray[reversedIndex * 2]] = [
          complexArray[reversedIndex * 2],
          complexArray[i * 2],
        ];
        [complexArray[i * 2 + 1], complexArray[reversedIndex * 2 + 1]] = [
          complexArray[reversedIndex * 2 + 1],
          complexArray[i * 2 + 1],
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

          const tr =
            wReal * complexArray[i_j_half] - wImag * complexArray[i_j_half + 1];
          const ti =
            wReal * complexArray[i_j_half + 1] + wImag * complexArray[i_j_half];

          const ur = complexArray[i_j];
          const ui = complexArray[i_j + 1];

          complexArray[i_j] = ur + tr;
          complexArray[i_j + 1] = ui + ti;
          complexArray[i_j_half] = ur - tr;
          complexArray[i_j_half + 1] = ui - ti;
        }
      }
    }
  }
}

export class STFT {
  public readonly fftSize: number;
  public readonly hopSize: number;
  private fft: FFT;
  private window: Float32Array;
  private frame: Float32Array;
  private complexFrame: Float32Array;

  constructor(fftSize: number, hopSize: number) {
    if (fftSize <= 0) {
      throw new Error("FFT size must be positive.");
    }
    if (hopSize <= 0) {
      throw new Error("Hop size must be positive.");
    }

    this.fftSize = fftSize;
    this.hopSize = hopSize;
    this.fft = new FFT(fftSize);
    this.window = this.generateHanningWindow();
    this.frame = new Float32Array(this.fftSize);
    this.complexFrame = new Float32Array(this.fftSize * 2);
  }

  private generateHanningWindow(): Float32Array {
    const window = new Float32Array(this.fftSize);
    for (let i = 0; i < this.fftSize; i++) {
      window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (this.fftSize - 1)));
    }
    return window;
  }

  public getFrameCount(signalLength: number): number {
    if (signalLength < this.fftSize) {
      return 0;
    }
    return Math.floor((signalLength - this.fftSize) / this.hopSize) + 1;
  }

  public forEachSpectrum(
    signal: Float32Array,
    iteratee: (complexFrame: Float32Array, frameIndex: number) => void,
  ): number {
    const frameCount = this.getFrameCount(signal.length);
    if (frameCount === 0) {
      return 0;
    }

    let frameIndex = 0;
    for (let i = 0; i + this.fftSize <= signal.length; i += this.hopSize) {
      const signalSlice = signal.subarray(i, i + this.fftSize);
      this.frame.set(signalSlice);

      for (let j = 0; j < this.fftSize; j++) {
        this.frame[j] *= this.window[j];
      }

      for (let j = 0; j < this.fftSize; j++) {
        this.complexFrame[j * 2] = this.frame[j];
        this.complexFrame[j * 2 + 1] = 0;
      }

      this.fft.transform(this.complexFrame);
      iteratee(this.complexFrame, frameIndex);
      frameIndex += 1;
    }

    return frameIndex;
  }
}
