import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import "@css/FilterTags.css";
import {
  Page,
  Button,
  BlockTitle,
  Block,
  List,
  ListItem,
  Swiper,
  SwiperSlide,
  Link,
  Chip,
  Row,
  Col,
} from "framework7-react";

function FilterDevice(props) {
  const { deviceFilter, toggleDeviceFilter } = useContext(SearchContext);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const filter = { ...deviceFilter };
    const items = [];
    Object.keys(filter).forEach((key) => {
      items.push(
        <ListItem 
          key={items.length} 
          checkbox
          checked={filter[key]}
          onClick={ () => toggleDeviceFilter(key)}>
            {key}
        </ListItem>
      );
    });

    setListItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceFilter]);

  return (
    <>
      <BlockTitle>Device</BlockTitle>
      <List>{listItems}</List>
    </>
  );
}

export default FilterDevice;
