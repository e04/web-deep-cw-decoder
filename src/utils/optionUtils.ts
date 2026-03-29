export const findMatchingOption = <T extends string | number>(
  value: unknown,
  options: readonly T[],
): T | undefined => options.find((option) => option === value);

export const hasMatchingOption = <T extends string | number>(
  value: unknown,
  options: readonly T[],
): value is T => findMatchingOption(value, options) !== undefined;

export const parseNumberOption = <T extends number>(
  value: string,
  options: readonly T[],
): T | undefined => findMatchingOption(Number(value), options);

export const parseStringOption = <T extends string>(
  value: string,
  options: readonly T[],
): T | undefined => findMatchingOption(value, options);
