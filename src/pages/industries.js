import React from "react";
import { ThemeProvider } from "theme-ui";
import Layout from "components/layout";
import theme from "theme";
import IndustriesComponent from "components/industries/IndustriesComponent";

function Industries() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <IndustriesComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default Industries;
