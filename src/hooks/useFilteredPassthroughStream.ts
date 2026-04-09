import { useEffect, useRef } from "react";

const PASSTHROUGH_FILTER_PASSES = 4;

type UseFilteredPassthroughStreamParams = {
  stream: MediaStream | null;
  enabled: boolean;
  selectedAudioOutput: string;
  filterFreq: number | null;
  filterWidth: number;
};

type PassthroughGraph = {
  audioContext: AudioContext;
  bypassGain: GainNode;
  filteredGain: GainNode;
  filters: BiquadFilterNode[];
};

type AudioContextWithSinkId = AudioContext & {
  setSinkId?: (sinkId: string) => Promise<void>;
};

export const useFilteredPassthroughStream = ({
  stream,
  enabled,
  selectedAudioOutput,
  filterFreq,
  filterWidth,
}: UseFilteredPassthroughStreamParams): void => {
  const graphRef = useRef<PassthroughGraph | null>(null);

  useEffect(() => {
    if (!stream || !selectedAudioOutput) {
      graphRef.current = null;
      return;
    }

    const audioContext = new AudioContext({ latencyHint: "interactive" });
    const source = audioContext.createMediaStreamSource(stream);
    const inputGain = audioContext.createGain();
    const bypassGain = audioContext.createGain();
    const filteredGain = audioContext.createGain();
    const filters = Array.from({ length: PASSTHROUGH_FILTER_PASSES }, () => {
      const filter = audioContext.createBiquadFilter();
      filter.type = "bandpass";
      return filter;
    });

    source.connect(inputGain);
    inputGain.connect(bypassGain);

    if (filters.length > 0) {
      inputGain.connect(filters[0]);
      for (let index = 0; index < filters.length - 1; index += 1) {
        filters[index].connect(filters[index + 1]);
      }
      filters[filters.length - 1].connect(filteredGain);
    } else {
      inputGain.connect(filteredGain);
    }

    graphRef.current = {
      audioContext,
      bypassGain,
      filteredGain,
      filters,
    };

    let cancelled = false;

    const routePassthrough = async () => {
      const sinkAwareContext = audioContext as AudioContextWithSinkId;

      if (typeof sinkAwareContext.setSinkId !== "function") {
        return;
      }

      try {
        await sinkAwareContext.setSinkId(selectedAudioOutput);
        if (cancelled) {
          return;
        }

        // A direct Web Audio route avoids the extra media-element buffering.
        bypassGain.connect(audioContext.destination);
        filteredGain.connect(audioContext.destination);
        await audioContext.resume().catch(() => undefined);
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to start low-latency passthrough audio.", error);
        }
      }
    };

    void routePassthrough();

    return () => {
      cancelled = true;
      graphRef.current = null;
      void audioContext.close();
    };
  }, [selectedAudioOutput, stream]);

  useEffect(() => {
    const graph = graphRef.current;
    if (!graph) {
      return;
    }

    const shouldFilter = enabled && filterFreq != null && filterWidth > 0;
    const currentTime = graph.audioContext.currentTime;

    graph.bypassGain.gain.setValueAtTime(shouldFilter ? 0 : 1, currentTime);
    graph.filteredGain.gain.setValueAtTime(shouldFilter ? 1 : 0, currentTime);

    if (shouldFilter && filterFreq != null) {
      const q = filterFreq / filterWidth;
      graph.filters.forEach((filter) => {
        filter.frequency.setValueAtTime(filterFreq, currentTime);
        filter.Q.setValueAtTime(q, currentTime);
      });
    }

    if (graph.audioContext.state === "suspended") {
      void graph.audioContext.resume().catch(() => undefined);
    }
  }, [enabled, filterFreq, filterWidth]);
};
