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
  ListItemCell,
} from "framework7-react";
import SearchPageContent from "./SearchPageContent";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";
import { F7PanelContext } from "@root/F7PanelContext";
import { LeftPanelNavLink } from "@components/Misc";
import "@css/MenuPage.scss";

function SettingsPage() {

  return (
    <Page>
      <Navbar sliding={true}>
        <LeftPanelNavLink />
        <NavTitle sliding>Settings</NavTitle>
      </Navbar>
      Settings page here
    </Page>
  );
}

export default SettingsPage;
