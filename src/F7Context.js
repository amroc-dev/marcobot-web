import React, { useState, useEffect, useRef } from "react";
import { f7, f7ready, App, Panel, View, Views, Page, Row, Col } from "framework7-react";
const F7Context = React.createContext();

function F7ContextProvider(props) {
  const [filtersPanelOpen, setFiltersPanelOpen] = useState(false);

  return (
    <F7Context.Provider
      value={
        {
          filtersPanelOpen,
          setFiltersPanelOpen,
        }
      }
    >
      {props.children}
    </F7Context.Provider>
  );
}
export { F7ContextProvider, F7Context };
