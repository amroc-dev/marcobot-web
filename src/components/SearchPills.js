/* eslint no-unused-vars:0 */

import React, { useContext, useEffect, useState, useRef } from "react";
import { Chip, Link } from "framework7-react";
import "../css/SearchPills.css";
import { SearchContext } from "@shared/react/SearchContext";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";

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
    popularityFilterIndex,
    setPopularityFilterIndex,
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
