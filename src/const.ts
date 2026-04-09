export const ENGLISH_CONFIG = {
  MODEL_FILE: "models/model_en.onnx",
  VOCABULARY: [
    ",",
    ".",
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
    " "
  ],
  BLANK_INDEX: 41,
};

export const ENGLISH_NARROW_MODEL_FILE = "models/model_en_narrow.onnx";
export const DETECT_CW_MODEL_FILE = "models/detect_cw_model.onnx";

export const JAPANESE_CONFIG = {
  MODEL_FILE: "models/model_ja.onnx",
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
    "）",
    " "
  ],
  BLANK_INDEX: 67,
};

export const NumToChar = Object.fromEntries(
  ENGLISH_CONFIG.VOCABULARY.map((char, i) => [i, char]),
);

export const FFT_LENGTH = 768;
export const HOP_LENGTH = 192;
export const SAMPLE_RATE = 9600;
export const BIN_RESOLUTION = SAMPLE_RATE / FFT_LENGTH;
export const AUDIO_CHUNK_SAMPLES = 2048;
export const WIDE_LAYOUT_WIDTH_PX = 1244;
export const DEFAULT_CONTAINER_WIDTH_PX = 800;
export const DECODE_WINDOW_OPTIONS = [6, 12, 18, 30] as const;
export type DecodeWindowSeconds = (typeof DECODE_WINDOW_OPTIONS)[number];
export const DEFAULT_DECODE_WINDOW_S: DecodeWindowSeconds = 12;
export const getBufferSamples = (durationSeconds: number) =>
  durationSeconds * SAMPLE_RATE;

export const MIN_FREQ_HZ = 100;
export const MAX_FREQ_HZ = 1500;

export const DECODABLE_MIN_FREQ_HZ = 400;
export const DECODABLE_MAX_FREQ_HZ = 1200;
export const DEFAULT_DECODE_CENTER_FREQ_HZ = Math.round(
  (DECODABLE_MIN_FREQ_HZ + DECODABLE_MAX_FREQ_HZ) / 2,
);
export const DEFAULT_DECODE_BANDWIDTH_HZ =
  DECODABLE_MAX_FREQ_HZ - DECODABLE_MIN_FREQ_HZ;

export const NARROW_SHIFT_BINS = 5;
// A 5-bin narrow slice spans four inter-bin intervals between outer bin centers.
export const PILEUP_FILTER_WIDTH_HZ =
  BIN_RESOLUTION * (NARROW_SHIFT_BINS - 1);
export const PILEUP_WINDOW_S = 8;
export const PILEUP_MIN_FREQ_HZ = 100;
export const PILEUP_MAX_FREQ_HZ = 2000;
export const PILEUP_MAX_PEAKS = 5;
export const PILEUP_MATCH_HZ = BIN_RESOLUTION * 1.2;
export const PILEUP_LOCK_SNR_THRESHOLD_DB = -10;
export const PILEUP_RELEASE_SNR_THRESHOLD_DB = -10;
export const PILEUP_TEXT_HOLD_MS = 1500;
