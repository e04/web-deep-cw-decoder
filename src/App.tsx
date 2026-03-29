import { Button, Container, Flex, Group, Stack, Text } from "@mantine/core";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Decoder } from "./Decoder";

function App() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  return (
    <Container strategy="block" size={800} p="8">
      <Stack gap={8}>
        <Stack gap={0}>
          <Flex align="center" justify="space-between">
            <Text size="xl" fw={700}>
              DeepCW
            </Text>
            <Group gap={8}>
              {needRefresh ? (
                <Button
                  size="compact-xs"
                  variant="light"
                  onClick={() => void updateServiceWorker(true)}
                >
                  Update
                </Button>
              ) : null}
              <Text size="xs" c="dimmed">
                v0.4.1
              </Text>
            </Group>
          </Flex>
        </Stack>
        <Decoder />
        <Flex justify="right">
          <Text component="a" c="dimmed" href="https://github.com/e04/">
            Copyright © 2026 e04
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

export default App;
