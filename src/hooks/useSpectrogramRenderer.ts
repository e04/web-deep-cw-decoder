import { useEffect, useRef } from "react";
import { MIN_FREQ_HZ, MAX_FREQ_HZ } from "../const";
import { buildColorLUT } from "../utils/colorUtils";

const BACKGROUND_RENDER_INTERVAL_MS = 1000 / 30;

type UseSpectrogramRendererParams = {
  stream: MediaStream;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  decodeWindowSeconds: number;
  minFreqHz?: number;
  maxFreqHz?: number;
  brightness?: number;
  maxDevicePixelRatio?: number;
};

export const useSpectrogramRenderer = ({
  stream,
  canvasRef,
  decodeWindowSeconds,
  minFreqHz = MIN_FREQ_HZ,
  maxFreqHz = MAX_FREQ_HZ,
  brightness = 1,
  maxDevicePixelRatio,
}: UseSpectrogramRendererParams) => {
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const nodesRef = useRef<{
    audioCtx: AudioContext;
    source: MediaStreamAudioSourceNode;
    analyser: AnalyserNode;
  } | null>(null);

  const renderStateRef = useRef({
    lastTime: performance.now(),
    pixelAccumulator: 0,
  });
  const decodeWindowSecondsRef = useRef(decodeWindowSeconds);
  const freqRangeRef = useRef({ minFreqHz, maxFreqHz });
  const brightnessRef = useRef(brightness);
  const maxDevicePixelRatioRef = useRef(maxDevicePixelRatio);
  const colorLutRef = useRef(buildColorLUT(brightness));
  const renderResourcesRef = useRef<{
    rowToBin: Uint16Array | null;
    rowToBinHeight: number;
    rowToBinMinFreqHz: number;
    rowToBinMaxFreqHz: number;
    rowToBinNyquist: number;
    columnCanvas: HTMLCanvasElement | null;
    columnCtx: CanvasRenderingContext2D | null;
    columnImageData: ImageData | null;
  }>({
    rowToBin: null,
    rowToBinHeight: 0,
    rowToBinMinFreqHz: minFreqHz,
    rowToBinMaxFreqHz: maxFreqHz,
    rowToBinNyquist: 0,
    columnCanvas: null,
    columnCtx: null,
    columnImageData: null,
  });

  useEffect(() => {
    decodeWindowSecondsRef.current = decodeWindowSeconds;
    renderStateRef.current.lastTime = performance.now();
    renderStateRef.current.pixelAccumulator = 0;

    const canvas = canvasRef.current;
    const ctx2d = canvas?.getContext("2d", { alpha: false });
    if (canvas && ctx2d) {
      ctx2d.fillStyle = "rgb(12, 13, 16)";
      ctx2d.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [canvasRef, decodeWindowSeconds]);

  useEffect(() => {
    freqRangeRef.current = { minFreqHz, maxFreqHz };
  }, [minFreqHz, maxFreqHz]);

  useEffect(() => {
    brightnessRef.current = brightness;
    colorLutRef.current = buildColorLUT(brightness);
  }, [brightness]);

  useEffect(() => {
    maxDevicePixelRatioRef.current = maxDevicePixelRatio;
  }, [maxDevicePixelRatio]);

  useEffect(() => {
    if (nodesRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const audioCtx: AudioContext = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2 ** 12;
    analyser.smoothingTimeConstant = 0;
    analyser.minDecibels = -70;
    analyser.maxDecibels = -30;
    source.connect(analyser);

    nodesRef.current = { audioCtx, source, analyser };

    const freqBins = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(freqBins);
    const ctx2d = canvas.getContext("2d", { alpha: false });
    if (!ctx2d) {
      return;
    }
    ctx2d.imageSmoothingEnabled = false;

    renderStateRef.current.lastTime = performance.now();
    renderStateRef.current.pixelAccumulator = 0;

    const cancelScheduledRender = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const scheduleNextRender = (callback: () => void) => {
      let fired = false;

      const run = () => {
        if (fired) return;
        fired = true;
        cancelScheduledRender();
        callback();
      };

      rafRef.current = requestAnimationFrame(run);
      timeoutRef.current = window.setTimeout(
        run,
        BACKGROUND_RENDER_INTERVAL_MS,
      );
    };

    const invalidateRenderResources = () => {
      renderResourcesRef.current.rowToBin = null;
      renderResourcesRef.current.columnCanvas = null;
      renderResourcesRef.current.columnCtx = null;
      renderResourcesRef.current.columnImageData = null;
    };

    const ensureRowToBin = (
      canvasHeight: number,
      nyquist: number,
    ): Uint16Array => {
      const resources = renderResourcesRef.current;
      const { minFreqHz: minF, maxFreqHz: maxF } = freqRangeRef.current;

      if (
        resources.rowToBin &&
        resources.rowToBinHeight === canvasHeight &&
        resources.rowToBinMinFreqHz === minF &&
        resources.rowToBinMaxFreqHz === maxF &&
        resources.rowToBinNyquist === nyquist
      ) {
        return resources.rowToBin;
      }

      const minBin = Math.floor((minF / nyquist) * (freqBins - 1));
      const maxBin = Math.min(
        freqBins - 1,
        Math.floor((Math.min(maxF, nyquist) / nyquist) * (freqBins - 1)),
      );
      const binRange = Math.max(0, maxBin - minBin);
      const rowToBin = new Uint16Array(canvasHeight);

      for (let y = 0; y < canvasHeight; y++) {
        const invY = canvasHeight - 1 - y;
        rowToBin[y] =
          minBin +
          Math.floor((invY / Math.max(1, canvasHeight - 1)) * binRange);
      }

      resources.rowToBin = rowToBin;
      resources.rowToBinHeight = canvasHeight;
      resources.rowToBinMinFreqHz = minF;
      resources.rowToBinMaxFreqHz = maxF;
      resources.rowToBinNyquist = nyquist;

      return rowToBin;
    };

    const ensureColumnImageData = (canvasHeight: number): ImageData | null => {
      const resources = renderResourcesRef.current;

      if (
        resources.columnCanvas &&
        resources.columnCtx &&
        resources.columnImageData &&
        resources.columnCanvas.height === canvasHeight
      ) {
        return resources.columnImageData;
      }

      const columnCanvas = document.createElement("canvas");
      columnCanvas.width = 1;
      columnCanvas.height = canvasHeight;

      const columnCtx = columnCanvas.getContext("2d", { alpha: false });
      if (!columnCtx) {
        return null;
      }

      columnCtx.imageSmoothingEnabled = false;
      resources.columnCanvas = columnCanvas;
      resources.columnCtx = columnCtx;
      resources.columnImageData = columnCtx.createImageData(1, canvasHeight);

      return resources.columnImageData;
    };

    const render = async () => {
      const currentCanvas = canvasRef.current;
      const currentNodes = nodesRef.current;
      if (!currentCanvas || !currentNodes) return;

      const { audioCtx, analyser } = currentNodes;

      const now = performance.now();
      const dt = (now - renderStateRef.current.lastTime) / 1000;
      renderStateRef.current.lastTime = now;

      const durationSeconds = decodeWindowSecondsRef.current;
      const pxPerSec = currentCanvas.width / durationSeconds;
      renderStateRef.current.pixelAccumulator += dt * pxPerSec;

      let step = Math.floor(renderStateRef.current.pixelAccumulator);
      if (step <= 0) {
        scheduleNextRender(() => void render());
        return;
      }
      renderStateRef.current.pixelAccumulator -= step;
      if (step > currentCanvas.width) step = currentCanvas.width;

      analyser.getByteFrequencyData(dataArray);

      if (step < currentCanvas.width) {
        ctx2d.drawImage(
          currentCanvas,
          step,
          0,
          currentCanvas.width - step,
          currentCanvas.height,
          0,
          0,
          currentCanvas.width - step,
          currentCanvas.height,
        );
      }

      const nyquist = audioCtx.sampleRate / 2;
      const rowToBin = ensureRowToBin(currentCanvas.height, nyquist);
      const columnImageData = ensureColumnImageData(currentCanvas.height);
      const columnCanvas = renderResourcesRef.current.columnCanvas;
      const columnCtx = renderResourcesRef.current.columnCtx;
      if (!columnImageData || !columnCanvas || !columnCtx) {
        scheduleNextRender(() => void render());
        return;
      }

      const buf = columnImageData.data;
      const colorLUT = colorLutRef.current;
      for (let y = 0; y < currentCanvas.height; y++) {
        const idx = rowToBin[y];
        const v = dataArray[idx];
        const [r, g, b] = colorLUT[v];
        const p = y * 4;
        buf[p] = r;
        buf[p + 1] = g;
        buf[p + 2] = b;
        buf[p + 3] = 255;
      }

      columnCtx.putImageData(columnImageData, 0, 0);
      ctx2d.drawImage(
        columnCanvas,
        currentCanvas.width - step,
        0,
        step,
        currentCanvas.height,
      );

      scheduleNextRender(() => void render());
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries.length) return;
      const { width, height } = entries[0].contentRect;
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        Math.max(1, maxDevicePixelRatioRef.current ?? Number.POSITIVE_INFINITY),
      );
      const nextWidth = Math.max(1, Math.round(width * dpr));
      const nextHeight = Math.max(1, Math.round(height * dpr));

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
        invalidateRenderResources();
      }

      renderStateRef.current.pixelAccumulator = 0;
    });
    resizeObserver.observe(canvas);

    scheduleNextRender(() => void render());

    return () => {
      cancelScheduledRender();
      resizeObserver.disconnect();
      invalidateRenderResources();
      if (nodesRef.current) {
        nodesRef.current.source.disconnect();
        nodesRef.current.analyser.disconnect();
        nodesRef.current.audioCtx.close();
        nodesRef.current = null;
      }
    };
  }, [stream, canvasRef]);
};
