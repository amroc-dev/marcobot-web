import React, { useState, useEffect, useRef } from "react";
import { f7, f7ready, App, Panel, View, Views, Page, Row, Col } from "framework7-react";
const F7Context = React.createContext();

function F7ContextProvider(props) {
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [menuPanelOpen, setMenuPanelOpen] = useState(false);
  const [allowMenu, setAllowMenu] = useState(false);
  const [allowRightPanel, setAllowRightPanel] = useState(false);

  return (
    <F7Context.Provider
      value={
        {
          rightPanelOpen,
          setRightPanelOpen,
          menuPanelOpen,
          setMenuPanelOpen,
          allowMenu,
          setAllowMenu,
          allowRightPanel,
          setAllowRightPanel,
        }
      }
    >
      {props.children}
    </F7Context.Provider>
  );
}
export { F7ContextProvider, F7Context };
