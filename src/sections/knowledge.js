/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import KnowledgeThumb from "assets/images/knowledge-thumb.png";
import mobileToTruck from "assets/images/mobileToTruck.png";
import live_tracking3 from "assets/images/live_tracking3.gif";

const data = {
  title: "Vehicle Tracking Devices and Asset Tracking Devices",
  description:
    "Whether you’re using location tracking to monitor a vehicle, employee, or other high-value asset, Pepplo has a GPS tracking device ready to suit your needs. From vehicle tracking devices such as the LMU-2630, to the water-resistant GL300MA asset tracking device, to the solar-powered XT-4970, we have the right GPS tracking device to help you meet your fleet management goals!",
  btnName: "Explore Details",
  btnURL: "#",
};

export default function Knowledge() {
  return (
    <section sx={{ variant: "section.knowledge" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image
            src={live_tracking3}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: "flex",
    mx: ["auto", null, null, 0],
    img: {
      height: [400, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 365, 420, 430, "490px"],
    pb: [7, null, null, 0],
    ".description": {
      pr: [0, null, 7, 5],
    },
    ".btn__link": {
      mt: [5, null, null, 6],
    },
  },
};
