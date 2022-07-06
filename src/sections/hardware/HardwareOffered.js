/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import truckImage from "../../assets/images/truckImage.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";

import ProfitThumb from "assets/images/business-profit.png";
import DrawingArrow from "assets/drawing-arrow.svg";

const data = {
  title: "Vehicle Tracking and Asset Tracking Devices",
  description:
    "Whether you’re using location tracking to monitor a vehicle, employee, or other high-value asset, Pepplo has a GPS tracking device ready to suit your needs. From vehicle tracking devices such as the LMU-2630, to the water-resistant GL300MA asset tracking device, to the solar-powered XT-4970, we have the right GPS tracking device to help you meet your fleet management goals!",

  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Vehicle tracking devices",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Asset tracking devices",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Satellite and GPS",
    },
  ],
};

export default function BusinessProfit() {
  return (
    <section sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={truckImage} alt="Thumbnail" width="565" height="430" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 350, 400, "470px"],
    pb: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: "absolute",
    bottom: -185,
    left: "33%",
    display: ["none", null, null, null, null, null, null, "block"],
  },
};
