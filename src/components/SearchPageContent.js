import React, { useState, useRef, useEffect, useContext } from "react";
import { Page, PageContent, List, ListItem, Card, f7, Block } from "framework7-react";
import "../css/SearchPageContent.scss";
import SearchForm from "./SearchForm";
import SearchPills from "./SearchPills";
import CardItem from "./CardItem";
import SearchCountCard from "./SearchCountCard";

import { SearchResultsContext, statusCodes } from "@shared/react/SearchResultsContext";
import { SearchContext } from "@shared/react/SearchContext";

function SearchPageContent() {
  const [items, setItems] = useState([]);
  const itemsRef = useRef();
  itemsRef.current = items;

  const [showSpinner, setShowSpinner] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(false);
  const [searchCountCard, setSearchCountCard] = useState();

  const { searchResults, fetchMoreResults, newSearchSubmitted } = useContext(SearchResultsContext);
  const fetchMoreResultsRef = useRef();
  fetchMoreResultsRef.current = fetchMoreResults;

  const { searchID } = useContext(SearchContext);

  const FETCH_COUNT = 20;

  useEffect(() => {
    setSearchCountCard(null);
    setNetworkError(false);
    setItems([]);
  }, [searchID]);

  useEffect(() => {
    setSearchCountCard(null);
    setNetworkError(false);
    setItems([]);
    setHasMoreItems(true);

    fetchMoreResultsRef.current(FETCH_COUNT);
  }, [newSearchSubmitted]);

  useEffect(() => {
    if (networkError) {
      setShowSpinner(false);
    } else {
      setShowSpinner(hasMoreItems);
    }
  }, [networkError, hasMoreItems]);

  useEffect(() => {
    // this is just for the condition when search results has been cleared at the start of a new search
    if (searchResults.status === statusCodes.None) {
      setSearchCountCard(null);
      return;
    }

    if (searchResults.status === statusCodes.TimedOut || searchResults.status === statusCodes.Failed) {
      setNetworkError(new Date().getTime());
      setHasMoreItems(false);
      return;
    }

    if (itemsRef.current.length === 0) {
      setSearchCountCard(<SearchCountCard key={0} count={searchResults.resultsCount} errorMessage={null} />);
    }

    if (searchResults.resultsCount === 0) {
      setHasMoreItems(false);
      return;
    }

    const slicePoint = itemsRef.current.length;
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

  const networkErrorMessage = networkError ? <div style={{ textAlign: "center" }}>Network Error</div> : null;

  console.log("render");

  return (
    <PageContent
      id="pageRoot"
      infinite
      infiniteDistance={window.innerHeight * 0.75}
      infinitePreloader={showSpinner}
      onInfinite={loadItems}
    >
      <div id="listContent">
        <SearchPills />
        <SearchForm />
        {searchCountCard}
        {items}
        {networkErrorMessage}
      </div>
    </PageContent>
  );
}

export default SearchPageContent;
