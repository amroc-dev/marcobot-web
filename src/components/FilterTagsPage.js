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

function FilterTagsPage() {
  return (
    <>
      <Page>
        <Navbar sliding={true}>
          <NavLeft>
            <BackButton />
          </NavLeft>
          <NavTitle sliding>Tags</NavTitle>
        </Navbar>
        <FilterTags />
        {/* <List>
          <ListItem link="/accordion/" title="Tags" />
        </List>
        <BlockTitle>Device</BlockTitle>
        <List>
          <ListItem link="/action-sheet/" title="Device" />
          <ListItem link="/badge/" title="Popularity" panelClose />
          <ListItem link="/buttons/" title="Rating" panelClose />
        </List> */}
      </Page>
    </>
  );
}

export default FilterTagsPage;
