import React, { useState, useRef, useContext, useEffect } from "react";
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
import "@css/SortControl.scss";
import ThemedButton from "./LinkButton";
import LinkButton from "./LinkButton";
import { SearchContext } from "@shared/react/SearchContext";
import { sortOptions } from "@shared/react/SortOptions";
import { SearchbarFixed } from "@components/Misc";

function SearchForm(props) {
  const { sortOption, updateSortOption } = useContext(SearchContext);

  return (
    <div className="rootContainer">
      <div>
        <SearchbarFixed inline placeholder={"Search for name or tag"} />
      </div>
      <div className="sortRow">
        <div className="sortContainer">
          <div>Sort</div>
          {/* <Menu>
              <MenuItem text="Popularity" dropdown>
                <MenuDropdown right>
                  <MenuDropdownItem href="#" text="Popularity" />
                  <MenuDropdownItem href="#" text="User rating" />
                  <MenuDropdownItem href="#" text="Name" />
                  <MenuDropdownItem href="#" text="Release date" />
                </MenuDropdown>
              </MenuItem>
            </Menu> */}
          <LinkButton popoverOpen=".popover-menu">
            {sortOption}
            {/* <Icon size="var(--gt-icon-size)" style={{ paddingLeft: "0.25rem" }} f7="chevron_down" /> */}
          </LinkButton>
          <Popover className="popover-menu sortPopover">
            <List>
              <ListItem
                link="#"
                onClick={() => updateSortOption(sortOptions.popularity)}
                noChevron
                popoverClose
                title={sortOptions.popularity}
              />
              <ListItem
                link="#"
                onClick={() => updateSortOption(sortOptions.userRating)}
                noChevron
                popoverClose
                title={sortOptions.userRating}
              />
              <ListItem
                link="#"
                onClick={() => updateSortOption(sortOptions.name)}
                noChevron
                popoverClose
                title={sortOptions.name}
              />
              <ListItem
                link="#"
                onClick={() => updateSortOption(sortOptions.releaseDate)}
                noChevron
                popoverClose
                title={sortOptions.releaseDate}
              />
            </List>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
