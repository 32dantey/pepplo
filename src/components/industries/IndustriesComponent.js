/** @jsx jsx */
import { jsx, Container, Flex, Button, Box, Image } from "theme-ui";

const data = {};

export default function IndustriesComponent() {
  return (
    <section sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <h1 sx={styles.title}>Industries here</h1>
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
  title: {
    color: "red",
  },
};
