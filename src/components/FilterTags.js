import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { FilterTagsContext } from "@shared/react/FilterTagsContext";
import "@css/FilterTags.css";
import { Page, Button, BlockTitle, Block, List, ListItem, Swiper, SwiperSlide, Link, Chip, Row, Col } from "framework7-react";

function FilterTags(props) {
  const { tags } = useContext(CoreContext);
  const { searchTags, addSearchTag, removeSearchTag } = useContext(SearchContext);
  const { tagSearchField, setTagSearchField } = useContext(FilterTagsContext);
  const [filteredTags, setFilteredTags] = useState([]);

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

  function getListItems() {
    return filteredTags.map((t, index) => (
      <ListItem key={index} title={t.name} after={t.count} checkbox >
      </ListItem>
    ));
  }

  return (
    <>
      <Block strong style={{ padding: "0" }}>
        <List>{getListItems()}</List>
      </Block>
    </>
  );
}

export default FilterTags;

// let filtr = [];
// tags.map((t) => {
//   if (groups.length === 0 || groups[groups.length - 1].length === 10) {
//     groups.push([]);
//   }

//   const currentGroup = groups[groups.length - 1];

//   if (tagSearchField.length === 0) currentGroup.push(t);
//   else if (t.name.toLowerCase().startsWith(tagSearchField.toLowerCase())) currentGroup.push(t);
//   return null;
// });

// if (groups.length > 1 && groups[groups.length - 1].length === 0) {
//   groups.pop();
// }

// let sliders = [];
// groups.map((g, index) => {
//   const chips = g.map((tag) => (
//     <Chip>
//       <Link color="black">{tag}</Link>
//     </Chip>
//   ));

//   const slider = (
//     <SwiperSlide virtualIndex={index} key={sliders.length} style={{ padding: "1rem" }}>
//       Slide
//       {/* <List style={{ display: "inline-flex", flexDirection: "column" }}>{sliders.length}</List> */}
//     </SwiperSlide>
//   );

//   sliders.push(slider);
//   return null;
// });

// setTagColumns(sliders);
// }, [tagSearchField, tags]);

// function renderSlide(slide, index) {
// console.log('render')
// }

// return (
// <>
//   <Block strong style={{ padding: "0" }}>
//     <Swiper spaceBetween={50} slidesPerView={3} virtual={{slides: tagColumns, renderSlide: renderSlide}}>
//       {tagColumns}
//     </Swiper>
//   </Block>
// </>
// );
