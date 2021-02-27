import React, { useEffect, useContext } from "react";
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

import FilterDevice from "./FilterDevice";
import FilterPopularity from "./FilterPopularity";
import FilterRating from "./FilterRating";
import { GTPage } from "./Misc";
import { BackButton } from "./Misc";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";

function FiltersPage() {
  const { setHoldSearch } = useContext(SearchResultsContext);

  return (
    <Page onPageAfterIn={() => setHoldSearch(true)}>
      <Navbar sliding={true}>
        <NavLeft>
          <BackButton />
        </NavLeft>
        <NavTitle sliding>Filters</NavTitle>
      </Navbar>
      <List>
        <ListItem link="/filter-tags-page/" title="Tags" />
      </List>
      <FilterDevice />
      <FilterPopularity />
      <FilterRating />
    </Page>
  );
}

export default FiltersPage;
