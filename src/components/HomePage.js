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
import SearchPageContent from "./SearchPageContent";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";
import { F7PanelContext } from "@root/F7PanelContext";
import marcobot from "@assets/marcobot_256.png";
import AppleLogin from "@components/AppleLogin";
import "@css/HomePage.css";

function HomePage() {
  const { setAllowLeftPanel } = useContext(F7PanelContext);

  function pageIn() {
    setAllowLeftPanel(false);
  }

  function afterPageOut() {
    setAllowLeftPanel(true);
  }

  return (
    <Page id="homePageRoot" onPageBeforeIn={pageIn} onPageAfterOut={afterPageOut}>
      <div id="homePageBody">
        <img id="logo" src={marcobot} alt="" />   
        <Link style={{ margin: "auto", marginTop: "1rem", marginBottom: "1rem" }} href="/search-page" animate={false} transition="f7-dive">
          Go
        </Link>
        <AppleLogin id="AppleLogin"/>
      </div>
    </Page>
  );
}

export default HomePage;
