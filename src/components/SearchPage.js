import React from "react";
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
} from "framework7-react";
import SearchPageContent from "./SearchPageContent";
import {TIF_Page} from "./TransitionInputFix";
import "@css/SearchPage.scss";

function SearchPage() {
  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar sliding={true}>
        <NavLeft>
          <Link iconIos="f7:menu" external iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>Marcobot</NavTitle>
        <NavRight>
          <Link href="/filters-page/">
            Filters
            <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" />
          </Link>
          {/* <Link panelOpen="right">Filters</Link> */}
        </NavRight>
      </Navbar>
      <SearchPageContent />
    </Page>
  );
}

export default SearchPage;
