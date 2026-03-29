import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type IsValid<T> = (value: unknown) => value is T;

const readPersistedValue = <T>(
  key: string,
  defaultValue: T,
  isValid?: IsValid<T>,
): T => {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const rawValue = window.localStorage.getItem(key);
    if (!rawValue) {
      return defaultValue;
    }

    const parsedValue = JSON.parse(rawValue) as unknown;
    if (isValid && !isValid(parsedValue)) {
      return defaultValue;
    }

    return (parsedValue as T) ?? defaultValue;
  } catch {
    return defaultValue;
  }
};

export const usePersistedState = <T>(
  key: string,
  defaultValue: T,
  isValid?: IsValid<T>,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    readPersistedValue(key, defaultValue, isValid),
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore persistence failures and keep the UI usable.
    }
  }, [key, value]);

  return [value, setValue];
};
