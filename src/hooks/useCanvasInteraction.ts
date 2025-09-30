import { useEffect } from "react";
import {
  MIN_FREQ_HZ,
  MAX_FREQ_HZ,
  DECODABLE_MIN_FREQ_HZ,
  DECODABLE_MAX_FREQ_HZ,
} from "../const";

type UseCanvasInteractionParams = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  filterFreq: number | null;
  setFilterFreq: (freq: number | null) => void;
  filterWidth: number;
};

const constrainFrequency = (
  frequency: number,
  filterWidth: number
): number => {
  const halfWidth = filterWidth / 2;

  if (frequency - halfWidth < DECODABLE_MIN_FREQ_HZ) {
    return DECODABLE_MIN_FREQ_HZ + halfWidth;
  }

  if (frequency + halfWidth > DECODABLE_MAX_FREQ_HZ) {
    return DECODABLE_MAX_FREQ_HZ - halfWidth;
  }

  return frequency;
};

const calculateFrequencyFromY = (
  y: number,
  canvasHeight: number,
  filterWidth: number
): number => {
  const invY = canvasHeight - y;
  const frequencyRange = MAX_FREQ_HZ - MIN_FREQ_HZ;
  const rawFrequency = MIN_FREQ_HZ + (invY / canvasHeight) * frequencyRange;

  return constrainFrequency(rawFrequency, filterWidth);
};

export const useCanvasInteraction = ({
  canvasRef,
  filterFreq,
  setFilterFreq,
  filterWidth,
}: UseCanvasInteractionParams) => {
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

      const frequency = calculateFrequencyFromY(y, canvasHeight, filterWidth);
      setFilterFreq(Math.ceil(frequency));
    };

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [filterFreq, setFilterFreq, filterWidth, canvasRef]);

  useEffect(() => {
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

      newFreq = constrainFrequency(newFreq, filterWidth);
      setFilterFreq(Math.round(newFreq));
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [filterFreq, setFilterFreq, filterWidth, canvasRef]);
};
