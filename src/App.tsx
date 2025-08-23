import { Container, Flex, Text } from "@mantine/core";
import { Decoder } from "./Decoder";

function App() {
  return (
    <Container strategy="block" size={800}>
      <Text size="xl" fw={700}>
        web-deep-cw-decoder
      </Text>
      <Decoder />
      <Flex justify="right">
        <Text component="a" c="dimmed" href="https://github.com/e04/">
          Copyright © 2025 e04
        </Text>
      </Flex>
    </Container>
  );
}

export default App;
