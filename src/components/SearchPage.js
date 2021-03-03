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
import { F7Context } from "@root/F7Context";
import "@css/SearchPage.scss";


function SearchPage() {
  const { setHoldSearch } = useContext(SearchResultsContext);
  const { filtersPanelOpen, menuPanelOpen } = useContext(F7Context);

  function pageIn() {}

  function pageOut() {}

  return (
    <Page pageContent={false} onPageBeforeIn={pageIn} onPageAfterOut={pageOut} name="home">
      {/* Top Navbar */}
      <Navbar sliding={true}>
        {menuPanelOpen ? null : (
          <NavLeft>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
          </NavLeft>
        )}
        <NavTitle sliding>Marcobot</NavTitle>
        {filtersPanelOpen ? null : (
          <NavRight>
            <Link panelOpen="right">
              Filters
              <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" />
            </Link>
          </NavRight>
        )}
      </Navbar>
      <SearchPageContent />
    </Page>
  );
}

export default SearchPage;
