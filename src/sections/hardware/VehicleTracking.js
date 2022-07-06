/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

const data = [
  {
    id: 1,
    title: "LMU-2630",
    text: (
      <div>
        <p>* LTE Cat-1 connectivity</p>
        <p>* Internal or external cellular and GPS antenna options</p>
        <p>* Automatic, over-the-air configuration and firmware download</p>
        <p>
          * 5 inputs/3 outputs/1-wire interface for driver ID, temperature
          sensors, etc.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "XT-2400",
    text: (
      <div>
        <p>* LTE Cat M1 connectivity; 4G LTE Bands 2, 4, and 12</p>
        <p>* Integrated GPS receiver and antenna</p>
        <p>
          * LED status indicators for GPS lock, GSM registration, and OBDII
          communication
        </p>
        <p>* 3-axis accelerometer and motion detector</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "TTU-2830",
    text: (
      <div>
        <p>* LTE Cat-1 connectivity </p>
        <p>* 3-axis accelerometer for driver behavior</p>
        <p>
          * 3 Inputs/ 3 Outputs/ 1-Wire interface for driver ID and temperature
          sensors
        </p>
        <p>* IP66 sealed enclosure</p>
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
    title: "GV75",
    text: (
      <div>
        <p>
          * Ideal for watercraft tracking, motorcycle monitoring, and other
          vehicle security{" "}
        </p>
        <p> * Multiple I/Os, including RS232 serial port and digital I/O</p>
        <p>* Compact size for easy installation</p>
        <p>* Waterproof, compliant to IP67</p>
      </div>
    ),
  },
];

export default function WorkFlow() {
  return (
    <section
      style={{ backgroundColor: "white" }}
      sx={{ variant: "section.workflow" }}
    >
      <Container>
        <SectionHeader
          title="Vehicle Tracking Devices"
          description="Pepplo vehicle tracking devices can help you monitor the exact location of every vehicle in your fleet—plus reduce fuel costs, improve maintenance scheduling, minimize theft risk, lower insurance costs, monitor driving behaviors, and increase driver accountability."
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
