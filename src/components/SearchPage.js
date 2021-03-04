import React, { useContext, useEffect } from "react";
import {
  Page,
  Panel,
  View,
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
import "@css/App.scss";

function SearchPage() {
  const { setHoldSearch } = useContext(SearchResultsContext);
  const { filtersPanelOpen, menuPanelOpen, setAllowMenu } = useContext(F7Context);

  function pageIn() {
    setAllowMenu(true)
  }

  function pageOut() {}

  return (
      <Page id="searchPageRoot" pageContent={false} onPageBeforeIn={pageIn} onPageAfterOut={pageOut} name="home">
        {/* Top Navbar */}
        <Navbar sliding={true}>
          {menuPanelOpen ? null : (
            <NavLeft>
              <Link iconF7="line_horizontal_3" panelOpen="left" />
            </NavLeft>
          )}
          <NavTitle sliding>Marcobot</NavTitle>
          {filtersPanelOpen ? null : (
            <NavRight>
              <Link panelOpen="right">
                Filters
                {/* <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" /> */}
              </Link>
            </NavRight>
          )}
        </Navbar>
        <SearchPageContent id="tits" />
        <RightPanel containerEl="#searchPageRoot"/>
      </Page>
  );
}

export function RightPanel(props) {
  const { setFiltersPanelOpen } = useContext(F7Context);

  return (
    <Panel
      id="marcobotRightPanel"
      right
      cover
      swipe
      swipeOnlyClose
      visibleBreakpoint={900}
      onPanelBreakpoint={(e) => setFiltersPanelOpen(e.opened)}
      transition="f7-parallax"
      {...props}
    >
      <View url="/filters-page/"></View>
    </Panel>
  );
}


export default SearchPage;
