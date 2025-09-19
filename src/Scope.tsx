import { useEffect, useRef } from "react";
import { BUFFER_DURATION_S } from "./const";
import { Box } from "@mantine/core";

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
    let t = v / 255;

    const gamma = 2.2;
    t = Math.pow(t, gamma);

    const hue = (220 * (1 - t)) / 360;
    const sat = 1.0;
    const light = 0.15 + 0.75 * t;
    lut[v] = hslToRgb(hue, sat, light);
  }
  return lut;
}

const minFreqHz = 100;
const maxFreqHz = 1500;

const decodableMinFreqHz = 400;
const decodableMaxFreqHz = 1200;

type ScopeProps = {
  stream: MediaStream;
  setFilterFreq: (freq: number | null) => void;
  filterFreq: number | null;
  filterWidth: number;
  gain: number;
};

export const Scope = ({
  stream,
  setFilterFreq,
  filterFreq,
  filterWidth,
  gain,
}: ScopeProps) => {
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
    if (nodesRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const audioCtx: AudioContext = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = Math.pow(10, gain / 20);
    source.connect(gainNode);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2 ** 12;
    analyser.smoothingTimeConstant = 0;
    analyser.minDecibels = -70;
    analyser.maxDecibels = -30;
    gainNode.connect(analyser);

    nodesRef.current = { audioCtx, source, analyser };

    const freqBins = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(freqBins);
    const colorLUT = buildColorLUT();

    let column: ImageData | null = null;
    renderStateRef.current.lastTime = performance.now();
    renderStateRef.current.pixelAccumulator = 0;

    const render = async () => {
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

      renderStateRef.current.pixelAccumulator = 0;
    });
    resizeObserver.observe(canvas);

    rafRef.current = requestAnimationFrame(() => void render());

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      resizeObserver.disconnect();
      if (nodesRef.current) {
        nodesRef.current.source.disconnect();
        nodesRef.current.analyser.disconnect();
        nodesRef.current.audioCtx.close();
        nodesRef.current = null;
      }
    };
  }, [stream, setFilterFreq, gain]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleCanvasClick = (event: MouseEvent) => {
      if (filterFreq) {
        setFilterFreq(null);
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const y = event.clientY - rect.top;
      const canvasHeight = rect.height;

      const invY = canvasHeight - y;
      const frequencyRange = maxFreqHz - minFreqHz;
      let frequency = minFreqHz + (invY / canvasHeight) * frequencyRange;
      
      const halfWidth = filterWidth / 2;
      if (frequency - halfWidth < decodableMinFreqHz) {
        frequency = decodableMinFreqHz + halfWidth;
      } else if (frequency + halfWidth > decodableMaxFreqHz) {
        frequency = decodableMaxFreqHz - halfWidth;
      }

      setFilterFreq(Math.ceil(frequency));
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [filterFreq, setFilterFreq, filterWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (!filterFreq) return;

      let current = filterFreq ?? 800;

      const step = 20;

      if (e.deltaY < 0) {
        current += step; 
      } else if (e.deltaY > 0) {
        current -= step;
      }

      const halfWidth = filterWidth / 2;
      if (current - halfWidth < decodableMinFreqHz) {
        current = decodableMinFreqHz + halfWidth;
      }
      if (current + halfWidth > decodableMaxFreqHz) {
        current = decodableMaxFreqHz - halfWidth;
      }

      setFilterFreq(Math.round(current));
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [filterFreq, setFilterFreq, filterWidth]);

  let bandTopPercent = 0;
  let bandHeightPercent = 0;

  const isEnableFilter = filterFreq != null;

  const _filterFreq = isEnableFilter ? filterFreq : 800;
  const _filterWidth = isEnableFilter ? filterWidth : 800;

  const range = maxFreqHz - minFreqHz;
  const half = _filterWidth / 2;
  const lower = Math.max(minFreqHz, _filterFreq - half);
  const upper = Math.min(maxFreqHz, _filterFreq + half);
  bandTopPercent = ((maxFreqHz - upper) / range) * 100;
  bandHeightPercent = ((upper - lower) / range) * 100;

  return (
    <Box style={{ position: "relative", width: "100%" }}>
      <Box
        component="canvas"
        ref={canvasRef}
        style={{
          display: "block",
          background: "var(--mantine-color-dark-9)",
          width: "100%",
          height: "256px",
          borderRadius: "4px",
          border: "1px solid var(--mantine-color-dark-4)",
        }}
      />
      <Box
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${bandTopPercent}%`,
          height: `${bandHeightPercent}%`,
          borderTop: "1px solid var(--mantine-color-red-7)",
          borderBottom: "1px solid var(--mantine-color-red-7)",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};
