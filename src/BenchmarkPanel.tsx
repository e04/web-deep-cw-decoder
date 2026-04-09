import { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Stack } from "@mantine/core";
import {
  DEFAULT_DECODE_BANDWIDTH_HZ,
  DEFAULT_DECODE_CENTER_FREQ_HZ,
  DEFAULT_DECODE_WINDOW_S,
  getBufferSamples,
} from "./const";
import { useLoadProgress } from "./hooks/useLoadProgress";
import { LoadProgressBars } from "./LoadProgressBars";
import { loadModel, runInference } from "./utils/inference";
import type { InferenceBackend } from "./utils/inferenceProtocol";

type BenchmarkVariant = {
  label: string;
  backend: InferenceBackend;
};

type BenchmarkResult = {
  label: string;
  averageSeconds?: number;
  error?: string;
};

type BenchmarkStatus =
  | {
      label: string;
      run: number;
    }
  | null;

const BENCHMARK_RUN_COUNT = 10;
const BENCHMARK_VARIANTS: readonly BenchmarkVariant[] = [
  { label: "WASM", backend: "wasm" },
  { label: "WebGPU", backend: "webgpu" },
];

function formatRealtimeMultiplier(averageSeconds: number): string {
  if (averageSeconds <= 0) {
    return "xinf";
  }

  return `x${(DEFAULT_DECODE_WINDOW_S / averageSeconds).toFixed(1)}`;
}

function formatBenchmarkLine(
  variant: BenchmarkVariant,
  results: BenchmarkResult[],
  activeVariant: BenchmarkVariant | null,
  status: BenchmarkStatus,
  isRunning: boolean,
): string {
  const result = results.find((entry) => entry.label === variant.label);
  const isActive = activeVariant?.label === variant.label;
  const runProgressPercent = result?.averageSeconds !== undefined
    ? 100
    : status?.label === variant.label
    ? Math.round((status.run / BENCHMARK_RUN_COUNT) * 100)
    : 0;
  const progressBar = `[${"#"
    .repeat(Math.floor(runProgressPercent / 10))
    .padEnd(10, ".")}]`;

  if (result?.error) {
    return `${variant.label.padEnd(14)} ${progressBar} ${runProgressPercent
      .toString()
      .padStart(3, " ")}% ERROR: ${result.error}`;
  }

  if (result?.averageSeconds !== undefined) {
    return `${variant.label.padEnd(14)} ${progressBar} ${runProgressPercent
      .toString()
      .padStart(3, " ")}% avg. ${result.averageSeconds.toFixed(3)} s  ${formatRealtimeMultiplier(result.averageSeconds)}`;
  }

  if (isRunning && status?.label === variant.label) {
    return `${variant.label.padEnd(14)} ${progressBar} ${runProgressPercent
      .toString()
      .padStart(3, " ")}% running`;
  }

  if (isRunning && isActive) {
    return `${variant.label.padEnd(14)} ${progressBar} ${runProgressPercent
      .toString()
      .padStart(3, " ")}% loading`;
  }

  return `${variant.label.padEnd(14)} ${progressBar} ${runProgressPercent
    .toString()
    .padStart(3, " ")}% pending`;
}

function buildReport(
  results: BenchmarkResult[],
  activeVariant: BenchmarkVariant | null,
  status: BenchmarkStatus,
  isRunning: boolean,
): string {
  const lines = [
    "model: model_en",
    `input: silence (${DEFAULT_DECODE_WINDOW_S}s)`,
    `filter: center ${DEFAULT_DECODE_CENTER_FREQ_HZ} Hz, width ${DEFAULT_DECODE_BANDWIDTH_HZ} Hz`,
    `runs: ${BENCHMARK_RUN_COUNT} timed`,
    "warmup: 1 untimed run per setting",
    "",
    ...BENCHMARK_VARIANTS.map((variant) =>
      formatBenchmarkLine(variant, results, activeVariant, status, isRunning),
    ),
  ];

  if (!isRunning) {
    lines.push("", "Press RUN to start benchmark.");
  }

  return lines.join("\n");
}

export const BenchmarkPanel = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<BenchmarkStatus>(null);
  const [results, setResults] = useState<BenchmarkResult[]>([]);
  const [activeVariant, setActiveVariant] = useState<BenchmarkVariant | null>(
    null,
  );
  const runIdRef = useRef(0);
  const loadProgress = useLoadProgress(
    activeVariant?.backend ?? "wasm",
    "EN",
    "standard",
  );

  useEffect(() => {
    return () => {
      runIdRef.current += 1;
    };
  }, []);

  const runBenchmark = async () => {
    const runId = runIdRef.current + 1;
    runIdRef.current = runId;

    const silentBuffer = new Float32Array(
      getBufferSamples(DEFAULT_DECODE_WINDOW_S),
    );
    const nextResults: BenchmarkResult[] = [];

    setIsRunning(true);
    setStatus(null);
    setResults([]);
    setActiveVariant(null);

    try {
      for (const variant of BENCHMARK_VARIANTS) {
        if (runIdRef.current !== runId) {
          return;
        }

        try {
          setActiveVariant(variant);

          await loadModel(
            "en",
            variant.backend,
            "standard",
          );

          await runInference(
            silentBuffer,
            DEFAULT_DECODE_CENTER_FREQ_HZ,
            DEFAULT_DECODE_BANDWIDTH_HZ,
            {
              lang: "en",
              backend: variant.backend,
            },
          );

          const timesMs: number[] = [];

          for (let index = 0; index < BENCHMARK_RUN_COUNT; index += 1) {
            if (runIdRef.current !== runId) {
              return;
            }

            setStatus({
              label: variant.label,
              run: index + 1,
            });

            const startedAt = performance.now();

            await runInference(
              silentBuffer,
              DEFAULT_DECODE_CENTER_FREQ_HZ,
              DEFAULT_DECODE_BANDWIDTH_HZ,
              {
                lang: "en",
                backend: variant.backend,
              },
            );

            timesMs.push(performance.now() - startedAt);
          }

          const averageSeconds =
            timesMs.reduce((sum, value) => sum + value, 0) /
            timesMs.length /
            1000;

          nextResults.push({
            label: variant.label,
            averageSeconds,
          });
        } catch (error) {
          nextResults.push({
            label: variant.label,
            error:
              error instanceof Error ? error.message : "Unexpected benchmark failure.",
          });
        }

        if (runIdRef.current !== runId) {
          return;
        }

        setResults([...nextResults]);
      }
    } finally {
      if (runIdRef.current === runId) {
        setActiveVariant(null);
        setStatus(null);
        setIsRunning(false);
      }
    }
  };

  return (
    <Stack gap="sm">
      <Box px={8}>
        <Flex justify="space-between" align="flex-start">
          <Flex gap="sm" align="flex-start" style={{ flex: 1, minWidth: 0 }}>
            <Button
              w={200}
              color="indigo"
              onClick={() => void runBenchmark()}
              disabled={isRunning}
            >
              {isRunning ? "RUNNING..." : "RUN"}
            </Button>
            <Box style={{ flex: 1, minWidth: 0, maxWidth: "400px" }}>
              {isRunning && activeVariant ? (
                <LoadProgressBars progress={loadProgress} />
              ) : null}
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box px={8}>
        <Box
          component="pre"
          m={0}
          style={{
            padding: "4px 12px",
            minHeight: "320px",
            overflowX: "auto",
            background: "#05070a",
            color: "var(--mantine-color-gray-0)",
            whiteSpace: "pre-wrap",
          }}
        >
          {buildReport(results, activeVariant, status, isRunning)}
        </Box>
      </Box>
    </Stack>
  );
};
