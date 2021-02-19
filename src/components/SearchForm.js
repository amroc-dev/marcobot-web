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
import "./ThemedButton";
import ThemedButton from "./ThemedButton";

function SearchForm(props) {
  console.log(props.themeDark)
  console.log("wererererererer")
  return (
    <div className="rootContainer">
      <Searchbar inline></Searchbar>
      <div className="sortRow">
        <div className="sortContainer">
          <div>Sort</div>

            <ThemedButton popoverOpen=".popover-menu">
              Popularity
              <Icon size="1.1rem" style={{ paddingLeft: "0.5rem" }} f7="chevron_down" />
            </ThemedButton>

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
