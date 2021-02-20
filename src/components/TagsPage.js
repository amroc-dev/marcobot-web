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

function TagsPage() {
  return (
    <>
      <Page>
        <Navbar sliding={true}>
          <NavLeft>
            <Link back style={{ width: "60px" }} transition="f7-parallax">
              <Icon size={"var(--gt-icon-size-large)"} f7="chevron_left" />
            </Link>
          </NavLeft>
          <NavTitle sliding>Tags</NavTitle>
        </Navbar>
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

export default TagsPage;
