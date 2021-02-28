/* eslint no-unused-vars:0 */

import React, { useContext, useEffect, useState, useRef } from "react";
import { Chip, Link } from "framework7-react";
import "../css/SearchPills.css";
import { numberWithCommas } from "@shared/react/Misc";
import { SearchContext } from "@shared/react/SearchContext";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";
import { MIN_VAL as RATING_MIN_VAL, MAX_VAL as RATING_MAX_VAL } from "./FilterRating";

function SearchPill({ name, onClick }) {
  return (
    <Chip color="blue" id="chip">
      <Link id="link" color="white" onClick={onClick}>
        {name}
      </Link>
    </Chip>
  );
}

export default function SearchPills() {
  const {
    searchTags,
    removeSearchTag,
    clearSearchTerm,
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

  function onTagPillClick(e) {
    removeSearchTag(e.target.value);
  }

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
      _pills.push(<SearchPill key={_pills.length} name={"Popularity " + text} onClick={() => setPopularityFilter(-1, -1)} />);
    }

    // rating
    if (ratingFilter > RATING_MIN_VAL) {
      let text = "";
      if (ratingFilter < RATING_MAX_VAL) {
        text = "> " + ratingFilter + " ★";
      } else {
        text = ratingFilter + " ★";
      }
      _pills.push(<SearchPill key={_pills.length} name={"User rating " + text} onClick={() => setRatingFilter(-1)} />);
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
