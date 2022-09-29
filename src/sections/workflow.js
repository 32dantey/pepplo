/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading } from "theme-ui";
import SectionHeader from "components/section-header";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  //Container,
  AspectRatio,
  Spoiler,
  Button,
} from "@mantine/core";

import Agriculture from "../assets/industries/Agriculture.png";
import car_sharing from "../assets/industries/car_sharing.png";
import construction from "../assets/industries/construction.png";
import Delivery from "../assets/industries/Delivery.png";
import Emergency from "../assets/industries/Emergency.png";
import Insurance from "../assets/industries/Insurance.png";
import Logistics from "../assets/industries/Logistics.png";
import Motocycles from "../assets/industries/Motocycles.png";
import Telematics from "../assets/industries/Telematics.png";
import Utility from "../assets/industries/Utility.png";

// mocked data
const mockdata = [
  {
    title: "AGRICULTURE",
    description:
      "Agricultural machinery has advanced a lot in recent years with modern tractors or harvesters costing more than a sports car. It is essential to keep track of such valuable assets. Thanks to our solutions, you will have a full control over the machinery by knowing its current position, driver activities and other vital information.",
    image: Agriculture,
  },
  {
    title: "CAR SHARING",
    description:
      "Knowing vehicle’s current location, status and track history is crucial for all car sharing and rental service providers. Gain full control of your fleet with our solutions – prevent theft with remote car lock management, receive notifications of possible contract violations, and monitor driver behavior and areas where the vehicles are driven.    ",
    image: car_sharing,
  },
  {
    title: "CONSTRUCTION & MINING",
    description:
      "Managing construction and mining machinery is a complex task. If managed improperly, it can lead to huge expenditure. The benefits of our solutions include protecting your equipment from theft, reducing fuel expenses and enhancing safety. In other words, you will take a full control of your fleet, workers and resources.",
    image: construction,
  },
  {
    title: "DELIVERY SERVICES",
    description:
      "Quick and professional distribution of goods is a key to profit in delivery business. Route optimization can reduce your fuel expenses up to 30%, while driver identification and behavior monitoring will ensure high delivery standards and traceability whenever any complaints need to be investigated. Gain full control of your fleet and resources with our solutions",
    image: Delivery,
  },
  {
    title: "EMERGENCY SERVICES",
    description:
      "Safety of our society highly depends on technology that allows us to monitor, track and respond to emergency calls faster than ever. Owing to our solutions, you will always know the current location and status of your transport, thus, ensuring a timely response to any kind of situation. Real time status of special equipment, such as sirens, water pumps, or ladders, guarantees accountability and proper exploitation.",
    image: Emergency,
  },
  {
    title: "INSURANCE",
    description:
      "The main reasons for insurance payouts are car accidents and thefts. There are at least 7 million cases of stolen vehicles around the world every year and this number keeps growing. Figures in traffic accident statistics are even greater. Real time tracking, warnings when theft attempt or crash is detected, and possibility to trace accidents – all this helps to identify the culprit and reduce expenses when an unforeseen event occurs.    ",
    image: Insurance,
  },
  // {
  //   title: "LOGISTICS",
  //   description:
  //     "Modern day logistics require a considerable amount of information for business optimization. It is not enough just to get the GPS coordinates of your vehicle’s current location. With fuel consumption, driven distance and many other parameters at hand, you will be able to manage your fleet resources effectively. No expenses will be left unaccounted. Monitoring driver activities will allow you to be in control of your staff, while temperature data will make you sure that goods are delivered in high quality.    ",
  //   image: Logistics,
  // },
  // {
  //   title: "MOTOCYCLES",
  //   description:
  //     "Motorcycles are fast, very convenient to get around in the cities and require less fuel than cars. Being such a useful commodity, it is also an easy target for thieves. Enhance the safety of your valuable asset with our solutions – you will always know its current location, receive warnings if the motorcycle is being moved or the tracker is disconnected from battery",
  //   image: Motocycles,
  // },
  // {
  //   title: "TELEMATICS",
  //   description:
  //     "Merging the best of telecommunications and informatics, telematics offers unique ways to monitor a vehicle. From motorbikes to heavy trucks, from a single car to huge fleets – there is a solution for each and every client. Telematics is the key to effective resource management, optimization of costs and safety across a range of industries.    ",
  //   image: Telematics,
  // },
  // {
  //   title: "UTILITY",
  //   description:
  //     "Maintenance vehicles, such as waste/garbage collectors or dustcarts, are vital for a modern city and its dwellers. Management of complex machinery requires a vast amount of specific data – sprinkling distance, covered spreading area, amounts and types of materials used, working hours and many more parameters. You can have all this and more at your fingertips with our solutions.",
  //   image: Utility,
  // },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export default function WorkFlow() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Spoiler maxHeight={342.5} showLabel="Show more" hideLabel="Hide">
      <Card
        key={article.title}
        p="md"
        radius="md"
        component="a"
        href="#"
        className={classes.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          mt="md"
        >
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
        <Text>{article.description}</Text>
        <Button mt="xl">Request Demo</Button>
      </Card>
    </Spoiler>
  ));
  return (
    <section sx={{ variant: "section.workflow" }}>
      <Container>
        <SectionHeader
          title="Industries we serve"
          description="Our solutions can be found in light vehicle fleets, large trucks in commercial shipping, heavy equipment in construction, snow plows and street sweepers, public safety vehicles, and many others."
        />

        <Container py="xl">
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            {cards}
          </SimpleGrid>
        </Container>
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
