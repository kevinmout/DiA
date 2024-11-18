import { useState } from "react";
import {
  Button,
  TextInput,
  Textarea,
  RadioGroup,
  Radio,
  Grid,
  Image,
  FileInput,
  Container,
  Paper,
  Box,
  Flex,
} from "@mantine/core";
import Canvas from "./components/DrawOnImage";
import { DamageReport } from "./components/DamageReport";
import { SeverityReport } from "./components/SeverityReport";

function HomePage() {
  const [damageDescription, setDamageDescription] = useState("");
  const [severity, setSeverity] = useState("Excellent");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [damageImage, setDamageImage] = useState<File | null>(null);
  const [damageImageUrl, setDamageImageUrl] = useState<string | null>(null);

  const handleSubmit = () => {
    // Submit logic here
    console.log({
      damageDescription,
      severity,
      street,
      city,
      houseNumber,
      damageImage,
    });
  };

  const handleImageChange = (file: File | null) => {
    setDamageImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDamageImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setDamageImageUrl(null);
    }
  };

  return (
    <div>
      <h2>New Report</h2>
      <p>Fill in the fields to report damage</p>
      <Grid>
        <Grid.Col span={6}>
          {/* <Image src="images/3d-floor.jpg" alt="3D Scan" /> */}
          <Canvas
            containerWidth={800}
            containerHeight={600}
            contentWidth={800}
            contentHeight={600}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <FileInput
            label="Upload a picture of your damage"
            placeholder="Upload image"
            onChange={handleImageChange}
          />
          {damageImageUrl && (
            <Box mt="md" style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={damageImageUrl}
                alt="Uploaded Damage"
                width={300}
                height={300}
              />
            </Box>
          )}
        </Grid.Col>
      </Grid>
      <Flex>
        <DamageReport />
        <SeverityReport />
      </Flex>

      <Button onClick={handleSubmit} mt="md" color="teal">
        Submit
      </Button>
    </div>
  );
}

export default HomePage;
