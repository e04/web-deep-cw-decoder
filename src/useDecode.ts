import type { InferenceSession, Tensor } from "onnxruntime-web";
import { STFT } from "./stft";
import { useEffect, useState, useRef } from "react";
import {
  BUFFER_SAMPLES,
  FFT_LENGTH,
  HOP_LENGTH,
  INFERENCE_INTERVAL_S,
  SAMPLE_RATE,
  NumToChar,
  ABBREVIATION,
} from "./const";
// @ts-ignore
import model from "./model.onnx";

let ortSession: InferenceSession | null = null;
let audioContext: AudioContext | null = null;
let scriptProcessor: ScriptProcessorNode | null = null;

const audioBuffer: Float32Array = new Float32Array(BUFFER_SAMPLES);

const loadModel = async () => {
  if (ortSession) return;
  ortSession = await ort.InferenceSession.create(model, {
    executionProviders: ["wasm"],
  });
};

function audioCallback(event: AudioProcessingEvent) {
  const chunk = event.inputBuffer.getChannelData(0);
  const chunkLen = chunk.length;

  audioBuffer.copyWithin(0, chunkLen);
  audioBuffer.set(chunk, BUFFER_SAMPLES - chunkLen);
}

function applyBandpassFilter(
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

const initAudioProcessing = (stream: MediaStream, gain: number) => {
  audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
  const source = audioContext.createMediaStreamSource(stream);
  const gainNode = audioContext.createGain();
  gainNode.gain.value = Math.pow(10, gain / 20);
  source.connect(gainNode);
  scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
  scriptProcessor.onaudioprocess = audioCallback;
  gainNode.connect(scriptProcessor);
  scriptProcessor.connect(audioContext.destination);
};

function audioToSpectrogram(
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

  const magnitudeSpectrogram = complexSpectrogram.map((complexFrame) => {
    const magnitudes = new Float32Array(FFT_LENGTH / 2 + 1);

    for (let j = 0; j < magnitudes.length; j++) {
      const real = complexFrame[j * 2];
      const imag = complexFrame[j * 2 + 1];
      magnitudes[j] = Math.sqrt(real * real + imag * imag);
    }
    return magnitudes;
  });

  return magnitudeSpectrogram;
}

async function runInference(
  setCurrentText: (text: string) => void,
  filterFreq: number | null,
  filterWidth: number
) {
  if (!ortSession || !audioContext) return;
  const spectrogram = audioToSpectrogram(audioBuffer, filterFreq, filterWidth);
  const timeSteps = spectrogram.length;
  if (timeSteps === 0) return;
  const freqBins = spectrogram[0].length;

  const flattenedSpectrogram = new Float32Array(timeSteps * freqBins);
  for (let t = 0; t < timeSteps; t++) {
    flattenedSpectrogram.set(spectrogram[t], t * freqBins);
  }

  const dims = [1, timeSteps, freqBins, 1];
  const inputTensor = new ort.Tensor("float32", flattenedSpectrogram, dims);

  const inputName = ortSession.inputNames[0];
  const feeds = { [inputName]: inputTensor };

  const results = await ortSession.run(feeds);
  const outputTensor = results[ortSession.outputNames[0]];

  const decodedTextList = decodePredictions(
    outputTensor.data,
    outputTensor.dims
  );
  const currentText = decodedTextList.length > 0 ? decodedTextList[0] : "";

  setCurrentText(currentText);
}

function decodePredictions(pred: Tensor["data"], predShape: Tensor["dims"]) {
  const [batchSize, timeSteps, numClasses] = predShape;
  const outputText = [];

  for (let i = 0; i < batchSize; i++) {
    const predIndices = [];
    for (let t = 0; t < timeSteps; t++) {
      let maxProb = -Infinity;
      let maxIndex = 0;
      const offset = i * timeSteps * numClasses + t * numClasses;
      for (let c = 0; c < numClasses; c++) {
        // @ts-ignore
        if (pred[offset + c] > maxProb) {
          // @ts-ignore
          maxProb = pred[offset + c];
          maxIndex = c;
        }
      }
      predIndices.push(maxIndex);
    }

    const resText = predIndices.map((c) => NumToChar[c]).join("");

    const replaceConsecutiveChars = (str: string): string => {
      const regex = /(\S)\1+/g;
      return str.replace(regex, (match, p1) => {
        return p1 + " ".repeat(match.length - 1);
      });
    };

    const convertAbbreviations = (str: string): string => {
      let result = str;
      Object.entries(ABBREVIATION).forEach(([abbrev, expansion]) => {
        const regex = new RegExp(abbrev, "g");
        result = result.replace(regex, expansion);
      });
      return result;
    };

    const processedText = convertAbbreviations(
      replaceConsecutiveChars(resText)
    );
    outputText.push(processedText);
  }
  return outputText;
}

export const useDecode = ({
  filterFreq,
  filterWidth,
  gain,
  stream,
}: {
  filterFreq: number | null;
  filterWidth: number;
  gain: number;
  stream: MediaStream | null;
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(" ");
  const [isDecoding, setIsDecoding] = useState(false);

  const filterParamsRef = useRef({ filterFreq, filterWidth });
  const inferenceIntervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    (async () => {
      await loadModel();
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    filterParamsRef.current = { filterFreq, filterWidth };
  }, [filterFreq, filterWidth]);

  useEffect(() => {
    if (!stream) {
      return;
    }
    if (!loaded) {
      return;
    }

    initAudioProcessing(stream, gain);
    inferenceIntervalId.current = setInterval(() => {
      const { filterFreq, filterWidth } = filterParamsRef.current;
      runInference(setCurrentText, filterFreq, filterWidth);
    }, INFERENCE_INTERVAL_S * 1000);

    setIsDecoding(true);

    return () => {
      setIsDecoding(false);

      if (inferenceIntervalId.current) {
        clearInterval(inferenceIntervalId.current);
      }
      if (audioContext) {
        if (scriptProcessor) {
          scriptProcessor.disconnect();
          scriptProcessor = null;
        }
        audioContext.close();
      }
    };
  }, [stream, gain, loaded]);

  return { loaded, currentText, isDecoding };
};
