import React from "react";
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import Layout from "components/layout";
import theme from "theme";
import SolutionsComponent from "components/solutions/Solutions";

function Solutions() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SolutionsComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default Solutions;
