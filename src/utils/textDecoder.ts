import type { Tensor } from "onnxruntime-web";
import { ENGLISH_CONFIG, JAPANESE_CONFIG } from "../const";

type DecoderConfig = typeof ENGLISH_CONFIG | typeof JAPANESE_CONFIG;

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

export function decodePredictions(
  pred: Tensor["data"],
  predShape: Tensor["dims"],
  lang: "en" | "ja" = "en"
) : string[] {
  const [batchSize, timeSteps, numClasses] = predShape;
  const outputTexts: string[] = [];
  
  const config = getDecoderConfig(lang);
  const vocabulary = config.VOCABULARY;

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

    const resText =
      "BLANK_INDEX" in config
        ? decodeCtcForDisplay(predIndices, vocabulary, config.BLANK_INDEX)
        : replaceConsecutiveChars(predIndices.map((c) => vocabulary[c] || "").join(""));

    outputTexts.push(resText);
  }

  return outputTexts;
}
