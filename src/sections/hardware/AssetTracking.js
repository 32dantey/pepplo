/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

const data = [
  {
    id: 1,
    title: "Prime MD4G",
    text: (
      <div>
        <p>* LTE CATM1 connectivity</p>
        <p>* Perfect for tracking medical equipment</p>
        <p>
          * Replaceable battery with a life of 2-3 years with one update/day
        </p>
        <p>
          * Replaceable battery with a life of 2-3 years with one update/day
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Prime Bolt Mini",
    text: (
      <div>
        <p>* SMS, 4G LTE CatM1, and CDMACatM1 packet data</p>
        <p>* Battery life of 2200 days with one report per day</p>
        <p>* IP67 rugged , water, and dust resistant enclosure</p>
        <p>* Replaceable 5400 mAh Li-SOC12 battery</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "TTU-730",
    text: (
      <div>
        <p>* LTE Cat-1 connectivity</p>
        <p>* 7 year battery life with a single message per day</p>
        <p>* 57 Ah lithium field-replaceable battery pack</p>
        <p>* IP67 sealed and rugged enclosure</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Messenger",
    text: (
      <div>
        <p>
          * Powerful 32-bit processor, real time operating system, FLASH and
          SCRAM
        </p>
        <p>
          * Simple "plug-in" installation - connects to the diagnostic port of
          the engine
        </p>
        <p>
          * Supports up to 3 digital/1 analog inputs, one output external CAN
          connection
        </p>
        <p>
          * Supports variable methods for reporting GPS location/speed, as well
          as engine conditions
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "GV600MG",
    text: (
      <div>
        <p>* LTE Cat-1 connectivity</p>
        <p>* Ideal for heavy duty vehicles</p>
        <p>* Rugged and waterproof casing, compliant to IP67</p>
        <p>
          * Can work up to 3 months without external power, making it ideal for
          tracking trailers
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "GL300MA",
    text: (
      <div>
        <p>* Water resistant</p>
        <p> * LTE Cat-1 connectivity</p>
        <p>* Internal CDMA/GPS antennas</p>
        <p>
          * Thumb-sized button allowing easy emergency alerts or instant
          geofence settings
        </p>
      </div>
    ),
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: "section.workflow" }}>
      <Container>
        <SectionHeader
          title="Asset Tracking Devices"
          description="Pepplo asset tracking devices can help you improve theft protection, contract enforcement, maintenance scheduling, and customer support in your fleet—all while giving you peace of mind that your high-value assets are always exactly where they’re supposed to be."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: "text.heading" }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, "left"],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: "special",
    color: "heading",
    lineHeight: 1,
    letterSpacing: "heading",
    mr: ["auto", null, 0, 4, null, null, null, 5],
    ml: ["auto", null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    description: {
      fontSize: [1, 2],
      fontWeight: "body",
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
