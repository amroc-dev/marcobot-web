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
  Popup,
  Subnavbar,
  Icon,
} from "framework7-react";

import FilterDevice from "./FilterDevice";
import FilterPopularity from "./FilterPopularity";
import FilterRating from "./FilterRating";
import { GTPage } from "./Misc";
import { BackButton, AboutIcon } from "./Misc";
import AboutPage from "@components/AboutPage";
import LinkButton from "@components/LinkButton";
import "@css/FiltersPage.css";

function FiltersPage() {
  function pageBeforeIn() {}

  function pageAfterOut() {}

  return (
    <Page onPageBeforeIn={pageBeforeIn} onPageBeforeOut={pageAfterOut} id="pageRoot">
      {/* <Subnavbar sliding>
        <div style={{margin:"auto", fontWeight:"bold"}}>
        Filters
        </div> */}
      <Navbar sliding={true}>
        {/* <NavRight>
          <Link popupOpen=".aboutPagePopup">
            <AboutIcon />
          </Link>
        </NavRight> */}
        <NavTitle style={{ fontWeight: "400" }} sliding>
          Filters
        </NavTitle>
      </Navbar>
      {/* </Subnavbar> */}

      {/* <Popup className="aboutPagePopup">
        <AboutPage />
      </Popup> */}

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
