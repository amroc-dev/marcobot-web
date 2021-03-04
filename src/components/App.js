import React, { useState, useRef, useEffect, useContext } from "react";

import { f7, f7ready, App, Panel, View, Views, Page, Row, Col, Navbar, Block } from "framework7-react";

import { CoreContextProvider } from "@shared/react/CoreContext";
import { SearchContextProvider } from "@shared/react/SearchContext";
import { SearchResultsContextProvider } from "@shared/react/SearchResultsContext";
import { FilterTagsContextProvider } from "@shared/react/FilterTagsContext";
import { F7ContextProvider, F7Context } from "@root/F7Context";
import routes from "@root/routes";
import store from "@root/store";

import "@css/App.scss";

// import "@root/inobounce.js";

function MyApp() {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Framework7 Parameters
  const f7params = {
    name: "marcobot-site", // App name
    theme: "aurora", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker

    touch: {
      // Enable fast clicks
      fastClicks: true,
      touchClicksDistanceThreshold: 30,
    },
  };
  const alertLoginData = () => {
    f7.dialog.alert("Username: " + username + "<br>Password: " + password, () => {
      f7.loginScreen.close();
    });
  };
  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App id="marcobotApp" themeDark={false} colorTheme="blue" {...f7params}>
      <F7ContextProvider>
        <CoreContextProvider>
          <FilterTagsContextProvider>
            <SearchContextProvider>
              <SearchResultsContextProvider>
                {/* <LeftPanel /> */}
                <View main stackPages animate={true} className="safe-areas" url="/" transition="f7-parallax" />
                {/* <RightPanel /> */}
              </SearchResultsContextProvider>
            </SearchContextProvider>
          </FilterTagsContextProvider>
        </CoreContextProvider>
      </F7ContextProvider>
    </App>
  );
}

export function LeftPanel(props) {
  const { setMenuPanelOpen } = useContext(F7Context);
  
  return (
    <Panel
      id="marcobotLeftPanel"
      style={{ width: "200px" }}
      left
      cover
      swipe
      swipeOnlyClose
      visibleBreakpoint={1280}
      onPanelBreakpoint={(e) => setMenuPanelOpen(e.opened)}
      transition="f7-parallax"
      {...props}
    >
      <View url="/menu-page/"></View>
    </Panel>
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

export default MyApp;
