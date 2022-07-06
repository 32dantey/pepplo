/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import mobileToTruck from "../assets/images/mobileToTruck.png";

const data = {
  subTitle: "Core features",
  title: "What's new at Pepplo",
  features: [
    {
      id: 1,
      title: "FLEET HEALTH",
      text: "This shows information about device not reporting, fleet usage, idle time, speeding incidents, battery health, and maintenance due.",
    },
    {
      id: 2,
      title: "ACCURATE",
      text: "Actuate by Pepplo is an AI powered service for intruder and firearm detection. It a very simple service to implement and can utilize many existing video systems already deployed.",
    },
    {
      id: 2,
      title: "STREET COMPLETE",
      text: "A powerful, versatile, and fully customizable tool designed for any application that requires repeated coverage/monitoring of a specific service area.",
    },
  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={mobileToTruck} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    pl: [0, 5, 0, null, null, 95],
    pr: [0, 5, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", null, null, 400, 570],
    pr: [0, null, null, null, 80],
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, "30px"],
    mb: [3, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 40px", null, "0 20px 40px", "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: ["20px 15px 17px", null, null, null, "25px 30px 23px"],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    "&:hover": {
      boxShadow: "0px 8px 24px rgba(69, 88, 157, 0.07)",
    },
  },

  img: {
    width: ["40px", "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, 3],
    },

    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.8",
    },
  },
};
