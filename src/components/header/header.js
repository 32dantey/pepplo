/** @jsx jsx */
import { useState } from "react";
import { TextInput, Textarea, Modal, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
// import { Link } from "react-scroll";
import Link from "next/link";
import Logo from "components/logo";
import footerlogo from "../../assets/footerlogo.png";
import SUDTRAK from "../../assets/SUDTRAK.png";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { GetInTouch } from "./modal";

import Divider from "assets/divider.svg";

export default function Header({ className }) {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={SUDTRAK} style={{ width: "200px" }} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link href={path}>{label}</Link>
            ))}
          </Flex>

          <Button
            onClick={() => setOpened(true)}
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
          >
            Request a demo
          </Button>

          <MobileDrawer />
        </Container>
      </header>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        zIndex={2000}
        styles={(theme) => ({
          modal: {
            backgroundColor: "transparent",
            padding: "0px",
            width: "fit-content"
          },
        })}
      >
        <GetInTouch />
      </Modal>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    py: [4, null, 5],
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      backgroundImage: ["none", null, null, null, `url(${Divider})`],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
      backgroundColor: ["white", null, null, null, "white"],
      color: "#013289",
      fontWeight: "bold",
      py: ["12px", null, null, null, 2],
      px: [3, null, null, null, 0],
      ":hover": {
        backgroundColor: ["primary", null, null, null, "transparent"],
        color: ["white", null, null, null, "primary"],
      },
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "heading",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: "20px",
      "nev > a": {
        color: "heading",
      },
      ".donate__btn": {
        border: "0px solid",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    ml: "auto",
    mr: 6,
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "heading",
      px: 20,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      color: "heading",
      "&.active": {
        color: "primary",
      },
    },
  },
};
