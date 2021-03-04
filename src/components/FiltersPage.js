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
  Subnavbar,
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
    <Page withSubnavbar id="pageRoot">
      <Subnavbar sliding>
        <div style={{margin:"auto", fontWeight:"bold"}}>
        Filters
        </div>
        {/* <Navbar sliding={true}>
          <NavTitle style={{ fontWeight: "400" }} sliding>
            Filters
          </NavTitle>
        </Navbar> */}
      </Subnavbar>

      <List>
        <ListItem link="/filter-tags-page/" title="Tags" transition="f7-parallax" />
      </List>
      <FilterDevice />
      <FilterPopularity />
      {/* <FilterRating /> */}
    </Page>
  );
}

export default FiltersPage;
