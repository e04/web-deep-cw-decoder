import { useEffect, useRef } from "react";
import { BUFFER_DURATION_S, MIN_FREQ_HZ, MAX_FREQ_HZ } from "../const";
import { buildColorLUT } from "../utils/colorUtils";

type UseSpectrogramRendererParams = {
  stream: MediaStream;
  gain: number;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

export const useSpectrogramRenderer = ({
  stream,
  gain,
  canvasRef,
}: UseSpectrogramRendererParams) => {
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
      const minBin = Math.floor((MIN_FREQ_HZ / nyquist) * (freqBins - 1));
      const maxBin = Math.min(
        freqBins - 1,
        Math.floor((Math.min(MAX_FREQ_HZ, nyquist) / nyquist) * (freqBins - 1))
      );

      for (let y = 0; y < currentCanvas.height; y++) {
        const invY = currentCanvas.height - 1 - y;
        const binRange = maxBin - minBin;
        const idx =
          minBin +
          Math.floor(
            (invY / Math.max(1, currentCanvas.height - 1)) * binRange
          );
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
  }, [stream, gain, canvasRef]);
};
