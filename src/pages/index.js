import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Feature from "sections/feature";
import BusinessProfit from "sections/business-profit";
import Knowledge from "sections/knowledge";
import ClientFeedback from "sections/client-feedback";
import CoreFeature from "sections/core-feature";
import WorkFlow from "sections/workflow";
import Support from "sections/support";
// import Faq from "sections/faq";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="GPS powered Asset and Fleet Tracking Software"
          title="pepplo"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <WorkFlow />
        <CoreFeature />
        {/* <Faq /> */}
        <ClientFeedback />
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
