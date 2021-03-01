import React, { useState, useRef, useEffect } from "react";

import { f7, f7ready, App, Panel, View, Views, Page, Row, Col } from "framework7-react";

import { CoreContextProvider } from "@shared/react/CoreContext";
import { SearchContextProvider } from "@shared/react/SearchContext";
import { SearchResultsContextProvider } from "@shared/react/SearchResultsContext";
import { FilterTagsContextProvider } from "@shared/react/FilterTagsContext";
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
    <App themeDark={false} colorTheme="blue" {...f7params}>
      <CoreContextProvider>
        <FilterTagsContextProvider>
          <SearchContextProvider>
            <SearchResultsContextProvider>
              <Panel left cover backdrop swipe swipeOnlyClose>
                <View>
                  <Page></Page>
                </View>
              </Panel>

              <View main stackPages animate={true} className="safe-areas" url="/" transition="f7-parallax" />
{/* 
              <Panel
                style={{ width: "300px" }}
                right
                cover
                swipe
                swipeOnlyClose
                containerEl="app"
                visibleBreakpoint={20}
                transition="f7-parallax" 
                id="panel-nested"
              >
                <View url="/filters-page/"></View>
              </Panel> */}
              
            </SearchResultsContextProvider>
          </SearchContextProvider>
        </FilterTagsContextProvider>
      </CoreContextProvider>
    </App>
  );
}

export default MyApp;
