/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Marketplace from "assets/feature/marketplace.svg";
import Gift from "assets/feature/gift.svg";
import Award from "assets/feature/award.svg";

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "geofencung solutions",
    title: "Geofencing Solutions",
    text: "Designate instant geofences with the click of a button — easy and quick to assign and remove.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Monitoring and Telematics",
    title: "Monitoring and Telematics",
    text: "Monitor fleet health with information about devices not reporting, idle time, speeding incidents, and more.",
  },
  // {
  //   id: 3,
  //   imgSrc: Award,
  //   altText: "Live Tracking Solutions",
  //   title: "Live Tracking Solutions",
  //   text: "At a glance, see what is happening in your fleet that requires your immediate attention.",
  // },
  {
    id: 4,
    imgSrc: Award,
    altText: "Fleet Tracking",
    title: "Fleet Tracking",
    text: "Our comprehensive asset tracking and fleet management software is extremely versatile, allowing us to create customized solutions.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader
          title="Go Beyond unlimited features"
          description="Focus only on the tasks, we take care of the rest. As soon as you get connected to pepplo tracking system ,you are able to track your vehicles at the tap of a button."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
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
};
