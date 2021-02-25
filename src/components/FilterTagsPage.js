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
  Navbar,
  NavLeft,
  NavTitle,
  f7,
} from "framework7-react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { FilterTagsContext } from "@shared/react/FilterTagsContext";
import LinkButton from "./LinkButton";
import { BackButton, SearchbarFixed } from "./Misc";
import "@css/FilterTags.css";
import "@css/SortControl.scss";
import { fireEvent } from "@testing-library/dom";

function FilterTagsPage(props) {
  const { tags } = useContext(CoreContext);
  const [sortedTags, setSortedTags] = useState([...tags]);
  const { searchTags, addSearchTag, removeSearchTag } = useContext(SearchContext);
  // const { tagSearchField, setTagSearchField } = useContext(FilterTagsContext);
  const [vlData, setVlData] = useState({
    items: [],
  });
  const listRef = useRef();
  const searchbarRef = useRef();
  const [searchbarVal, setSearchbarVal] = useState("");
  const [sortVal, setSortVal] = useState('Popularity')

  useEffect(() => {
    if (!tags) {
      return;
    }

    setSortedTags([...tags]);
  }, [tags]);

  function setSortType(sortType) {
    setSortVal(sortType)
    let sorted = [...tags];
    if (sortType === "Popularity") {
      sorted.sort( (a,b) => (a.count > b.count) ? -1 : 1 )
    }
    else if (sortType === "Name") {
      sorted.sort( (a,b) => a.name.localeCompare(b.name) )
    }
    setSortedTags(sorted);
    listRef.current.f7VirtualList().replaceAllItems(sorted)
    searchbarRef.current.f7Searchbar().clear();
    searchbarRef.current.f7Searchbar().disable();
    searchbarRef.current.f7Searchbar().search(searchbarVal);
  }

  const searchAll = (query, searchItems) => {
    setSearchbarVal(query)
    const found = [];
    for (let i = 0; i < searchItems.length; i += 1) {
      if (searchItems[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === "") found.push(i);
    }
    return found;
  };

  const renderExternal = (vl, newData) => {
    setVlData({ ...newData });
  };

  return (
    <Page>
      <Navbar sliding={true}>
        <NavLeft>
          <BackButton />
        </NavLeft>
        <NavTitle sliding>Tags</NavTitle>
      </Navbar>

      <div id="topContainer">
        <SearchbarFixed
          placeholder={"Search " + tags.length + " tags"}
          ref = {searchbarRef}
          inline
          searchContainer=".tags-list"
          searchIn=".item-title"
        />
        <div className="sortRow" style={{ marginBottom: "0.5rem" }}>
          <div className="sortContainer">
            <div>Sort</div>
            <LinkButton popoverOpen=".popover-menu">
              {sortVal}
              {/* <Icon size="var(--gt-icon-size)" style={{ paddingLeft: "0.25rem" }} f7="chevron_down" /> */}
            </LinkButton>
            <Popover className="popover-menu sortPopover">
              <List>
                <ListItem link="#" onClick={() => setSortType("Popularity")} noChevron popoverClose title="Popularity" />
                <ListItem link="#" onClick={() => setSortType("Name")} noChevron popoverClose title="Name" />
              </List>
            </Popover>
          </div>
        </div>
      </div>
      <List style={{ marginTop: "0rem" }} className="searchbar-not-found">
        <ListItem title="No results" />
      </List>
      <List
        ref = {listRef}
        className="tags-list searchbar-found"
        style={{ marginTop: "0rem" }}
        virtualList
        virtualListParams={{
          items: sortedTags,
          searchAll,
          renderExternal,
          height: 48,
        }}
      >
        <ul>
          {vlData.items.map((item, index) => (
            <ListItem
              // virtualListIndex={sortedTags.indexOf(item)}
              key={index}
              title={item.name}
              after={item.count}
              style={{ top: `${vlData.topPosition}px` }}
              checkbox
              checked={searchTags.includes(item.name)}
              onClick={() => searchTags.includes(item.name) ? removeSearchTag(item.name) : addSearchTag(item.name)}
            />
          ))}
        </ul>
      </List>
    </Page>
  );
}

export default FilterTagsPage;
