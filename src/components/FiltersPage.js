import React from "react";
import { Page, BlockTitle, Block, List, ListItem, Link, Navbar } from "framework7-react";

function FiltersPage() {
  return (
    <>
      <Page>
        <BlockTitle>Filters</BlockTitle>
        <BlockTitle>Main View Navigation</BlockTitle>
        <List>
          <ListItem link="/accordion/" title="Tags" panelClose />
          <ListItem link="/action-sheet/" title="Device" panelClose />
          <ListItem link="/badge/" title="Popularity" panelClose />
          <ListItem link="/buttons/" title="Rating" panelClose />
        </List>
      </Page>
    </>
  );
}

export default FiltersPage;
