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

function FiltersPage() {
  return (
    <>
      <Page>
        <Navbar sliding={true}>
          <NavLeft>
          <Link back>
            <Icon size={'var(--gt-icon-size-large)'} f7="chevron_left" />
            </Link>
          </NavLeft>
          <NavTitle sliding>Filters</NavTitle>
        </Navbar>
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
