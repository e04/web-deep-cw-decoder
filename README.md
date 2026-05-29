# DeepCW

A real-time Morse code (CW) decoder powered by a neural network model.

[DEMO](https://cw.e04.workers.dev/)

<img width="256" height="256" src="https://github.com/user-attachments/assets/780f899e-a59b-41b8-b785-1c6686f6da41" />

### Features

- **Real-time Morse code decoding** using deep learning
- **Robust decoding** for weak signals, QSB, and noisy conditions
- **Multi-channel decoding** for handling multiple CW signals
- **Multilingual Morse code support** - currently only supports Latin and Japanese Wabun（和文） code
- **Audio pass-through** with noise reduction
- **Multiplatform** - supports Windows/mac/Android/iOS devices

<img width="800" src="https://github.com/user-attachments/assets/3207c5c0-7613-4448-a42b-aac08b8fd030" />

<img width="800" src="https://github.com/user-attachments/assets/793d2db6-f187-4bb5-8cbf-515dbb300b6c" />

### Benchmark

- Results are from balanced mode.
- Test audio was synthetically generated.
- SNR is measured over a 2500 Hz bandwidth.
- Error rate is reported as CER (Character Error Rate), defined as the percentage of inserted, deleted, or substituted characters relative to the reference text.

It achieves 0.00% error from 0 to -4 dB SNR at all tested speeds, and remains nearly error-free at -6 dB.

Even under weak-signal conditions, performance degrades gracefully: errors stay below 1.5% at -8 dB and below 8% at -10 dB across the full speed range.

<img width="2000" height="1200" alt="cer_heatmap" src="https://github.com/user-attachments/assets/2c4d82e6-9c06-44e6-81e1-0f4c6a7b498a" />

Audio sample:

https://github.com/user-attachments/assets/4be72fa7-011a-4e06-a2dd-10ba4e60f8c4

