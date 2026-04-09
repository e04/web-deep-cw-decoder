export class FFT {
  public readonly fftSize: number;
  private readonly isPowerOfTwo: boolean;
  private reverseTable?: Uint32Array;
  private sinTable?: Float32Array;
  private cosTable?: Float32Array;
  private bluesteinSize?: number;
  private bluesteinChirpTable?: Float32Array;
  private bluesteinKernelFft?: Float32Array;
  private bluesteinFft?: FFT;

  constructor(fftSize: number) {
    if (fftSize <= 0) {
      throw new Error("FFT size must be positive.");
    }
    this.fftSize = fftSize;
    this.isPowerOfTwo = (fftSize & (fftSize - 1)) === 0;

    if (this.isPowerOfTwo) {
      this.initializePowerOfTwoTables();
      return;
    }

    this.initializeBluesteinTables();
  }

  private initializePowerOfTwoTables(): void {
    this.reverseTable = new Uint32Array(this.fftSize);
    this.sinTable = new Float32Array(this.fftSize);
    this.cosTable = new Float32Array(this.fftSize);

    let limit = 1;
    let bit = this.fftSize >> 1;
    while (limit < this.fftSize) {
      for (let i = 0; i < limit; i++) {
        this.reverseTable[i + limit] = this.reverseTable[i] + bit;
      }
      limit = limit << 1;
      bit = bit >> 1;
    }

    for (let i = 0; i < this.fftSize; i++) {
      const angle = (-2 * Math.PI * i) / this.fftSize;
      this.sinTable[i] = Math.sin(angle);
      this.cosTable[i] = Math.cos(angle);
    }
  }

  private initializeBluesteinTables(): void {
    const convolutionSize = nextPowerOfTwo(this.fftSize * 2 - 1);
    const chirpTable = new Float32Array(this.fftSize * 2);
    const kernel = new Float32Array(convolutionSize * 2);

    for (let i = 0; i < this.fftSize; i++) {
      const angle = (Math.PI * ((i * i) % (this.fftSize * 2))) / this.fftSize;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      chirpTable[i * 2] = cos;
      chirpTable[i * 2 + 1] = sin;

      kernel[i * 2] = cos;
      kernel[i * 2 + 1] = sin;
      if (i !== 0) {
        const mirroredIndex = convolutionSize - i;
        kernel[mirroredIndex * 2] = cos;
        kernel[mirroredIndex * 2 + 1] = sin;
      }
    }

    const bluesteinFft = new FFT(convolutionSize);
    bluesteinFft.transform(kernel);

    this.bluesteinSize = convolutionSize;
    this.bluesteinChirpTable = chirpTable;
    this.bluesteinKernelFft = kernel;
    this.bluesteinFft = bluesteinFft;
  }

  public transform(complexArray: Float32Array): void {
    if (complexArray.length !== this.fftSize * 2) {
      throw new Error("FFT input length does not match configured FFT size.");
    }

    if (this.isPowerOfTwo) {
      this.powerOfTwoTransform(complexArray);
      return;
    }

    this.bluesteinTransform(complexArray);
  }

  private powerOfTwoTransform(complexArray: Float32Array): void {
    const reverseTable = this.reverseTable!;
    const sinTable = this.sinTable!;
    const cosTable = this.cosTable!;

    for (let i = 0; i < this.fftSize; i++) {
      const reversedIndex = reverseTable[i];
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
          const wReal = cosTable[angleIndex];
          const wImag = sinTable[angleIndex];

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

  private bluesteinTransform(complexArray: Float32Array): void {
    const convolutionSize = this.bluesteinSize!;
    const chirpTable = this.bluesteinChirpTable!;
    const kernelFft = this.bluesteinKernelFft!;
    const bluesteinFft = this.bluesteinFft!;
    const work = new Float32Array(convolutionSize * 2);

    for (let i = 0; i < this.fftSize; i++) {
      const inputReal = complexArray[i * 2];
      const inputImag = complexArray[i * 2 + 1];
      const chirpReal = chirpTable[i * 2];
      const chirpImag = chirpTable[i * 2 + 1];

      work[i * 2] = inputReal * chirpReal + inputImag * chirpImag;
      work[i * 2 + 1] = inputImag * chirpReal - inputReal * chirpImag;
    }

    bluesteinFft.transform(work);
    for (let i = 0; i < convolutionSize; i++) {
      const workReal = work[i * 2];
      const workImag = work[i * 2 + 1];
      const kernelReal = kernelFft[i * 2];
      const kernelImag = kernelFft[i * 2 + 1];

      work[i * 2] = workReal * kernelReal - workImag * kernelImag;
      work[i * 2 + 1] = workReal * kernelImag + workImag * kernelReal;
    }

    inverseTransform(work, bluesteinFft);
    for (let i = 0; i < this.fftSize; i++) {
      const workReal = work[i * 2];
      const workImag = work[i * 2 + 1];
      const chirpReal = chirpTable[i * 2];
      const chirpImag = chirpTable[i * 2 + 1];

      complexArray[i * 2] = workReal * chirpReal + workImag * chirpImag;
      complexArray[i * 2 + 1] = workImag * chirpReal - workReal * chirpImag;
    }
  }
}

function nextPowerOfTwo(value: number): number {
  let power = 1;
  while (power < value) {
    power <<= 1;
  }
  return power;
}

function inverseTransform(complexArray: Float32Array, fft: FFT): void {
  for (let i = 0; i < fft.fftSize; i++) {
    complexArray[i * 2 + 1] = -complexArray[i * 2 + 1];
  }

  fft.transform(complexArray);

  for (let i = 0; i < fft.fftSize; i++) {
    complexArray[i * 2] /= fft.fftSize;
    complexArray[i * 2 + 1] = -complexArray[i * 2 + 1] / fft.fftSize;
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
    this.window = this.generateHannWindow();
    this.frame = new Float32Array(this.fftSize);
    this.complexFrame = new Float32Array(this.fftSize * 2);
  }

  private generateHannWindow(): Float32Array {
    const window = new Float32Array(this.fftSize);
    for (let i = 0; i < this.fftSize; i++) {
      window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / this.fftSize));
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
