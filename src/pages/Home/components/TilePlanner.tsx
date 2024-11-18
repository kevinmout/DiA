import { Container, Image, Title } from "@mantine/core";

export const TilePlanner = () => {
  return (
    <Container style={{ backgroundColor: "#f0f0f0" }}>
      <Title>Indicate the Damage on this 3D Scan</Title>
      <Image src={"./images/3d-floor.jpg"} />
    </Container>
  );
};
