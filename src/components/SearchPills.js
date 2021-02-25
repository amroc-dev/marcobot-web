/* eslint no-unused-vars:0 */

import React, { useContext } from "react";
import "../css/SearchPills.css";
import { SearchContext } from "@shared/react/SearchContext";
import { SearchResultsContext } from "@shared/react/SearchResultsContext";

function SearchPill({ name, clickCallback }) {
  return (
    "Pill"
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
  } = useContext(SearchContext);

  const { submittedSearchTerm } = useContext(SearchResultsContext);

  function onTagPillClick(e) {
    removeSearchTag(e.target.value);
  }

  let pills = [];

  // // search pill
  // if (submittedSearchTerm.length > 0) {
  //   pillElems.push(
  //     <SearchPill
  //       key={pillElems.length}
  //       name={submittedSearchTerm}
  //       clickCallback={() => {
  //         clearSearchTerm();
  //       }}
  //     />
  //   );
  // }

  // // tags pills
  // searchTags.map((e) => {
  //   pillElems.push(
  //     <SearchPill
  //       key={pillElems.length}
  //       name={e}
  //       clickCallback={onTagPillClick}
  //     />
  //   );
  //   return null;
  // });



  // // device filter pills
  // function onDevicePillClick(e) {
  //   const val = e.target.value;
  //   toggleDeviceFilter(val);
  // }

  // const filter = { ...deviceFilter };
  // Object.keys(filter).forEach((i) => {
  //   if (filter[i]) {
  //     pillElems.push(
  //       <SearchPill
  //         key={pillElems.length}
  //         name={i}
  //         clickCallback={onDevicePillClick}
  //       />
  //     );
  //   }
  //   return filter[i];
  // });

  // // popularity filter pill
  // function onPopularityPillClick(e) {
  //   setPopularityFilterIndex(popularityFilterCategories.length - 1)
  // }

  // if (popularityFilterCategories[popularityFilterIndex] !== -1) {
  //   pillElems.push(
  //     <SearchPill
  //       key={pillElems.length}
  //       name={"Popularity < " + MakeLabel(popularityFilterIndex)}
  //       clickCallback={onPopularityPillClick}
  //     />
  //   );
  // }

  return <div>{pills}</div>;
}
