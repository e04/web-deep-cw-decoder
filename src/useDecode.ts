import ort, { InferenceSession } from "onnxruntime-web";
import { STFT } from "./stft";
import { useEffect, useState } from "react";
import {
  BUFFER_SAMPLES,
  FFT_LENGTH,
  HOP_LENGTH,
  INFERENCE_INTERVAL_S,
  SAMPLE_RATE,
  NumToChar,
  ABBREVIATION,
} from "./const";

let ortSession: InferenceSession | null = null;
let audioContext: AudioContext | null = null;
let scriptProcessor: ScriptProcessorNode | null = null;
let inferenceIntervalId: NodeJS.Timeout | null = null;

const audioBuffer: Float32Array = new Float32Array(BUFFER_SAMPLES);

const loadModel = async () => {
  ortSession = await ort.InferenceSession.create("model.onnx", {
    executionProviders: ["wasm"],
  });
};

function audioCallback(event: AudioProcessingEvent) {
  const chunk = event.inputBuffer.getChannelData(0);
  const chunkLen = chunk.length;

  audioBuffer.copyWithin(0, chunkLen);
  audioBuffer.set(chunk, BUFFER_SAMPLES - chunkLen);
}

const initDecode = async (
  stream: MediaStream,
  setCurrentText: (text: string) => void
) => {
  audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
  const source = audioContext.createMediaStreamSource(stream);
  scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
  scriptProcessor.onaudioprocess = audioCallback;
  source.connect(scriptProcessor);
  scriptProcessor.connect(audioContext.destination);
  inferenceIntervalId = setInterval(
    () => runInference(setCurrentText),
    INFERENCE_INTERVAL_S * 1000
  );
};

function audioToSpectrogram(audio: Float32Array): Float32Array[] {
  const stft = new STFT(FFT_LENGTH, HOP_LENGTH);

  const complexSpectrogram = stft.analyze(audio);

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

async function runInference(setCurrentText: (text: string) => void) {
  if (!ortSession || !audioContext) return;

  try {
    const spectrogram = audioToSpectrogram(audioBuffer);
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
  } catch (e) {
    console.error(e);
    clearInterval(inferenceIntervalId!);
    if (audioContext) audioContext.close();
    audioContext = null;
  }
}

function decodePredictions(
  pred: ort.Tensor["data"],
  predShape: ort.Tensor["dims"]
) {
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

export const useDecode = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    (async () => {
      await loadModel();
      setLoaded(true);
    })();
  }, []);

  const startDecoding = async (stream: MediaStream) => {
    if (!ortSession) {
      console.error("ONNX Runtime session is not initialized.");
      return;
    }

    await initDecode(stream, setCurrentText);
  };

  return { startDecoding, loaded, currentText };
};
