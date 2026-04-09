import { useEffect, useRef, useState, type MutableRefObject } from "react";
import {
  PILEUP_LOCK_SNR_THRESHOLD_DB,
  PILEUP_RELEASE_SNR_THRESHOLD_DB,
} from "../const";
import type { AudioBufferState } from "./useAudioProcessing";
import { waitForNextAudioChunk } from "../useDecode";
import {
  detectCwBins,
  loadCwDetectionModel,
  resetCwDetectionState,
} from "../utils/inference";
import type { InferenceBackend } from "../utils/inferenceProtocol";
import {
  getConfirmedPileupTracks,
  pileupTracksChanged,
  type PileupTrack,
  updateTrackedPileupCandidates,
  type TrackedPileupCandidate,
} from "../utils/pileupCandidates";

type UsePileupDetectionParams = {
  stream: MediaStream | null;
  backend: InferenceBackend;
  audioBufferRef: MutableRefObject<AudioBufferState>;
  enabled: boolean;
  minFreqHz: number;
  maxFreqHz: number;
};

type UsePileupDetectionResult = {
  tracks: PileupTrack[];
  loaded: boolean;
  loadError: string | null;
  isDetecting: boolean;
};

export const usePileupDetection = ({
  stream,
  backend,
  audioBufferRef,
  enabled,
  minFreqHz,
  maxFreqHz,
}: UsePileupDetectionParams): UsePileupDetectionResult => {
  const [tracks, setTracks] = useState<PileupTrack[]>([]);
  const [isDetecting, setIsDetecting] = useState(false);
  const [loadedBackend, setLoadedBackend] =
    useState<InferenceBackend | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const trackedCandidatesRef = useRef<TrackedPileupCandidate[]>([]);
  const reportedTracksRef = useRef<PileupTrack[]>([]);
  const nextTrackIdRef = useRef(1);
  const loaded = loadedBackend === backend;

  useEffect(() => {
    setLoadError(null);
  }, [backend]);

  useEffect(() => {
    if (!enabled || loaded) {
      return;
    }

    let cancelled = false;
    setLoadError(null);

    void loadCwDetectionModel(backend)
      .then(() => {
        if (!cancelled) {
          setLoadedBackend(backend);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Failed to load CW detection model.",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [backend, enabled, loaded]);

  useEffect(() => {
    if (!stream || !loaded || !enabled) {
      setIsDetecting(false);
      trackedCandidatesRef.current = [];
      reportedTracksRef.current = [];
      setTracks([]);
      if (loaded) {
        void resetCwDetectionState(backend);
      }
      return;
    }

    let cancelled = false;
    setIsDetecting(true);

    const detectLoop = async () => {
      let lastAudioVersion = -1;

      while (!cancelled) {
        const audioVersion = audioBufferRef.current.version;
        if (audioVersion === lastAudioVersion) {
          await waitForNextAudioChunk(
            audioBufferRef,
            audioVersion,
            () => cancelled,
          );
          if (cancelled) {
            return;
          }
          continue;
        }

        lastAudioVersion = audioVersion;

        const result = await detectCwBins(
          audioBufferRef.current.samples,
          backend,
          minFreqHz,
          maxFreqHz,
          PILEUP_LOCK_SNR_THRESHOLD_DB,
          PILEUP_RELEASE_SNR_THRESHOLD_DB,
          reportedTracksRef.current.map((track) => track.frequency),
        );
        if (cancelled) {
          return;
        }

        const now = performance.now();
        trackedCandidatesRef.current = updateTrackedPileupCandidates(
          trackedCandidatesRef.current,
          result,
          now,
          () => nextTrackIdRef.current++,
        );

        const confirmedTracks = getConfirmedPileupTracks(
          trackedCandidatesRef.current,
          now,
        );

        if (pileupTracksChanged(reportedTracksRef.current, confirmedTracks)) {
          reportedTracksRef.current = confirmedTracks;
          setTracks(confirmedTracks);
        }
      }
    };

    void detectLoop();

    return () => {
      cancelled = true;
      setIsDetecting(false);
      trackedCandidatesRef.current = [];
      reportedTracksRef.current = [];
      setTracks([]);
      nextTrackIdRef.current = 1;
      void resetCwDetectionState(backend);
    };
  }, [
    audioBufferRef,
    backend,
    enabled,
    loaded,
    maxFreqHz,
    minFreqHz,
    stream,
  ]);

  return { tracks, loaded, loadError, isDetecting };
};
