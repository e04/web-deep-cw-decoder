import { useEffect, useRef } from "react";
import { SAMPLE_RATE, BUFFER_SAMPLES } from "../const";

export type AudioBufferState = {
  samples: Float32Array;
  version: number;
};

function audioCallback(
  event: AudioProcessingEvent,
  audioBufferState: AudioBufferState
) {
  const chunk = event.inputBuffer.getChannelData(0);
  const chunkLen = chunk.length;
  const { samples } = audioBufferState;

  samples.copyWithin(0, chunkLen);
  samples.set(chunk, BUFFER_SAMPLES - chunkLen);
  audioBufferState.version += 1;
}

export function useAudioProcessing(
  stream: MediaStream | null,
  gain: number
): React.MutableRefObject<AudioBufferState> {
  const audioBufferRef = useRef<AudioBufferState>({
    samples: new Float32Array(BUFFER_SAMPLES),
    version: 0,
  });
  const audioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);

  useEffect(() => {
    if (!stream) return;

    const audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
    const source = audioContext.createMediaStreamSource(stream);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = Math.pow(10, gain / 20);

    const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
    scriptProcessor.onaudioprocess = (event) =>
      audioCallback(event, audioBufferRef.current);

    source.connect(gainNode);
    gainNode.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    scriptProcessorRef.current = scriptProcessor;

    return () => {
      if (scriptProcessorRef.current) {
        scriptProcessorRef.current.disconnect();
        scriptProcessorRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [stream, gain]);

  return audioBufferRef;
}
