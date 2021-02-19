import React, { useState, useEffect } from "react";

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
} from "framework7-react";

import { SearchContextProvider } from "./shared/react/SearchContext";
import { SearchResultsContextProvider } from "./shared/react/SearchResultsContext";

import routes from "./routes";
import store from "./store";

import './css/app.scss';

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

    // serviceWorker: {
    //   path: "/service-worker.js",
    // },
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
    <App themeDark={false} colorTheme="orange" {...f7params}>
      <SearchContextProvider>
        <SearchResultsContextProvider>
          <Page id="app">
            
            <Panel left cover backdrop swipe swipeOnlyClose>
              <View>
                <Page>
                  <Navbar title="Left Panel" />
                  <Block></Block>
                </Page>
              </View>
            </Panel>

            <Panel right cover swipe swipeOnlyClose containerEl="app" id="panel-nested">
              <View url="/filters-page/">
                {/* <Page>
                  <Navbar title="Filters" />
                </Page> */}
              </View>
            </Panel>

            <View main className="safe-areas" url="/" />

          </Page>
        </SearchResultsContextProvider>
      </SearchContextProvider>
    </App>
  );
}

export default MyApp;
