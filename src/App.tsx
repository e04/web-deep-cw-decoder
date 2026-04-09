import { Box, Button, Container, Flex, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRegisterSW } from "virtual:pwa-register/react";
import { DEFAULT_CONTAINER_WIDTH_PX, WIDE_LAYOUT_WIDTH_PX } from "./const";
import { Decoder } from "./Decoder";

function App() {
  const useWideContainer = useMediaQuery(
    `(min-width: ${WIDE_LAYOUT_WIDTH_PX}px)`,
    true,
    {
      getInitialValueInEffect: false,
    },
  );
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  return (
    <Container
      strategy="block"
      size={useWideContainer ? WIDE_LAYOUT_WIDTH_PX : DEFAULT_CONTAINER_WIDTH_PX}
      p="0"
      py={8}
    >
      <Stack gap={8}>
        <Box px={8}>
          <Stack gap={0}>
            <Flex align="center" justify="space-between">
              <a
                href="https://github.com/e04/web-deep-cw-decoder/"
                style={{ textDecoration: "none" }}
              >
                <Group gap={10} wrap="nowrap">
                  <img
                    src="/icon.svg"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    style={{ display: "block", flexShrink: 0, borderRadius: 7 }}
                  />
                  <Text
                    size="xl"
                    fw={800}
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #9ab3df 0%, #6f8fc3 46%, #4b6797 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      letterSpacing: "0.03em",
                      filter:
                        "drop-shadow(0 1px 0 rgba(255, 255, 255, 0.08)) drop-shadow(0 0 14px rgba(47, 143, 255, 0.12))",
                    }}
                  >
                    DeepCW
                  </Text>
                </Group>
              </a>
              <Group gap={8}>
                {needRefresh ? (
                  <Button
                    size="compact-sm"
                    variant="light"
                    color="green"
                    onClick={() => {
                      void updateServiceWorker(true);
                    }}
                  >
                    Update
                  </Button>
                ) : null}
                <Text size="xs" c="dimmed">
                  v0.5.4
                </Text>
              </Group>
            </Flex>
          </Stack>
        </Box>
        <Decoder />
        <Box px={8}>
          <Flex justify="right">
            <Text component="a" c="dimmed" href="https://github.com/e04/">
              Copyright © 2026 e04
            </Text>
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
