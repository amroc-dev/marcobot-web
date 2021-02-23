import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Page,
  Button,
  BlockTitle,
  Block,
  List,
  ListItem,
  Subnavbar,
  Searchbar,
  Swiper,
  SwiperSlide,
  Popover,
  Icon,
  Link,
  Chip,
  Row,
  Col,
  Menu,
  MenuItem,
  MenuDropdown,
  MenuDropdownItem,
} from "framework7-react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { FilterTagsContext } from "@shared/react/FilterTagsContext";
import LinkButton from "./LinkButton";
import "@css/FilterTags.css";
import "@css/SortControl.scss";

function FilterTags(props) {
  const { tags } = useContext(CoreContext);
  const { searchTags, addSearchTag, removeSearchTag } = useContext(SearchContext);
  const { tagSearchField, setTagSearchField } = useContext(FilterTagsContext);
  const [filteredTags, setFilteredTags] = useState([]);
  const [vlData, setVlData] = useState({
    items: [],
  });

  useEffect(() => {
    if (!tags) {
      return;
    }

    let filtered = [];
    tags.map((t) => {
      if (tagSearchField.length === 0) filtered.push(t);
      else if (t.name.toLowerCase().startsWith(tagSearchField.toLowerCase())) filtered.push(t);
      return null;
    });

    setFilteredTags(filtered);
  }, [tagSearchField, tags]);

  const searchAll = (query, searchItems) => {
    const found = [];
    for (let i = 0; i < searchItems.length; i += 1) {
      if (searchItems[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === "") found.push(i);
    }
    return found; // return array with mathced indexes
  };

  // function getListItems() {
  //   const elems = filteredTags.map((t, index) => (
  //     <ListItem virtualListIndex={index} key={index} title={t.name} after={t.count} checkbox></ListItem>
  //   ));

  //   return elems;
  // }

  const renderExternal = (vl, newData) => {
    setVlData({ ...newData });
  };

  return (
    <>
      {/* <Subnavbar inner={false}>
        <Searchbar searchContainer=".virtual-list" searchItem="li" searchIn=".item-title" />
      </Subnavbar> */}
      <div id="topContainer">
        <Searchbar inline disableButton={false} searchContainer=".tags-list"
            // searchItem="li"
            searchIn=".item-title" />
        <div className="sortRow" style={{ marginBottom: "0.5rem" }}>
          <div className="sortContainer">
            <div>Sort</div>
            <LinkButton popoverOpen=".popover-menu">
              Popularity
              {/* <Icon size="var(--gt-icon-size)" style={{ paddingLeft: "0.25rem" }} f7="chevron_down" /> */}
            </LinkButton>
            <Popover className="popover-menu sortPopover">
              <List>
                <ListItem link="#" noChevron popoverClose title="Popularity" />
                <ListItem link="#" noChevron popoverClose title="Name" />
              </List>
            </Popover>
          </div>
        </div>
      </div>
      <List className="tags-list searchbar-found" style={{ marginTop: "0rem" }}
        virtualList
        virtualListParams={{
          items: tags,
          searchAll,
          renderExternal,
          height: 48,
        }}
      >
        <ul>
          {vlData.items.map((item, index) => (
            <ListItem
              virtualListIndex={tags.indexOf(item)}
              key={index}
              title={item.name}
              after={item.count}
              style={{ top: `${vlData.topPosition}px` }}
              checkbox
            />
          ))}
        </ul>
      </List>
    </>
  );
}

export default FilterTags;
