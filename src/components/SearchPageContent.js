import React, { useState, useRef, useEffect, useContext } from "react";
import { Page, List, ListItem, Card } from "framework7-react";
import "../css/SearchPageContent.scss";
import SearchForm from "./SearchForm";
import CardItem from "./CardItem";
import SearchCountCard from "./SearchCountCard";

import { SearchResultsContext, statusCodes } from "../shared/react/SearchResultsContext";

function SearchPageContent() {
  const allowInfinite = useRef(true);
  const [items, setItems] = useState([]);
  const [showPreloader, setShowPreloader] = useState(true);

  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [searchCountCard, setSearchCountCard] = useState();

  const {searchResults, fetchMoreResults, newSearchSubmitted} = useContext(SearchResultsContext);

  const FETCH_COUNT = 20;

  useEffect(() => {
    setSearchCountCard(null);
    // setNetworkError(false);
    setItems([]);
    setHasMoreItems(true);
    fetchMoreResults(FETCH_COUNT);

  }, []);

  useEffect(() => {
    // this is just for the condition when search results has been cleared at the start of a new search
    if (searchResults.status === statusCodes.None) {
      setSearchCountCard(null);
      return;
    }

    if (searchResults.status === statusCodes.TimedOut || searchResults.status === statusCodes.Failed) {
      // setNetworkError(new Date().getTime());
      setHasMoreItems(false);
      return;
    }

    if (items.length === 0) {
      setSearchCountCard(<SearchCountCard key={0} count={searchResults.resultsCount} errorMessage={null} />);
    }

    if (searchResults.resultsCount === 0) {
      setHasMoreItems(false);
      return;
    }

    const slicePoint = items.length;
    const resultsSlice = searchResults.results.slice(slicePoint);

    const newItems = [];
    resultsSlice.map((item) => {
      newItems.push(<CardItem key={item.searchBlob.trackId} doc={item} />);
      return null;
    });

    if (newItems.length > 0) {
      setItems((prev) => prev.concat(newItems));
      setHasMoreItems(searchResults.results.length < searchResults.resultsCount);
    } else {
      setHasMoreItems(false);
    }
  }, [searchResults]);

  function loadItems() {
    if (hasMoreItems) fetchMoreResults(FETCH_COUNT);
  }

  return (
      <Page id="pageRoot" infinite infiniteDistance={50} infinitePreloader={showPreloader} onInfinite={loadItems}>
        <SearchForm />
        <List noHairlinesBetween simpleList id="resultsList">
          {searchCountCard}
          {items}
        </List>
      </Page>
  );
}

export default SearchPageContent;
