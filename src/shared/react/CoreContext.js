import React, { useState, useEffect, useContext } from "react";
import { fetchGamesMeta } from "./ServerFetch";
const CoreContext = React.createContext();

function CoreContextProvider(props) {
  const [tags, setTags] = useState([]);
  const [popularityIntervals, setPopularityIntervals] = useState([])
  const [releaseYears, setReleaseYears] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect( () => {
    async function doFetchGamesMeta() {
      let data = await fetchGamesMeta();
      if (data) {
        setTags(data.tags)
        setPopularityIntervals(data.popularityIntervals)
        setReleaseYears(data.releaseYears)
      }
    }

    doFetchGamesMeta()
  },[])

  function toggleMenu() {
    setMenuOpen( m => !m)
  }

  return (
    <CoreContext.Provider
      value={{
        tags,
        popularityIntervals,
        menuOpen,
        setMenuOpen,
        toggleMenu,
      }}
    >
      {props.children}
    </CoreContext.Provider>
  );
}
export { CoreContextProvider, CoreContext };
