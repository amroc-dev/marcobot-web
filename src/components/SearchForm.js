import React, { useState, useRef } from "react";
import {
  Page,
  Searchbar,
  View,
  Row,
  Col,
  Block,
  List,
  ListItem,
  ListButton,
  Menu,
  MenuItem,
  Icon,
  MenuDropdown,
  MenuDropdownItem,
  Popover,
  Button,
} from "framework7-react";
import "../css/SearchForm.scss";
import "./LinkButton";
import ThemedButton from "./LinkButton";
import LinkButton from "./LinkButton";

function SearchForm(props) {

  return (
    <div className="rootContainer">
      <div>
      <Searchbar inline disableButton={false}></Searchbar>
      </div>
      <div className="sortRow">
        <div className="sortContainer">
          <div>Sort</div>

            <LinkButton popoverOpen=".popover-menu">
              Popularity
              <Icon size="var(--gt-icon-size)" style={{ paddingLeft: "0.25rem" }} f7="chevron_down" />
            </LinkButton>

          <Popover className="popover-menu sortPopover">
            <List>
              <ListItem link="#" noChevron popoverClose title="Popularity" />
              <ListItem link="#" noChevron popoverClose title="User rating" />
              <ListItem link="#" noChevron popoverClose title="Name" />
              <ListItem link="#" noChevron popoverClose title="Release date" />
            </List>
          </Popover>
          {/* <Menu iconColor="orange">
            <MenuItem text="Popularity" dropdown>
              <MenuDropdown right>
                <MenuDropdownItem href="#" text="Popularity" />
                <MenuDropdownItem href="#" text="User rating" />
                <MenuDropdownItem href="#" text="Name" />
                <MenuDropdownItem href="#" text="Release date" />
              </MenuDropdown>
            </MenuItem>
          </Menu> */}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
