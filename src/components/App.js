import React, { useState, useRef, useEffect, useContext } from "react";

import { f7, f7ready, App, Panel, View, Views, Page, Row, Col, Navbar, Block } from "framework7-react";

import { CoreContextProvider } from "@shared/react/CoreContext";
import { SearchContextProvider } from "@shared/react/SearchContext";
import { SearchResultsContextProvider } from "@shared/react/SearchResultsContext";
import { FilterTagsContextProvider } from "@shared/react/FilterTagsContext";
import { F7PanelContextProvider, LeftPanel, RightPanel } from "@root/F7PanelContext";
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

  const appRef = useRef()

  useEffect(() => {
    f7ready((f7) => {
      const test = appRef.current;
      const num = 5;
    })
  }, [])

  return (
    <App ref={appRef} id="marcobotApp" themeDark={false} colorTheme="blue" {...f7params}>
      <F7PanelContextProvider>
        <CoreContextProvider>
          <FilterTagsContextProvider>
            <SearchContextProvider>
              <SearchResultsContextProvider>
                <LeftPanel />
                <View id="appMainView" main stackPages animate={true} className="safe-areas" url="/" transition="f7-parallax" />
                <RightPanel />
              </SearchResultsContextProvider>
            </SearchContextProvider>
          </FilterTagsContextProvider>
        </CoreContextProvider>
      </F7PanelContextProvider>
    </App>
  );
}


export default MyApp;
