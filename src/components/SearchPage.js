import React, { useContext, useEffect } from "react";
import {
  Page,
  PageContent,
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
import { F7PanelContext } from "@root/F7PanelContext";
import { LeftPanelNavLink, RightPanelNavLink } from "@components/Misc";
import "@css/SearchPage.scss";
import "@css/App.scss";

function SearchPage() {
  const { setHoldSearch } = useContext(SearchResultsContext);
  const { rightPanelOpen, setAllowRightPanel, openRightPanel } = useContext(F7PanelContext);

  function pageBeforeIn() {
    setAllowRightPanel(true);
  }

  function pageBeforeOut() {
    setAllowRightPanel(false);
  }

  return (
    <Page id="searchPageRoot" pageContent={false} onPageBeforeIn={pageBeforeIn} onPageBeforeOut={pageBeforeOut} name="home">
      {/* Top Navbar */}
      <Navbar sliding={true}>
        <LeftPanelNavLink />
        <NavTitle sliding>Marcobot</NavTitle>
        <RightPanelNavLink>Filters</RightPanelNavLink>
      </Navbar>
      <SearchPageContent />
      {/* <RightPanel containerEl="#searchPageRoot"/> */}
    </Page>
  );
}

// export function RightPanel(props) {
//   const { setFiltersPanelOpen } = useContext(F7PanelContext);

//   return (
//     <Panel
//       id="marcobotRightPanel"
//       right
//       cover
//       swipe
//       swipeOnlyClose
//       visibleBreakpoint={900}
//       onPanelBreakpoint={(e) => setFiltersPanelOpen(e.opened)}
//       transition="f7-parallax"
//       {...props}
//     >
//       <View url="/filters-page/"></View>
//     </Panel>
//   );
// }

export default SearchPage;
