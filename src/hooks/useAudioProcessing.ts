import { useEffect, useRef } from "react";
import { AUDIO_CHUNK_SAMPLES, SAMPLE_RATE, getBufferSamples } from "../const";

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
  const offset = Math.max(0, samples.length - chunkLen);
  const chunkSlice =
    chunkLen > samples.length ? chunk.subarray(chunkLen - samples.length) : chunk;

  samples.copyWithin(0, chunkLen);
  samples.set(chunkSlice, offset);
  audioBufferState.version += 1;
}

export function useAudioProcessing(
  stream: MediaStream | null,
  gain: number,
  bufferDurationSeconds: number
): React.MutableRefObject<AudioBufferState> {
  const audioBufferRef = useRef<AudioBufferState>({
    samples: new Float32Array(getBufferSamples(bufferDurationSeconds)),
    version: 0,
  });
  const audioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);

  useEffect(() => {
    audioBufferRef.current = {
      samples: new Float32Array(getBufferSamples(bufferDurationSeconds)),
      version: audioBufferRef.current.version + 1,
    };
  }, [bufferDurationSeconds]);

  useEffect(() => {
    if (!stream) return;

    const audioContext = new AudioContext({ sampleRate: SAMPLE_RATE });
    const source = audioContext.createMediaStreamSource(stream);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = Math.pow(10, gain / 20);

    const scriptProcessor = audioContext.createScriptProcessor(
      AUDIO_CHUNK_SAMPLES,
      1,
      1,
    );
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
