export const ENGLISH_CONFIG = {
  MODEL_FILE: "model_en.onnx",
  VOCABULARY: [
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "?",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  BLANK_INDEX: 38,
  ABBREVIATION: {},
};

export const JAPANESE_CONFIG = {
  MODEL_FILE: "model_ja.onnx",
  VOCABULARY: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "?",
    "、",
    "」",
    "゛",
    "゜",
    "ア",
    "イ",
    "ウ",
    "エ",
    "オ",
    "カ",
    "キ",
    "ク",
    "ケ",
    "コ",
    "サ",
    "シ",
    "ス",
    "セ",
    "ソ",
    "タ",
    "チ",
    "ツ",
    "テ",
    "ト",
    "ナ",
    "ニ",
    "ヌ",
    "ネ",
    "ノ",
    "ハ",
    "ヒ",
    "フ",
    "ヘ",
    "ホ",
    "マ",
    "ミ",
    "ム",
    "メ",
    "モ",
    "ヤ",
    "ユ",
    "ヨ",
    "ラ",
    "リ",
    "ル",
    "レ",
    "ロ",
    "ワ",
    "ヰ",
    "ヱ",
    "ヲ",
    "ン",
    "ー",
    "（", 
    "）"
  ],
  BLANK_INDEX: 66,
  ABBREVIATION: {
  },
};

export const NumToChar = Object.fromEntries(
  ENGLISH_CONFIG.VOCABULARY.map((char, i) => [i, char]),
);

export const FFT_LENGTH = 768;
export const HOP_LENGTH = 192;
export const SAMPLE_RATE = 9600;
export const AUDIO_CHUNK_SAMPLES = 2048;
export const DECODE_WINDOW_OPTIONS = [6, 12, 18, 30] as const;
export type DecodeWindowSeconds = (typeof DECODE_WINDOW_OPTIONS)[number];
export const DEFAULT_DECODE_WINDOW_S: DecodeWindowSeconds = 12;
export const getBufferSamples = (durationSeconds: number) =>
  durationSeconds * SAMPLE_RATE;

export const MIN_FREQ_HZ = 100;
export const MAX_FREQ_HZ = 1500;

export const DECODABLE_MIN_FREQ_HZ = 400;
export const DECODABLE_MAX_FREQ_HZ = 1200;
export const DEFAULT_DECODE_BANDWIDTH_HZ =
  DECODABLE_MAX_FREQ_HZ - DECODABLE_MIN_FREQ_HZ;

export const PILEUP_FILTER_WIDTH_HZ = 50;
export const PILEUP_WINDOW_S = 8;
export const PILEUP_MIN_FREQ_HZ = 100;
export const PILEUP_MAX_FREQ_HZ = 2000;
export const PILEUP_MAX_PEAKS = 6;
