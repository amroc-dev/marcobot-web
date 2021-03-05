import React, { useState, useEffect, useRef, useContext } from "react";
import { f7, f7ready, App, Panel, View, Views, Page, Row, Col } from "framework7-react";
const F7PanelContext = React.createContext();

export function LeftPanel(props) {
  const { setLeftPanelOpen, allowLeftPanel } = useContext(F7PanelContext);

  useEffect( () => {
    const panel = f7.panel.get("left");
    allowLeftPanel ? panel.enableVisibleBreakpoint() : panel.disableVisibleBreakpoint();
  }, [allowLeftPanel])

  return (
    <Panel
      id="marcobotLeftPanel"
      style={{ width: "200px" }}
      left
      cover
      swipe
      swipeOnlyClose
      visibleBreakpoint={1280}
      onPanelBreakpoint={(e) => setLeftPanelOpen(e.opened)}
      {...props}
    >
      <View url="/menu-page/"></View>
    </Panel>
  );
}

export function RightPanel(props) {
  const { setRightPanelOpen, allowRightPanel } = useContext(F7PanelContext);

  useEffect( () => {
    const panel = f7.panel.get("right");
    allowRightPanel ? panel.enableVisibleBreakpoint() : panel.disableVisibleBreakpoint();
  }, [allowRightPanel])

  return (
    <Panel
      id="marcobotRightPanel"
      right
      cover
      swipe
      swipeOnlyClose
      visibleBreakpoint={1280}
      onPanelBreakpoint={(e) => setRightPanelOpen(e.opened)}
      {...props}
    >
      <View url="/filters-page/"></View>
    </Panel>
  );
}

function F7PanelContextProvider(props) {
  const [allowLeftPanel, setAllowLeftPanel] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);

  const [allowRightPanel, setAllowRightPanel] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  function openLeftPanel() {
    if (allowLeftPanel) f7.panel.get("left").open();
  }

  function closeLeftPanel() {
    f7.panel.get("left").close();
  }

  function openRightPanel() {
    if (allowRightPanel) f7.panel.get("right").open();
  }

  function closeRightPanel() {
    f7.panel.get("right").close();
  }

  return (
    <F7PanelContext.Provider
      value={{
        // Left
        allowLeftPanel,
        setAllowLeftPanel,
        leftPanelOpen,
        setLeftPanelOpen,
        openLeftPanel,
        closeLeftPanel,

        // Right
        allowRightPanel,
        setAllowRightPanel,
        rightPanelOpen,
        setRightPanelOpen,
        openRightPanel,
        closeRightPanel,
      }}
    >
      {props.children}
    </F7PanelContext.Provider>
  );
}
export { F7PanelContextProvider, F7PanelContext };
