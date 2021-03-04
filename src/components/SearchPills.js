/* eslint no-unused-vars:0 */

import React, { useContext, useEffect, useState, useRef } from "react";
import { Chip, Link, Icon } from "framework7-react";
import "../css/SearchPills.css";
import { numberWithCommas } from "@shared/react/Misc";
import { SearchContext } from "@shared/react/SearchContext";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";
import { MIN_VAL as RATING_MIN_VAL, MAX_VAL as RATING_MAX_VAL } from "./FilterRating";

function SearchPill({ name, onClick, iconName }) {
  const icon = iconName ? <Icon size="calc(var(--gt-icon-size) * 1.5)" f7={iconName} /> : null;

  return (
    <Chip color="blue" id="chip">
      <Link id="link" color="white" onClick={onClick}>
        {name}
        {icon}
      </Link>
    </Chip>
  );
}

function ClearPill({ onClick }) {
  return (
    <Chip
      color="grey"
      id="chip"
      style={{ backgroundColor: "rgba(0,0,0,0)", marginLeft: "-0.5rem", marginRight: "-0.25rem" }}
    >
      <Link id="link" color="gray" onClick={onClick}>
        <Icon size="calc(var(--gt-icon-size) * 1.5)" f7={"xmark_circle_fill"} />
      </Link>
    </Chip>
  );
}

export default function SearchPills() {
  const {
    searchTags,
    removeSearchTag,
    clearSearchTerm,
    clearSearchTags,
    resetDeviceFilter,
    deviceFilter,
    toggleDeviceFilter,
    popularityFilter,
    setPopularityFilter,
    ratingFilter,
    setRatingFilter,
    searchID,
  } = useContext(SearchContext);

  const { submittedSearchTerm, newSearchSubmitted } = useContext(SearchResultsContext);

  const [pills, setPills] = useState([]);

  useEffect(() => {
    let _pills = [];

    // searchbar
    if (submittedSearchTerm.length > 0) {
      _pills.push(<SearchPill key={_pills.length} name={submittedSearchTerm} onClick={() => clearSearchTerm()} />);
    }

    // tags
    searchTags.map((e) => {
      _pills.push(<SearchPill key={_pills.length} name={e} onClick={() => removeSearchTag(e)} />);
      return null;
    });

    // device
    const filter = { ...deviceFilter };
    Object.keys(filter).forEach((e) => {
      if (filter[e]) {
        _pills.push(<SearchPill key={_pills.length} name={e} onClick={() => toggleDeviceFilter(e)} />);
      }
      return filter[e];
    });

    // popularity
    function clearPopularityFilter() {
      setPopularityFilter(-1, -1)
    }
    if (popularityFilter.max !== -1 || popularityFilter.min !== -1) {
      let text = "";
      if (popularityFilter.max === -1) {
        text = "Min " + numberWithCommas(popularityFilter.min);
        text = "> " + numberWithCommas(popularityFilter.min);
      } else if (popularityFilter.min === -1) {
        text = "Max " + numberWithCommas(popularityFilter.max);
        text = "< " + numberWithCommas(popularityFilter.max);
      } else if (popularityFilter.min === popularityFilter.max) {
        text = numberWithCommas(popularityFilter.min);
      } else text = numberWithCommas(popularityFilter.min) + " to " + numberWithCommas(popularityFilter.max);
      _pills.push(
        <SearchPill key={_pills.length} name={"Popularity " + text} onClick={clearPopularityFilter} />
      );
    }

    // rating
    function clearRatingFilter() {
      setRatingFilter(-1)
    }
    if (ratingFilter > RATING_MIN_VAL) {
      let text = "";
      if (ratingFilter < RATING_MAX_VAL) {
        text = "> " + ratingFilter + " ★";
      } else {
        text = ratingFilter + " ★";
      }
      _pills.push(<SearchPill key={_pills.length} name={"User rating " + text} onClick={clearRatingFilter} />);
    }

    //clear all
    if (pills.length > 1) {
      _pills.splice(
        0,
        0,
        <ClearPill
          key={_pills.length}
          onClick={() => {
            clearSearchTerm();
            clearSearchTags();
            resetDeviceFilter();
            clearPopularityFilter();
            clearRatingFilter();
          }}
        />
      );
    }

    setPills(_pills);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchSubmitted, searchID]);

  const rootStyle = { marginTop: pills.length > 0 ? "0" : "0.5rem" };
  return (
    <div className="rootContainer" style={rootStyle}>
      {pills}
    </div>
  );
}
