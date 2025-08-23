import { useEffect, useRef } from "react";
import { BUFFER_DURATION_S } from "./const";
import { Box } from "@mantine/core";

type ScopeProps = {
  stream: MediaStream;
};

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function buildColorLUT(): Array<[number, number, number]> {
  const lut: Array<[number, number, number]> = new Array(256);
  for (let v = 0; v < 256; v++) {
    const t = v / 255; // 0..1
    const hue = (220 * (1 - t)) / 360;
    const sat = 1.0;
    const light = 0.15 + 0.75 * t;
    lut[v] = hslToRgb(hue, sat, light);
  }
  return lut;
}

export const Scope = ({ stream }: ScopeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const nodesRef = useRef<{
    audioCtx: AudioContext;
    source: MediaStreamAudioSourceNode;
    analyser: AnalyserNode;
  } | null>(null);

  const renderStateRef = useRef({
    lastTime: performance.now(),
    pixelAccumulator: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const audioCtx: AudioContext = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2 ** 12;
    analyser.smoothingTimeConstant = 0;
    analyser.minDecibels = -70;
    analyser.maxDecibels = -10;
    source.connect(analyser);

    nodesRef.current = { audioCtx, source, analyser };

    const freqBins = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(freqBins);
    const colorLUT = buildColorLUT();

    let column: ImageData | null = null;
    let running = true;
    renderStateRef.current.lastTime = performance.now();
    renderStateRef.current.pixelAccumulator = 0;

    const render = async () => {
      if (!running) return;

      const currentCanvas = canvasRef.current;
      const currentNodes = nodesRef.current;
      if (!currentCanvas || !currentNodes) return;

      const { audioCtx, analyser } = currentNodes;
      const ctx2d = currentCanvas.getContext("2d");
      if (!ctx2d) return;

      const now = performance.now();
      const dt = (now - renderStateRef.current.lastTime) / 1000;
      renderStateRef.current.lastTime = now;

      const durationSeconds = BUFFER_DURATION_S;
      const pxPerSec = currentCanvas.width / durationSeconds;
      renderStateRef.current.pixelAccumulator += dt * pxPerSec;

      let step = Math.floor(renderStateRef.current.pixelAccumulator);
      if (step <= 0) {
        rafRef.current = requestAnimationFrame(() => void render());
        return;
      }
      renderStateRef.current.pixelAccumulator -= step;
      if (step > currentCanvas.width) step = currentCanvas.width;

      analyser.getByteFrequencyData(dataArray);

      ctx2d.drawImage(
        currentCanvas,
        0,
        0,
        currentCanvas.width,
        currentCanvas.height,
        -step,
        0,
        currentCanvas.width,
        currentCanvas.height
      );

      if (!column || column.height !== currentCanvas.height) {
        column = ctx2d.createImageData(1, currentCanvas.height);
      }
      const buf = column.data;
      const nyquist = audioCtx.sampleRate / 2;
      const minFreqHz = 200;
      const maxFreqHz = 1400;
      const minBin = Math.floor((minFreqHz / nyquist) * (freqBins - 1));
      const maxBin = Math.min(
        freqBins - 1,
        Math.floor((Math.min(maxFreqHz, nyquist) / nyquist) * (freqBins - 1))
      );

      for (let y = 0; y < currentCanvas.height; y++) {
        const invY = currentCanvas.height - 1 - y;
        const binRange = maxBin - minBin;
        const idx =
          minBin +
          Math.floor((invY / Math.max(1, currentCanvas.height - 1)) * binRange);
        const v = dataArray[idx];
        const [r, g, b] = colorLUT[v];
        const p = y * 4;
        buf[p] = r;
        buf[p + 1] = g;
        buf[p + 2] = b;
        buf[p + 3] = 255;
      }

      for (let i = 0; i < step; i++) {
        ctx2d.putImageData(column, currentCanvas.width - step + i, 0);
      }

      rafRef.current = requestAnimationFrame(() => void render());
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries.length) return;
      const { width, height } = entries[0].contentRect;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const ctx2d = canvas.getContext("2d");
      if (!ctx2d) return;
      ctx2d.fillStyle = "#000";
      ctx2d.fillRect(0, 0, canvas.width, canvas.height);

      renderStateRef.current.pixelAccumulator = 0;
    });
    resizeObserver.observe(canvas);

    rafRef.current = requestAnimationFrame(() => void render());

    return () => {
      running = false;
      resizeObserver.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;

      source.disconnect();
      analyser.disconnect();

      audioCtx.close().catch(() => undefined);
      nodesRef.current = null;
    };
  }, [stream]);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      style={{
        display: "block",
        background: "var(--mantine-color-black)",
        width: "100%",
        height: "256px",
        borderRadius: "4px",
      }}
    />
  );
};
