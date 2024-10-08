import React, { useContext, useEffect } from "react";
import {
  Page,
  PageContent,
  Panel,
  View,
  Navbar,
  NavLeft,
  NavTitle,
  Popup,
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
import { LeftPanelNavLink, RightPanelNavLink, DonateIcon, AboutIcon, MenuText } from "@components/Misc";
import logo from "@assets/marcobot_64.png";
import "@css/SearchPage.scss";
import "@css/App.scss";
import LinkButton from "./LinkButton";
import DonatePage from "@components/DonatePage";
import AboutPage from "@components/AboutPage";
import {event_Support, event_About} from "@root/analytics";

function SearchPage() {
  const { setHoldSearch } = useContext(SearchResultsContext);
  const { setAllowRightPanel } = useContext(F7PanelContext);

  function pageBeforeIn() {
    setAllowRightPanel(true);
  }

  function pageBeforeOut() {
    setAllowRightPanel(false);
  }

  return (
    <Page
      id="searchPageRoot"
      pageContent={false}
      onPageBeforeIn={pageBeforeIn}
      onPageBeforeOut={pageBeforeOut}
      name="home"
    >
      {/* Top Navbar */}
      <Navbar sliding={true}>
        <NavLeft>
          {/* <LeftPanelNavLink /> */}
     
            {/* <div style={{ display: "flex", padding: "0.25rem", paddingLeft: 0 }}> */}
              <Link popupOpen=".donatePagePopup" onClick={ () => event_Support()}>
                <DonateIcon />
              </Link>
              <Link popupOpen=".aboutPagePopup" onClick={ () => event_About()}>
                <MenuText>About</MenuText>
              </Link>
            {/* </div> */}
            {/* <div style={{ padding: "0.25rem" }}></div> */}
   
        </NavLeft>

        <Popup className="donatePagePopup">
          <DonatePage />
        </Popup>

        <Popup className="aboutPagePopup">
          <AboutPage />
        </Popup>

        <NavTitle sliding>
          {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            <Link href={document.location.pathname} external>
              <img src={logo} id="searchPageLogo" alt="" />
              {/* <div style={{ marginLeft: "0.25rem", color: "black" }}>Marcobot</div> */}
            </Link>
          {/* </div> */}
        </NavTitle>

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
