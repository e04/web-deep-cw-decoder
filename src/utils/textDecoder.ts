import type { Tensor } from "onnxruntime-web";
import { ENGLISH_CONFIG, JAPANESE_CONFIG } from "../const";

export type TextSegment = {
  text: string;
  isAbbreviation: boolean;
};

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

function convertAbbreviationsWithSegments(
  str: string,
  lang: "en" | "ja" = "en"
): TextSegment[] {
  const config = getDecoderConfig(lang);
  const abbreviations = Object.entries(config.ABBREVIATION) as [string, string][];
  
  if (abbreviations.length === 0) {
    return [{ text: str, isAbbreviation: false }];
  }

  // Create a regex that matches any abbreviation
  const abbrevPattern = abbreviations.map(([abbrev]) => abbrev).join("|");
  const regex = new RegExp(`(${abbrevPattern})`, "g");
  
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      segments.push({
        text: str.slice(lastIndex, match.index),
        isAbbreviation: false,
      });
    }
    
    // Find the expansion for this abbreviation
    const matchedText = match[0];
    const abbrevEntry = abbreviations.find(([abbrev]) => abbrev === matchedText);
    const expansion = abbrevEntry ? abbrevEntry[1] : matchedText;
    
    segments.push({
      text: expansion,
      isAbbreviation: true,
    });
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text after last match
  if (lastIndex < str.length) {
    segments.push({
      text: str.slice(lastIndex),
      isAbbreviation: false,
    });
  }
  
  return segments.length > 0 ? segments : [{ text: str, isAbbreviation: false }];
}

export function decodePredictions(
  pred: Tensor["data"],
  predShape: Tensor["dims"],
  lang: "en" | "ja" = "en"
): TextSegment[][] {
  const [batchSize, timeSteps, numClasses] = predShape;
  const outputSegments: TextSegment[][] = [];
  
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

    const processedSegments = convertAbbreviationsWithSegments(
      resText,
      lang
    );

    outputSegments.push(processedSegments);
  }

  return outputSegments;
}
