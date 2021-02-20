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

import FilterTags from "./FilterTags"

function FiltersPage() {
  return (
    <>
      <Page>
        <Navbar sliding={true}>
          <NavLeft>
            <Link back style={{ width: "60px" }}>
              <Icon size={"var(--gt-icon-size-large)"} f7="chevron_left" />
            </Link>
          </NavLeft>
          <NavTitle sliding>Filters</NavTitle>
        </Navbar>
        {/* <List>
          <ListItem href="/tags-page/" title="Tags" transition="f7-parallax" />
        </List> */}
        <BlockTitle>Tags</BlockTitle>
        <FilterTags />
        <BlockTitle>Device</BlockTitle>
        <BlockTitle>Popularity</BlockTitle>
        <BlockTitle>Rating</BlockTitle>
        {/* <List>
          <ListItem link="/action-sheet/" title="Device" />
          <ListItem link="/badge/" title="Popularity" panelClose />
          <ListItem link="/buttons/" title="Rating" panelClose />
        </List> */}
      </Page>
    </>
  );
}

export default FiltersPage;
