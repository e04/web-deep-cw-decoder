import type { Tensor } from "onnxruntime-web";
import { ENGLISH_CONFIG, JAPANESE_CONFIG } from "../const";

type DecoderConfig = typeof ENGLISH_CONFIG | typeof JAPANESE_CONFIG;
export type WordSpaceSpan = {
  startFrame: number;
  endFrame: number;
};
export type CharacterSpan = {
  char: string;
  startFrame: number;
  endFrame: number;
};

export type DecodedPredictionResult = {
  displayText: string;
  plainText: string;
  wordSpaceSpans: WordSpaceSpan[];
  characterSpans: CharacterSpan[];
};

function replaceConsecutiveChars(str: string): string {
  const regex = /(\S)\1+/g;
  return str.replace(regex, (match, p1) => {
    return p1 + " ".repeat(match.length - 1);
  });
}

function decodeCtcForDisplay(
  predIndices: number[],
  vocabulary: string[],
  blankIndex: number,
): string {
  const decodedChars: string[] = [];
  let previousIndex: number | null = null;

  for (const index of predIndices) {
    if (index === blankIndex) {
      decodedChars.push(" ");
      previousIndex = null;
      continue;
    }

    if (index === previousIndex) {
      decodedChars.push(" ");
      continue;
    }

    previousIndex = index;
    decodedChars.push(vocabulary[index] ?? " ");
  }

  return decodedChars.join("");
}

function getDecoderConfig(lang: "en" | "ja"): DecoderConfig {
  return lang === "ja" ? JAPANESE_CONFIG : ENGLISH_CONFIG;
}

function getPredictionIndices(
  pred: Tensor["data"],
  predShape: Tensor["dims"],
): number[][] {
  const [batchSize, timeSteps, numClasses] = predShape;
  const outputIndices: number[][] = [];

  for (let i = 0; i < batchSize; i++) {
    const predIndices: number[] = [];
    for (let t = 0; t < timeSteps; t++) {
      let maxProb = -Infinity;
      let maxIndex = 0;
      const offset = i * timeSteps * numClasses + t * numClasses;

      for (let c = 0; c < numClasses; c++) {
        // @ts-expect-error - Tensor data type is not properly typed
        if (pred[offset + c] > maxProb) {
          // @ts-expect-error - Tensor data type is not properly typed
          maxProb = pred[offset + c];
          maxIndex = c;
        }
      }
      predIndices.push(maxIndex);
    }
    outputIndices.push(predIndices);
  }

  return outputIndices;
}

function decodeCtcPlain(
  predIndices: number[],
  vocabulary: string[],
  blankIndex: number,
): string {
  const decodedChars: string[] = [];
  let previousIndex: number | null = null;

  for (const index of predIndices) {
    if (index === blankIndex) {
      previousIndex = null;
      continue;
    }

    if (index === previousIndex) {
      continue;
    }

    previousIndex = index;
    decodedChars.push(vocabulary[index] ?? "");
  }

  return decodedChars.join("");
}

function getWordSpaceSpans(
  predIndices: number[],
  vocabulary: string[],
): WordSpaceSpan[] {
  const spaceIndex = vocabulary.indexOf(" ");
  if (spaceIndex < 0) {
    return [];
  }

  const spans: WordSpaceSpan[] = [];
  let currentStart = -1;

  predIndices.forEach((index, frameIndex) => {
    if (index === spaceIndex) {
      if (currentStart < 0) {
        currentStart = frameIndex;
      }
      return;
    }

    if (currentStart >= 0) {
      spans.push({ startFrame: currentStart, endFrame: frameIndex - 1 });
      currentStart = -1;
    }
  });

  if (currentStart >= 0) {
    spans.push({
      startFrame: currentStart,
      endFrame: predIndices.length - 1,
    });
  }

  return spans;
}

function getCharacterSpans(
  predIndices: number[],
  vocabulary: string[],
  blankIndex: number,
): CharacterSpan[] {
  const spans: CharacterSpan[] = [];
  let previousIndex: number | null = null;
  let activeSpanIndex = -1;

  predIndices.forEach((index, frameIndex) => {
    if (index === blankIndex) {
      previousIndex = null;
      activeSpanIndex = -1;
      return;
    }

    if (index === previousIndex) {
      if (activeSpanIndex >= 0) {
        spans[activeSpanIndex].endFrame = frameIndex;
      }
      return;
    }

    previousIndex = index;
    const char = vocabulary[index] ?? "";
    if (!char) {
      activeSpanIndex = -1;
      return;
    }

    spans.push({
      char,
      startFrame: frameIndex,
      endFrame: frameIndex,
    });
    activeSpanIndex = spans.length - 1;
  });

  return spans;
}

export function decodePredictionsDetailed(
  pred: Tensor["data"],
  predShape: Tensor["dims"],
  lang: "en" | "ja" = "en",
): DecodedPredictionResult[] {
  const outputResults: DecodedPredictionResult[] = [];

  const config = getDecoderConfig(lang);
  const vocabulary = config.VOCABULARY;
  const predictionIndices = getPredictionIndices(pred, predShape);

  for (const predIndices of predictionIndices) {
    const displayText =
      "BLANK_INDEX" in config
        ? decodeCtcForDisplay(predIndices, vocabulary, config.BLANK_INDEX)
        : replaceConsecutiveChars(
            predIndices.map((index) => vocabulary[index] ?? "").join(""),
          );

    const plainText =
      "BLANK_INDEX" in config
        ? decodeCtcPlain(predIndices, vocabulary, config.BLANK_INDEX)
        : predIndices.map((index) => vocabulary[index] ?? "").join("");

    outputResults.push({
      displayText,
      plainText,
      wordSpaceSpans: getWordSpaceSpans(predIndices, vocabulary),
      characterSpans:
        "BLANK_INDEX" in config
          ? getCharacterSpans(predIndices, vocabulary, config.BLANK_INDEX)
          : predIndices.map((index, frameIndex) => ({
              char: vocabulary[index] ?? "",
              startFrame: frameIndex,
              endFrame: frameIndex,
            })),
    });
  }

  return outputResults;
}

export function decodePredictions(
  pred: Tensor["data"],
  predShape: Tensor["dims"],
  lang: "en" | "ja" = "en",
): string[] {
  return decodePredictionsDetailed(pred, predShape, lang).map(
    (result) => result.displayText,
  );
}
