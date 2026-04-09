import { useEffect, useState } from "react";

const supportsChromiumPassthrough = () => {
  if (typeof window === "undefined" || typeof AudioContext === "undefined") {
    return false;
  }

  if (!("setSinkId" in AudioContext.prototype)) {
    return false;
  }
  return true;
};

type UseAudioPassthroughResult = {
  isSupported: boolean;
  audioOutputDevices: MediaDeviceInfo[];
  syncAudioOutputDevices: (devices: MediaDeviceInfo[]) => void;
};

export const useAudioPassthrough = (
  selectedAudioOutput: string,
  clearSelectedAudioOutput: () => void,
): UseAudioPassthroughResult => {
  const [audioOutputDevices, setAudioOutputDevices] = useState<
    MediaDeviceInfo[]
  >([]);
  const [isSupported] = useState<boolean>(() => supportsChromiumPassthrough());

  useEffect(() => {
    if (
      selectedAudioOutput &&
      audioOutputDevices.length > 0 &&
      !audioOutputDevices.some(
        (device) => device.deviceId === selectedAudioOutput,
      )
    ) {
      clearSelectedAudioOutput();
    }
  }, [audioOutputDevices, clearSelectedAudioOutput, selectedAudioOutput]);

  const syncAudioOutputDevices = (devices: MediaDeviceInfo[]) => {
    if (!isSupported) {
      return;
    }

    setAudioOutputDevices(
      devices.filter((device) => device.kind === "audiooutput"),
    );
  };

  return {
    isSupported,
    audioOutputDevices,
    syncAudioOutputDevices,
  };
};
