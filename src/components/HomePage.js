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

function HomePage() {
  const { setAllowMenu } = useContext(F7Context);

  function pageIn() {
    setAllowMenu(false)
  }

  return (
    <Page onPageBeforeIn={pageIn}  style={{margin:'auto'}}  >
      <Link href="/search-page" animate={true} transition="f7-dive" >
        Go to search
      </Link>
    </Page>
  );
}

export default HomePage;