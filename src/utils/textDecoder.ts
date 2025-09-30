import type { Tensor } from "onnxruntime-web";
import { NumToChar, ABBREVIATION } from "../const";

function replaceConsecutiveChars(str: string): string {
  const regex = /(\S)\1+/g;
  return str.replace(regex, (match, p1) => {
    return p1 + " ".repeat(match.length - 1);
  });
}

function convertAbbreviations(str: string): string {
  let result = str;
  Object.entries(ABBREVIATION).forEach(([abbrev, expansion]) => {
    const regex = new RegExp(abbrev, "g");
    result = result.replace(regex, expansion);
  });
  return result;
}

export function decodePredictions(
  pred: Tensor["data"],
  predShape: Tensor["dims"]
): string[] {
  const [batchSize, timeSteps, numClasses] = predShape;
  const outputText: string[] = [];

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

    const resText = predIndices.map((c) => NumToChar[c]).join("");

    const processedText = convertAbbreviations(
      replaceConsecutiveChars(resText)
    );

    outputText.push(processedText);
  }

  return outputText;
}
