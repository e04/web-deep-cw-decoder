import { Box, Progress, Stack } from "@mantine/core";
import type { LoadProgressView } from "./hooks/useLoadProgress";

type LoadProgressBarProps = {
  label: string;
  value: number;
};

const LoadProgressBar = ({ label, value }: LoadProgressBarProps) => {
  return (
    <Box pos="relative">
      <Progress
        value={value}
        size="16px"
        radius={0}
        color={value < 100 ? "blue.7" : "gray.8"}
      />
      <Box
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "var(--mantine-color-white)",
          fontSize: "12px",
          letterSpacing: "0.04em",
          pointerEvents: "none",
          paddingInline: "2px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.6)",
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </Box>
    </Box>
  );
};

type LoadProgressBarsProps = {
  progress: LoadProgressView;
};

export function LoadProgressBars({ progress }: LoadProgressBarsProps) {
  const bars = [
    { label: "ORT", value: progress.ortPercent },
    { label: progress.modelEnLabel, value: progress.modelEnPercent },
    ...(progress.showJaModel
      ? [{ label: "MODEL JA", value: progress.modelJaPercent }]
      : []),
  ].filter(({ value }) => value < 100);

  if (bars.length === 0) {
    return null;
  }

  return (
    <Stack gap={2} w="100%" style={{ flex: 1, minWidth: 0 }}>
      {bars.map(({ label, value }) => (
        <LoadProgressBar key={label} label={label} value={value} />
      ))}
    </Stack>
  );
}
