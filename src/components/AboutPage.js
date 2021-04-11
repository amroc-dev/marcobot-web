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
import marcobot from "@assets/marcobot_512.png";
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
      <Block>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={marcobot}
            style={{ width: "128px", height: "128px", marginRight: "1rem", borderRadius: "12px" }}
            alt=""
          />
          Marcobot is a small search engine for 'pay once' App Store games: games that have no in-app purchases.
        </div>
      </Block>
      <Block>More info soon.</Block>
      <Block>
        <Link href={"mailto:marco@marcobot.com"} external>
          marco@marcobot.com
        </Link>
      </Block>
      <Block style={{ fontSize: "12px" }}>
        Marcobot doesn't collect or store any sort of personal data at all. Not even cookies are used on this site so
        that means I don't have to include any stupid popups.
      </Block>
    </Page>
  );
}

export default AboutPage;
