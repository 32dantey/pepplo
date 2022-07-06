import React from "react";
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import Layout from "components/layout";
import theme from "theme";
import VehicleTracking from "sections/hardware/VehicleTracking";
import SatelliteTracking from "sections/hardware/SatelliteTacking";
import HardwareOffered from "sections/hardware/HardwareOffered";
import AssetTracking from "sections/hardware/AssetTracking";

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HardwareOffered />
        <VehicleTracking />
        <AssetTracking />
        <Container>
          <SatelliteTracking />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default About;
