# DeepCW

A real-time Morse code (CW) decoder powered by a neural network model.

Launch DeepCW: https://cw.e04.workers.dev/

<img width="256" height="256" src="https://github.com/user-attachments/assets/780f899e-a59b-41b8-b785-1c6686f6da41" />

## Features

- **Real-time Morse code decoding** using deep learning
- **Robust decoding** for weak signals, QSB, and noisy conditions
- **Multi-channel decoding** for handling multiple CW signals
- **Audio pass-through** with deep-learning-based noise reduction
- **Cross-platform support** for Windows, macOS, Android, and iOS

<img width="800" src="https://github.com/user-attachments/assets/3207c5c0-7613-4448-a42b-aac08b8fd030" />

https://github.com/user-attachments/assets/ab01b136-e23f-42ae-a7ce-93f1839e5d48

## Benchmark

- Results are from balanced mode.
- SNR is measured over a 2500 Hz bandwidth.
- Error rate is reported as CER (Character Error Rate), defined as the percentage of inserted, deleted, or substituted characters relative to the reference text.

It achieves 0.00% error from 0 to -4 dB SNR at all tested speeds, and remains nearly error-free at -6 dB.

Even under weak-signal conditions, performance degrades gracefully: errors stay below 1.5% at -8 dB and below 8% at -10 dB across the full speed range.

<img width="2000" height="1200" alt="cer_heatmap" src="https://github.com/user-attachments/assets/2c4d82e6-9c06-44e6-81e1-0f4c6a7b498a" />

Audio sample:

https://github.com/user-attachments/assets/4be72fa7-011a-4e06-a2dd-10ba4e60f8c4

### Comparison with Other Decoders

To provide context for DeepCW’s performance, we compared it with several established CW decoding tools: [CW Skimmer,](https://www.dxatlas.com/CwSkimmer/) [fldigi,](https://www.w1hkj.org/) and [ggmorse](https://github.com/ggerganov/ggmorse).

These projects have made valuable contributions to the amateur-radio and Morse-code software ecosystem. The comparison below is not intended as a general ranking of these applications; it reflects only the specific test clips, settings, and evaluation method used in this README.　

All tested software was the latest available version as of June 3, 2026.

To evaluate performance under real-world conditions, we compared DeepCW with other decoders using publicly available short CW QSO videos from YouTube.


#### Video 1

Source: https://www.youtube.com/shorts/UBlxpe5gvv0

| Decoder | Transcription |
| --- | --- |
| Reference | <code>AI5DD AI5DD 56N CO BK BK GA UR 55N 55N OK OK 73 AE0Q DE AI5DD 44 EE R 44 EE EE</code> |
| DeepCW | <code>AI5DD AI5DD 56N CO BK BK GA UR 55N55N OK OK 73AE0QDE AI5DD 44EE44EE E</code> |
| CW Skimmer | <code>UI5DDM EU AI5DD 56N CO BK BK GA UR 55N 55N TTTK MTKE 73 AE0Q DE AI5D D44EE JI44EE EE</code> |
| fldigi | <code>I 5DD EI5DD 56N CO HK GA &#42; 55N 55N OK OK 73 AE0Q DE A I 5DD 44EE N</code> |
| ggmorse | <code>AI5DD AI5DD 56N CO XM TEEE BKGA755N55N OK OK 73AE0E TTTTTTKDEAIEAI5DD44EE R 44EE EE</code> |

<details>
<summary>Screenshots</summary>

<img width="400" alt="Sample1 CW Skimmer result" src="https://github.com/user-attachments/assets/d0becb14-d600-4111-80c7-29edda87b2d6" />

<img width="400" alt="Sample1 fldigi result" src="https://github.com/user-attachments/assets/97e2bcec-4293-4c61-8a1a-1e954a2fe4da" />

<img width="200" alt="Sample1 ggmorse result" src="https://github.com/user-attachments/assets/dae24c85-0716-4fec-93e8-28deea06f499" />

<img width="400" alt="Sample1 DeepCW result" src="https://github.com/user-attachments/assets/eb56de97-138c-4f01-8ab5-55c290c73423" />

</details>

#### Video 2

Source: https://www.youtube.com/shorts/9AhkEDs2Sko

| Decoder | Transcription |
| --- | --- |
| Reference | <code>D DE JO2QOT JO2QOT 5NN CA 5NN 100 TU JO2QOT TU K6XX</code> |
| DeepCW | <code>D DE J02Q O T J02QOT 5NN CA 5 NN 100 TU J02QOT TU K6XX</code> |
| CW Skimmer | <code>5NN 100 TU EM</code><br><code>JO2Q0T 5NN CA EE JO2Q0T TU K6XX</code> |
| fldigi | <code>&#42;EEHSSNJF J02QOT 5NN CA E&#42;S ÅÅ O J02QOT T K6XX</code> |
| ggmorse | <code>U JO2QOT 5NN CA SEGE ?O2QOT TU K6XX</code> |

<details>
<summary>Screenshots</summary>

<img width="400" alt="Sample2_cwskimmer" src="https://github.com/user-attachments/assets/27d760f8-ca69-4b50-8180-437a41a102f9" />

<img width="400" alt="Sample2_fldigi" src="https://github.com/user-attachments/assets/97208186-83b2-4d5c-b97e-5ffb74b1edd3" />

<img width="200" alt="Sample2_ggmorse" src="https://github.com/user-attachments/assets/cb7af155-8b6c-4888-829e-2ed02f56da3a" />

<img width="400" alt="Sample2_deepcw" src="https://github.com/user-attachments/assets/8be2946b-893c-4725-8502-a14f05dc2faa" />

</details>

#### Video 3

Source: https://www.youtube.com/shorts/9jgZ94TzRys

| Decoder | Transcription |
| --- | --- |
| Reference | <code>? WD4DAN WD4DAN GE ES FB UR 57N 57N CO BK BK TU GE UR 56N 56N GA GA 73 BK BK TU GA 73 DE W0ABE TU EE /</code> |
| DeepCW | <code>? WD4DAN WD4DAN GE ESFB UR 57N 57N CO BK 4KTUG E UR 56N 56N GA GA 73BK BKTUGA 73DE W0ABE TUEE EE /1</code> |
| CW Skimmer | <code>? WD4DAN GE ES FB UR 57N 57N CO BKE BK TU GA 73 DE W0ABE TU EE N</code><br><code>WD4DANWR 54TUGEEUR 56NE 56NE GAEG AE73BKR EE</code> |
| fldigi | <code>&#42;O&#42; DANTD4DAN 9E T S FB TR &#42;7N E7N ;0 A TUGE &#42; N66N GA RA73TU GA :3DE W0ABE UUEE ET "</code> |
| ggmorse | <code>WD4DAN E WD4DAN GE E SFB EEUR E57N 57N CO ? E ?TUGE ?56NEEE TEEEE TE IEEEE TESN GA GA 73? E?TUGA 73DE W0ABE TUEE /E2S?TTTT</code> |

<details>
<summary>Screenshots</summary>

<img width="400" alt="Sample3_cwskimmer" src="https://github.com/user-attachments/assets/4a1b24c5-8225-4ff0-b489-ac65144a9fab" />

<img width="400" alt="Sample3_fldigi" src="https://github.com/user-attachments/assets/75a9fc82-cbd8-41fe-b24c-adb73f5248a7" />

<img width="200" alt="Sample3_ggmorse" src="https://github.com/user-attachments/assets/ee93b38d-0b1e-46e2-ab81-ccb6249c17fa" />

<img width="400" alt="Sample3_deepcw" src="https://github.com/user-attachments/assets/436fc8bb-6b8c-4590-8599-7cfb20f9384e" />

</details>

## Noise Reduction

DeepCW includes a real-time, deep-learning-based noise reduction feature designed specifically for CW signals.

In addition to decoding Morse code, DeepCW can pass the audio through a neural noise reduction model, making noisy CW signals easier to monitor by ear.

Audio samples:

https://github.com/user-attachments/assets/3d89fd8e-2f9e-4d25-930c-3112c3dea1d2

https://github.com/user-attachments/assets/8bf33b0b-e997-4acb-ade8-5bff7c4c3a20



