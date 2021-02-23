import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import "@css/FilterTags.css";
import { Page, Button, BlockTitle, Block, List, ListItem, Swiper, SwiperSlide, Link, Chip, Row, Col } from "framework7-react";

function FilterRating(props) {

  return (
    <>
      <BlockTitle>User Rating</BlockTitle>
        <List>
          <ListItem checkbox>Todo</ListItem>
        </List>
    </>
  );
}

export default FilterRating;