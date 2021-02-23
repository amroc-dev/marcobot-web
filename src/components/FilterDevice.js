import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import "@css/FilterTags.css";
import { Page, Button, BlockTitle, Block, List, ListItem, Swiper, SwiperSlide, Link, Chip, Row, Col } from "framework7-react";

function FilterDevice(props) {

  return (
    <>
      <BlockTitle>Device</BlockTitle>
        <List>
          <ListItem checkbox>iPhone</ListItem>
          <ListItem checkbox>iPad</ListItem>
          <ListItem checkbox>tvOS</ListItem>
          <ListItem checkbox>watch</ListItem>
        </List>
    </>
  );
}

export default FilterDevice;