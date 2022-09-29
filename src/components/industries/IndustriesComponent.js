/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

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

export default function IndustriesComponent() {
  return (
    <section sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <h1>Industries here</h1>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    width: "fit-content",
    alignItems: "center",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
};
