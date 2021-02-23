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
  Subnavbar,
  Searchbar,
  Icon,
} from "framework7-react";

import FilterTags from "./FilterTags";
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
      </Page>
    </>
  );
}

export default FilterTagsPage;
