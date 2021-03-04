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
} from "framework7-react";
import SearchPageContent from "./SearchPageContent";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";
import { F7Context } from "@root/F7Context";
import "@css/MenuPage.scss";

function MenuPage() {
  const { filtersPanelOpen } = useContext(F7Context);

  return (
    <Page >
      <Navbar sliding={true}>
        <NavTitle sliding>Menu</NavTitle>
      </Navbar>
    </Page>
  );
}

export default MenuPage;