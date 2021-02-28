import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { numberWithCommas } from "@shared/react/Misc";
import "@css/FilterPopularity.css";
import { Page, Button, BlockTitle, Block, List, ListItem, ListItemCell, Range } from "framework7-react";

function FilterRating(props) {
  const { ratingFilter, setRatingFilter } = useContext(SearchContext);
  const [sliderVal, setSliderVal] = useState(0);
  

  function onChange(vals) {
    setSliderVal(vals[0]);
  }

  function onChanged(val) {
    if (val === 0)
      val = -1;

    setRatingFilter(val);
  }


  return (
    <div>
      <BlockTitle>User Rating</BlockTitle>
      <List>
        <ListItemCell id="listItem" className="flex-shrink-3">
          <Range 
            rippleColor='gray'
            className="popRange"
            min={0}
            max={5}
            step={0.1}
            // value={[sliderVal.min, sliderVal.max]}
            label={true}
            formatLabel={ val => String(parseFloat(val).toFixed(1))}
            // limitKnobPosition
            // color="green"
            onRangeChange={onChange}
            onRangeChanged={onChanged}
          />
        </ListItemCell>
      </List>
      </div>
  );
}

export default FilterRating;
