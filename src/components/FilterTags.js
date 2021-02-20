import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "../shared/react/CoreContext";
import { SearchContext } from "../shared/react/SearchContext";
import { FilterTagsContext } from "../shared/react/FilterTagsContext";
import { Page, Button, BlockTitle, Block, List, ListItem, Link, Swiper, SwiperSlide, Chip } from "framework7-react";

function FilterTags(props) {
  const { tags } = useContext(CoreContext);
  const { searchTags, addSearchTag, removeSearchTag } = useContext(SearchContext);
  const { tagSearchField, setTagSearchField } = useContext(FilterTagsContext);
  const [tagColumns, setTagColumns] = useState([]);

  useEffect(() => {
    if (!tags) {
      return;
    }

    let groups = [];
    tags.map((t) => {
      if (groups.length === 0 || groups[groups.length - 1].length === 10) {
        groups.push([]);
      }

      const currentGroup = groups[groups.length - 1];

      if (tagSearchField.length === 0) currentGroup.push(t);
      else if (t.name.toLowerCase().startsWith(tagSearchField.toLowerCase())) currentGroup.push(t);
      return null;
    });

    if (groups.length > 1 && groups[groups.length - 1].length === 0) {
      groups.pop();
    }

    let sliders = [];
    groups.map((g) => {
      const chips = g.map((tag) => (
        <Chip>
          <Link color="black">{tag}</Link>
        </Chip>
      ));

      const slider = (
        <SwiperSlide style={{ padding: "1rem" }}>
          <List style={{ display: "inline-flex", flexDirection: "column" }}>test</List>
        </SwiperSlide>
      );

      sliders.push(slider);
      return null;
    });

    setTagColumns(sliders);
  }, [tagSearchField, tags]);

  return (
    <>
      <Block strong style={{ padding: "0" }}>
        <Swiper>
          {tagColumns}
          {/* <SwiperSlide style={{ padding: "1rem" }}>
            <List style={{ display: "inline-flex", flexDirection: "column" }}>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
              <Chip>
                <Link color="black">test</Link>
              </Chip>
            </List>
          </SwiperSlide> */}
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Block>
    </>
  );
}

export default FilterTags;
