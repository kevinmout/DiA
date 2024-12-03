import { Box, Button, Container, FileInput, Flex, Image } from "@mantine/core";
import { DamageReport } from "./components/DamageReport";
import { SeverityReport } from "./components/SeverityReport";
import Canvas from "./components/DrawOnImage";
import { useState } from "react";

const LandLordPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "50%",
          height: "100vh",
        }}
      ></div>
      <div>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "50%",
            height: "100vh",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "50%",
            height: "100vh",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LandLordPage;
