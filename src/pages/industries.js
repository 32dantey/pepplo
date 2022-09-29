import React from "react";
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import Layout from "components/layout";
import theme from "theme";
import VehicleTracking from "sections/hardware/VehicleTracking";
import SatelliteTracking from "sections/hardware/SatelliteTacking";
import HardwareOffered from "sections/hardware/HardwareOffered";
import AssetTracking from "sections/hardware/AssetTracking";
import IndustriesComponent from "components/contactus/IndustriesComponent";

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <IndustriesComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default Contact;
