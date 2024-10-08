import React, { useState, useRef, useEffect, useContext } from "react";

import { f7, f7ready, App, Panel, View, Views, Page, Row, Col, Navbar, Block } from "framework7-react";

import { CoreContextProvider } from "@shared/react/CoreContext";
import { SearchContextProvider } from "@shared/react/SearchContext";
import { SearchResultsContextProvider } from "@shared/react/SearchResultsContext";
import { FilterTagsContextProvider } from "@shared/react/FilterTagsContext";
import { F7PanelContextProvider, LeftPanel, RightPanel } from "@root/F7PanelContext";
import routes from "@root/routes";
import store from "@root/store";
import Vectrex from '@fonts/Vectrex.ttf';

import "@css/App.scss";

require("dotenv").config();

// import "@root/inobounce.js";

function MyApp() {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Framework7 Parameters
  const f7params = {
    name: "Marcobot", // App name
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
    // f7.$('body').css({
    //   maxWidth: "800px"
    // })
  });

  useEffect(() => {
    f7ready((f7) => {});
  }, []);

  return (
    <App id="marcobotApp" themeDark={false} colorTheme="blue" {...f7params}>
      <F7PanelContextProvider>
        <CoreContextProvider>
          <FilterTagsContextProvider>
            <SearchContextProvider>
              <SearchResultsContextProvider>
                {/* <LeftPanel /> */}
                <View id="appMainView" main stackPages animate={false} className="safe-areas" url="/" />
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
