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
import "@css/MenuPage.scss";

function MenuPage() {
  return (
    <Page>
      {/* <Navbar sliding={true}>
        <NavTitle sliding>Menu</NavTitle>
      </Navbar> */}
      <Block inset>
        <MenuLink href="/" view="#appMainView">
          Splash
        </MenuLink>
      </Block>
      <Block inset>
        <MenuLink href="/search-page">Search</MenuLink>
      </Block>
      <Block inset>
        <MenuLink href="/settings-page">Settings</MenuLink>
      </Block>
    </Page>
  );
}

function MenuLink(props) {
  const { closeLeftPanel } = useContext(F7PanelContext);

  return (
    <Link
      animate={false}
      transition={"f7-fade"}
      view="#appMainView"
      onClick={() => {
        closeLeftPanel();
      }}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default MenuPage;
