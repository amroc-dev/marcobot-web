import React from "react";
import {
  Page,
  BlockTitle,
  Block,
  List,
  ListItem,
  Link,
  Navbar,
  NavTitle,
  NavLeft,
  NavRight,
  Icon,
} from "framework7-react";

import FilterTags from "./FilterTags";
import {TIF_Page} from "./TransitionInputFix";
import { BackButton } from "./Misc";

function FiltersPage() {
  return (
    <Page>
      <Navbar sliding={true}>
        <NavLeft>
          <BackButton />
        </NavLeft>
        <NavTitle sliding>Filters</NavTitle>
      </Navbar>
      <List>
        <ListItem href="/filter-tags-page/" title="Tags" />
      </List>
      {/* <BlockTitle>Tags</BlockTitle>
        <FilterTags /> */}
      <BlockTitle>Device</BlockTitle>
      <BlockTitle>Popularity</BlockTitle>
      <BlockTitle>Rating</BlockTitle>
      {/* <List>
          <ListItem link="/action-sheet/" title="Device" />
          <ListItem link="/badge/" title="Popularity" panelClose />
          <ListItem link="/buttons/" title="Rating" panelClose />
        </List> */}
    </Page>
  );
}

export default FiltersPage;
