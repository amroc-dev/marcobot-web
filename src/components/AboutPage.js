import React, { useContext } from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Icon,
  f7,
} from "framework7-react";
import { F7PanelContext } from "@root/F7PanelContext";
import marcobot from "@assets/marcobot_256.png";
import { AboutIcon } from "@components/Misc";
import "@css/DonatePage.css";
import "@css/HomePage.css";

function AboutPage() {
  const { setAllowLeftPanel } = useContext(F7PanelContext);

  function pageIn() {}

  function afterPageOut() {}

  return (
    <Page onPageBeforeIn={pageIn} onPageAfterOut={afterPageOut}>
      <Navbar>
        <NavTitle>
          About
          {/* <AboutIcon /> */}
        </NavTitle>
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>About page coming soon...</Block>
      <Block>Contact me at <Link href={"mailto:marco@marcobot.com"} external>marco@marcobot.com</Link>.</Block>
    </Page>
  );
}

export default AboutPage;
