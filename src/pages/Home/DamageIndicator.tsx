import React from "react";
import { Box, Container, Flex, Grid, Paper } from "@mantine/core";
import { TilePlanner } from "./components/TilePlanner";
import { Damage } from "./components/Damage";
import Canvas from "./components/DrawOnImage";
import { DamageReport } from "./components/DamageReport";
import { SeverityReport } from "./components/SeverityReport";

const DamageIndicatorApp = () => {
  return (
    <Box style={{ padding: "20px" }}>
      <Grid gutter="md" style={{ height: "100vh" }}>
        {/* Top-left container */}
        <Grid.Col span={6}>
          <Paper shadow="sm" style={{ height: "100%" }}>
            <Canvas
              containerWidth={800}
              containerHeight={600}
              contentWidth={800}
              contentHeight={600}
            />
          </Paper>
        </Grid.Col>

        {/* Top-right container */}
        <Grid.Col span={6}>
          <Paper shadow="sm" style={{ height: "100%" }}>
            <Damage />
          </Paper>
        </Grid.Col>

        {/* Bottom container */}
        <Grid.Col span={9}>
          <Flex>
            <DamageReport />
            <SeverityReport />
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default DamageIndicatorApp;
