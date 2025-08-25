import { Container, Flex, Stack, Text } from "@mantine/core";
import { Decoder } from "./Decoder";

function App() {
  return (
    <Container strategy="block" size={800} p="8">
      <Stack gap={8}>
        <Flex align="center" justify="space-between">
          <Text size="xl" fw={700}>
            web-deep-cw-decoder{" "}
            <Text component="span" size="xs" c="dimmed">
              An AI-based Morse Decoder
            </Text>
          </Text>
          <Text size="xs" c="dimmed">
            v0.0.4
          </Text>
        </Flex>
        <Decoder />
        <Flex justify="right">
          <Text component="a" c="dimmed" href="https://github.com/e04/">
            Copyright © 2025 e04
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

export default App;
