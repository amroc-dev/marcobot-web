import React, { useState, useRef, useEffect } from "react";

import { f7, f7ready, App, Panel, View, Page } from "framework7-react";

import { CoreContextProvider } from "@shared/react/CoreContext";
import { SearchContextProvider } from "@shared/react/SearchContext";
import { SearchResultsContextProvider } from "@shared/react/SearchResultsContext";
import { FilterTagsContextProvider } from "@shared/react/FilterTagsContext";
import routes from "@root/routes";
import store from "@root/store";

import "@css/App.scss";

import "@root/inobounce.js";

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
      touchClicksDistanceThreshold: 20,
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
              <Page id="app">
                <Panel left cover backdrop swipe swipeOnlyClose>
                  <View>
                    <Page></Page>
                  </View>
                </Panel>

                {/* <Panel right cover swipe swipeOnlyClose containerEl="app" id="panel-nested">
              <View url="/filters-page/">
              </View>
            </Panel> */}

                <View main stackPages animate={true} className="safe-areas" url="/" transition="f7-parallax" />
              </Page>
            </SearchResultsContextProvider>
          </SearchContextProvider>
        </FilterTagsContextProvider>
      </CoreContextProvider>
    </App>
  );
}

export default MyApp;
