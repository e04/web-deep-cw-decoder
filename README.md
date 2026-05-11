# DeepCW (web-deep-cw-decoder)

[DEMO](https://cw.e04.workers.dev/)

<img width="200" src="https://github.com/user-attachments/assets/bd9c696b-b8c7-4040-8502-7859729ec8d9" />

This is a web-based, real-time Morse code (CW) decoder powered by a neural network model.

A key feature of this application is its client-side processing architecture. By leveraging ONNX Runtime Web, the entire decoding process runs completely within your browser.

The neural network model has been trained on an dataset of programmatically generated audio.

<img width="500" src="https://github.com/user-attachments/assets/3207c5c0-7613-4448-a42b-aac08b8fd030" />

<img width="500" src="https://github.com/user-attachments/assets/793d2db6-f187-4bb5-8cbf-515dbb300b6c" />

## Features

- **Real-time Morse code decoding** using machine learning
- **Robust decoding** for weak signals, QSB, and noisy conditions
- **Multi-channel decoding** for handling multiple CW signals
- **Multilingual Morse code support** - currently only supports Japanese Wabun（和文） code
- **Audio pass-through** with noise reduction
- **Multiplatform** - supports Windows/mac/Android/iOS devices
