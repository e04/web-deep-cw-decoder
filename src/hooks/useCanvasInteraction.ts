import { useEffect } from "react";
import { MAX_FREQ_HZ, MIN_FREQ_HZ } from "../const";
import { clampFrequencyToRange } from "../utils/frequencyUtils";

type UseCanvasInteractionParams = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  filterFreq: number | null;
  setFilterFreq: (freq: number) => void;
  enabled?: boolean;
  minFreqHz?: number;
  maxFreqHz?: number;
};

const calculateFrequencyFromY = (
  y: number,
  canvasHeight: number,
  minFreqHz: number,
  maxFreqHz: number,
): number => {
  const invY = canvasHeight - y;
  const frequencyRange = maxFreqHz - minFreqHz;
  const rawFrequency = minFreqHz + (invY / canvasHeight) * frequencyRange;

  return clampFrequencyToRange(rawFrequency, minFreqHz, maxFreqHz);
};

export const useCanvasInteraction = ({
  canvasRef,
  filterFreq,
  setFilterFreq,
  enabled = true,
  minFreqHz = MIN_FREQ_HZ,
  maxFreqHz = MAX_FREQ_HZ,
}: UseCanvasInteractionParams) => {
  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const y = event.clientY - rect.top;
      const canvasHeight = rect.height;

      const frequency = calculateFrequencyFromY(
        y,
        canvasHeight,
        minFreqHz,
        maxFreqHz,
      );
      setFilterFreq(Math.round(frequency));
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [setFilterFreq, canvasRef, enabled, minFreqHz, maxFreqHz]);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (!filterFreq) return;

      const step = 20;
      let newFreq = filterFreq;

      if (e.deltaY < 0) {
        newFreq += step;
      } else if (e.deltaY > 0) {
        newFreq -= step;
      }

      newFreq = clampFrequencyToRange(newFreq, minFreqHz, maxFreqHz);
      setFilterFreq(Math.round(newFreq));
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [filterFreq, setFilterFreq, canvasRef, enabled, minFreqHz, maxFreqHz]);
};
