import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { numberWithCommas, clamp } from "@shared/react/Misc";
import "@css/FilterPopularity.css";
import { Page, Button, BlockTitle, Block, List, ListItem, ListItemCell, Range } from "framework7-react";

export const MIN_VAL = 0;
export const MAX_VAL = 5;

function FilterRating(props) {
  const { ratingFilter, setRatingFilter } = useContext(SearchContext);
  const [sliderVal, setSliderVal] = useState(0);


  useEffect(() => {
    setSliderVal(clamp(ratingFilter, MIN_VAL, MAX_VAL));
  }, [ratingFilter]);

  function onChange(val) {
    val = parseFloat(val).toFixed(1)
    setSliderVal(val);
  }

  function onChanged(val) {
    val = parseFloat(val).toFixed(1)
    if (val === 0) val = -1;
    setRatingFilter(val);
  }

  function getText() {
    let text = <div></div>;
    const val = sliderVal;
    if (val <= MIN_VAL) {
      text = (
        <div className="popTextContainer">
          <div className="popTextUnits">Any</div>
          <div className="popText"> rating</div>
        </div>
      );
    } else if (val < MAX_VAL) {
      text = (
        <div className="popTextContainer">
          <div className="popText">At least </div>
          <div className="popTextUnits">{val} ★</div>
        </div>
      );
    } else {
      text = (
        <div className="popTextContainer">
          <div className="popTextUnits">{val} ★</div>
        </div>
      );
    }
    return text;
  }

  return (
    <div>
      <BlockTitle>User Rating</BlockTitle>
      <List>
        <ListItemCell id="listItem" className="flex-shrink-3">
          {getText()}
          <Range className="popRange" style={{marginBottom: '0.6rem'}}
            value={sliderVal}
            min={MIN_VAL}
            max={MAX_VAL}
            step={0.1}
            scale={true}
            scaleSteps={5}
            // scaleSubSteps={2}
            formatScaleLabel={() => ""}
            // label={true}
            // formatLabel={(val) => String(parseFloat(val).toFixed(1))}
            onRangeChange={onChange}
            onRangeChanged={onChanged}
          />
        </ListItemCell>
      </List>
    </div>
  );
}

export default FilterRating;
