import React, { useContext, useState, useEffect, useRef } from "react";
import { CoreContext } from "@shared/react/CoreContext";
import { SearchContext } from "@shared/react/SearchContext";
import { numberWithCommas } from "@shared/react/Misc";
import "@css/FilterPopularity.css";
import { Page, Button, BlockTitle, Block, List, ListItem, ListItemCell, Range } from "framework7-react";

function FilterPopularity(props) {
  const { popularityIntervals } = useContext(CoreContext);
  const { popularityFilter, setPopularityFilter } = useContext(SearchContext);
  const [sliderVal, setSliderVal] = useState({ min: 0, max: 0 });
  const rangeRef = useRef();

  useEffect(() => {
    function getSliderMax() {
      if (popularityFilter.max === -1) {
        return popularityIntervals.length - 1;
      }

      for (let i = 0; i < popularityIntervals.length; i++) {
        if (popularityIntervals[i] >= popularityFilter.max) {
          return i;
        }
      }

      return 1;
    }

    function getSliderMin() {
      if (popularityFilter.min === -1) {
        return 0;
      }

      for (let i = popularityIntervals.length - 1; i > 0; i--) {
        if (popularityIntervals[i] <= popularityFilter.min) {
          return i;
        }
      }
      return 0;
    }

    console.log("updated: " + popularityIntervals.length);

    setSliderVal({ min: getSliderMin(), max: getSliderMax() });
  }, [popularityIntervals, popularityFilter]);

  function onChange(vals) {
    setSliderVal({ min: vals[0], max: vals[1] });
  }

  function onChanged(vals) {
    setSliderVal({ min: vals[0], max: vals[1] });
    const minVal = vals[0] === 0 ? -1 : popularityIntervals[vals[0]];
    const maxVal = vals[1] === popularityIntervals.length - 1 ? -1 : popularityIntervals[vals[1]];
    setPopularityFilter(minVal, maxVal);
  }

  function getText() {
    let text = <div></div>;
    if (popularityIntervals.length === 0)
      return <div className="popTextContainer">Loading...</div>;
    const sliderMin = sliderVal.min === -1 ? 0 : sliderVal.min;
    const sliderMax = sliderVal.max === -1 ? popularityIntervals.length - 1 : sliderVal.max;

    if (popularityIntervals.length === 0 || (sliderMin === 0 && sliderMax === popularityIntervals.length - 1)) {
      text = (
        <div className="popTextContainer">
          <div className="popTextUnits">Any</div>
          <div className="popText"> number of ratings</div>
        </div>
      );
    } else {
      if (sliderVal.max === popularityIntervals.length - 1) {
        text = (
          <div className="popTextContainer">
            <div className="popText">At least </div>
            <div className="popTextUnits">{numberWithCommas(popularityIntervals[sliderMin])}</div>
            <div className="popText"> ratings </div>
          </div>
        );
      } else if (sliderVal.min === 0) {
        text = (
          <div className="popTextContainer">
            <div className="popText">Up to </div>
            <div className="popTextUnits">{numberWithCommas(popularityIntervals[sliderMax])}</div>
            <div className="popText"> ratings </div>
          </div>
        );
      } else if (sliderVal.min === sliderVal.max) {
        text = (
          <div className="popTextContainer">
            <div className="popTextUnits">{numberWithCommas(popularityIntervals[sliderMin])}</div>
            <div className="popText"> ratings </div>
          </div>
        );
      } else {
        text = (
          <div className="popTextContainer">
            <div className="popTextUnits">{numberWithCommas(popularityIntervals[sliderMin])}</div>
            <div className="popText"> to </div>
            <div className="popTextUnits">{numberWithCommas(popularityIntervals[sliderMax])}</div>
            <div className="popText"> ratings </div>
          </div>
        );
      }
    }

    return text;
  }

  return (
    <div>
      <BlockTitle>Popularity</BlockTitle>
      <List>
        <ListItemCell id="listItem" className="flex-shrink-3">
          {getText()}
          {popularityIntervals.length > 0 ? (
            <Range
              className="popRange"
              ref={rangeRef}
              min={0}
              max={popularityIntervals.length - 1}
              value={[sliderVal.min, sliderVal.max]}
              // label={true}
              // formatLabel={ (i) => String(numberWithCommas(popularityIntervals[i]))}
              dual={true}
              // color="green"
              onRangeChange={onChange}
              onRangeChanged={onChanged}
            />
          ) : null}
        </ListItemCell>
      </List>
    </div>
  );
}

export default FilterPopularity;
