import { Box, Button, Container, FileInput, Flex, Image } from "@mantine/core";
import { DamageReport } from "./components/DamageReport";
import { SeverityReport } from "./components/SeverityReport";
import Canvas from "./components/DrawOnImage";
import { useState } from "react";

const DamageIndicatorApp = () => {
  const [damageImage, setDamageImage] = useState<File | null>(null);
  const [damageImageUrl, setDamageImageUrl] = useState<string | null>(null);

  const handleSubmit = () => {
    // Submit logic here
    console.log({
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#f1f1f1",
          gap: "1rem",
        }}
      >
        <Canvas
          containerWidth={800}
          containerHeight={600}
          contentWidth={800}
          contentHeight={600}
        />
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            height: "100px",
          }}
        >
          <FileInput
            label="Upload a picture of your damage"
            placeholder="Upload image"
            onChange={handleImageChange}
            styles={{
              label: { fontWeight: "bold", color: "#333" },
            }}
          />
          {damageImageUrl && (
            <Image
              src={damageImageUrl}
              alt="Uploaded Damage"
              width={300}
              height={300}
              style={{
                marginTop: "4rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <DamageReport />
        <SeverityReport />
      </div>
      <Button
        onClick={handleSubmit}
        mt="md"
        color="teal"
        style={{
          width: "10rem",
          alignSelf: "center",
          backgroundColor: "#20C997",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default DamageIndicatorApp;
