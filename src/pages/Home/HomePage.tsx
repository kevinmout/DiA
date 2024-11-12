import {
  Button,
  Container,
  FileInput,
  Flex,
  Grid,
  Group,
  Radio,
  Textarea,
  TextInput,
  Image,
  Title,
} from "@mantine/core";
import { useState } from "react";

export const HomePage = (): JSX.Element => {
  const [severity, setSeverity] = useState<string | null>("Excellent");

  return (
    <Container>
      <Container>
        <Title order={1}>Home Page</Title>
      </Container>

      <Grid>
        <Grid.Col span={6}>
          <Container style={{ backgroundColor: "#f0f0f0" }}>
            <Image
              src={"./images/3d-floor.jpg"}
              alt="loading"
              style={{ borderRadius: "100%" }}
            />
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container style={{ backgroundColor: "#e0e0e0" }}>
            <Image
              src={"./images/glass.jpg"}
              alt="loading"
              style={{ borderRadius: "100%" }}
            />
          </Container>
        </Grid.Col>
      </Grid>

      <Container
        style={{
          backgroundColor: "#d0d0d0",
          height: "300px",
          marginTop: "20px",
        }}
      >
        {/* Big container underneath */}
        Big Content
      </Container>
    </Container>
  );
};
