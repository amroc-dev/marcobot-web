/* eslint no-unused-vars:0 */

import React, { useContext, useEffect, useState } from "react";
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

    setPills(_pills);
  }, [newSearchSubmitted, searchID]);

  const rootStyle = {'margin-top' : pills.length > 0 ? '0' : '0.5rem'}
  return (
    <div className="rootContainer" style={rootStyle}>
    {pills}
    </div>
  )
}
