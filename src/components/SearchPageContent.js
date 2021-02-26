import React, { useState, useRef, useEffect, useContext } from "react";
import { Page, List, ListItem, Card } from "framework7-react";
import "../css/SearchPageContent.scss";
import SearchForm from "./SearchForm";
import SearchPills from "./SearchPills";
import CardItem from "./CardItem";
import SearchCountCard from "./SearchCountCard";

import { SearchResultsContext, statusCodes } from "@shared/react/SearchResultsContext";
import { SearchContext } from "@shared/react/SearchContext";

function SearchPageContent() {
  const items = useRef([]);
  const hasMoreItems = useRef(false);
  const searchCountCard = useRef();

  const {searchResults, fetchMoreResults, newSearchSubmitted } = useContext(SearchResultsContext);

  const {searchID } = useContext(SearchContext);

  const FETCH_COUNT = 20;

  useEffect(() => {
    searchCountCard.current = null;
    // setNetworkError(false);
    items.current = [];
  }, [searchID]);

  useEffect(() => {
    searchCountCard.current = null;
    // setNetworkError(false);
    items.current = [];
    hasMoreItems.current = true;

    fetchMoreResults(FETCH_COUNT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchSubmitted]); 

  useEffect(() => {
    // this is just for the condition when search results has been cleared at the start of a new search
    if (searchResults.status === statusCodes.None) {
      searchCountCard.current = null;
      return;
    }

    if (searchResults.status === statusCodes.TimedOut || searchResults.status === statusCodes.Failed) {
      // setNetworkError(new Date().getTime());
      hasMoreItems.current = false;
      return;
    }

    if (items.current.length === 0) {
      searchCountCard.current = <SearchCountCard key={0} count={searchResults.resultsCount} errorMessage={null} />;
    }

    if (searchResults.resultsCount === 0) {
      hasMoreItems.current = false;
      return;
    }

    const slicePoint = items.current.length;
    const resultsSlice = searchResults.results.slice(slicePoint);

    const newItems = [];
    resultsSlice.map((item) => {
      newItems.push(<CardItem key={item.searchBlob.trackId} doc={item} />);
      return null;
    });

    if (newItems.length > 0) {
      items.current = items.current.concat(newItems)
      hasMoreItems.current = searchResults.results.length < searchResults.resultsCount;
    } else {
      hasMoreItems.current = false;
    }
  }, [searchResults]);

  function loadItems() {
    if (hasMoreItems.current) fetchMoreResults(FETCH_COUNT);
  }

  return (
    <Page id="pageRoot" infinite infiniteDistance={50} infinitePreloader={hasMoreItems.current} onInfinite={loadItems}>
      <SearchPills />
      <SearchForm />
      <List noHairlinesBetween simpleList id="resultsList">
        {searchCountCard.current}
        {items.current}
      </List>
    </Page>
  );
}

export default SearchPageContent;
