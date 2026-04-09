import {
  PILEUP_FILTER_WIDTH_HZ,
  PILEUP_MATCH_HZ,
  PILEUP_MAX_PEAKS,
} from "../const";

const PILEUP_CONFIRM_MS = 400;
const PILEUP_HOLD_MS = 5000;

export type PileupCandidate = {
  frequency: number;
  snrDb: number;
};

export type TrackedPileupCandidate = {
  id: number;
  frequency: number;
  snrDb: number;
  firstSeen: number;
  lastSeen: number;
};

export type PileupTrack = {
  id: number;
  frequency: number;
};

export function selectStrongSeparatedCandidates<
  T extends { frequency: number; snrDb: number },
>(
  candidates: T[],
  maxCandidates: number = PILEUP_MAX_PEAKS,
  minSeparationHz: number = PILEUP_FILTER_WIDTH_HZ,
): T[] {
  const selected: T[] = [];

  for (const candidate of candidates) {
    if (selected.length >= maxCandidates) {
      break;
    }

    if (
      selected.every(
        (current) =>
          Math.abs(current.frequency - candidate.frequency) >= minSeparationHz,
      )
    ) {
      selected.push(candidate);
    }
  }

  return selected;
}

export function updateTrackedPileupCandidates(
  tracked: TrackedPileupCandidate[],
  rawCandidates: PileupCandidate[],
  now: number,
  createTrackId: () => number,
): TrackedPileupCandidate[] {
  const matched = new Set<number>();

  for (const candidate of rawCandidates) {
    const matchIndex = tracked.findIndex(
      (current, index) =>
        !matched.has(index) &&
        Math.abs(current.frequency - candidate.frequency) < PILEUP_MATCH_HZ,
    );

    if (matchIndex >= 0) {
      matched.add(matchIndex);
      tracked[matchIndex].frequency =
        tracked[matchIndex].frequency * 0.3 + candidate.frequency * 0.7;
      tracked[matchIndex].snrDb = candidate.snrDb;
      tracked[matchIndex].lastSeen = now;
      continue;
    }

    tracked.push({
      id: createTrackId(),
      frequency: candidate.frequency,
      snrDb: candidate.snrDb,
      firstSeen: now,
      lastSeen: now,
    });
  }

  return tracked.filter((candidate) => now - candidate.lastSeen < PILEUP_HOLD_MS);
}

export function getConfirmedPileupTracks(
  tracked: TrackedPileupCandidate[],
  now: number,
): PileupTrack[] {
  const confirmed = tracked
    .filter((candidate) => now - candidate.firstSeen >= PILEUP_CONFIRM_MS)
    .sort((left, right) => right.snrDb - left.snrDb);

  return selectStrongSeparatedCandidates(confirmed)
    .map((candidate) => ({
      id: candidate.id,
      frequency: Math.round(candidate.frequency),
    }))
    .sort((left, right) => left.frequency - right.frequency);
}

export function pileupTracksChanged(
  oldTracks: PileupTrack[],
  newTracks: PileupTrack[],
): boolean {
  if (oldTracks.length !== newTracks.length) {
    return true;
  }

  for (let index = 0; index < oldTracks.length; index++) {
    if (oldTracks[index].id !== newTracks[index].id) {
      return true;
    }
    if (
      Math.abs(oldTracks[index].frequency - newTracks[index].frequency) >=
      PILEUP_MATCH_HZ
    ) {
      return true;
    }
  }

  return false;
}
