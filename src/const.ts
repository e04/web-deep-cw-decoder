const VOCABULARY = [
  "[UNK]",
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
  "",
  "",
  "",
  "",
  "",
  "",
  " ",
];

export const ABBREVIATION = {
  "": "AR",
  "": "BT",
  "": "HH",
  "": "KN",
  "": "SK",
  "": "BK",
};

export const NumToChar = Object.fromEntries(
  VOCABULARY.map((char, i) => [i, char])
);

export const FFT_LENGTH = 256;
export const HOP_LENGTH = 64;
export const SAMPLE_RATE = 3200;
export const BUFFER_DURATION_S = 12;
export const INFERENCE_INTERVAL_S = 0.1;
export const BUFFER_SAMPLES = BUFFER_DURATION_S * SAMPLE_RATE;
