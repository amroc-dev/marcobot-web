import React, { useEffect } from "react";
import {
  Page,
  Panel,
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

import FilterDevice from "./FilterDevice";
import FilterPopularity from "./FilterPopularity";
import FilterRating from "./FilterRating";
import { GTPage } from "./Misc";
import { BackButton } from "./Misc";
import "@css/FiltersPage.css";

function FiltersPage() {
  return (
    <Page id="pageRoot">
      <Navbar sliding={true}>
        <NavTitle sliding>Filters</NavTitle>
      </Navbar>
      <List>
        <ListItem link="/filter-tags-page/" title="Tags" transition="f7-push" />
      </List>
      <FilterDevice />
      <FilterPopularity />
      <FilterRating />
    </Page>
  );
}

export default FiltersPage;
