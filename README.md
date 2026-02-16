# web-deep-cw-decoder

<img width="825" height="514" alt="web-deep-cw" src="https://github.com/user-attachments/assets/a224be0a-a685-4dd8-be99-d0f376a43aa2" />

This is a web-based, real-time Morse code (CW) decoder powered by a CRNN (Convolutional Recurrent Neural Network) model with a CTC Loss function.

A key feature of this application is its client-side processing architecture. By leveraging ONNX Runtime Web, the entire decoding process runs completely within your browser.

The neural network model has been trained on an extensive dataset of 50 hours of programmatically generated Morse code audio, enabling it to achieve high accuracy across various sending speeds and conditions.


## Features

- **Real-time Morse code decoding** using machine learning
- **Audio visualization** with spectrum scope style display
- **Browser-based** - no installation required
- **Multiplatform** - supports Windows/mac/Android/iOS devices

## Usage

Open this page:

https://e04.github.io/web-deep-cw-decoder/dist/index.html
