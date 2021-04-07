import React, { useState, useEffect, useRef, useContext } from "react";
import { f7, f7ready, App, Panel, View, Views, Page, Row, Col } from "framework7-react";
const F7PanelContext = React.createContext();

export const LeftPanelBreakpoint = 1280;

export function LeftPanel(props) {
  const { allowLeftPanel } = useContext(F7PanelContext);

  useEffect(() => {
    const panel = f7.panel.get("left");
    if (allowLeftPanel) {
      panel.params.visibleBreakpoint = LeftPanelBreakpoint;
      panel.enableVisibleBreakpoint()
    } else {
      panel.params.visibleBreakpoint = null;
      panel.disableVisibleBreakpoint();
    } 
  }, [allowLeftPanel]);

  return (
    <Panel
      id="marcobotLeftPanel"
      style={{ width: "200px" }}
      left
      cover
      swipe
      swipeOnlyClose

      {...props}
    >
      <View url="/menu-page/"></View>
    </Panel>
  );
}

export const RightPanelBreakpoint = 900;

export function RightPanel(props) {
  const { allowRightPanel, setOnRightPanelBreak } = useContext(F7PanelContext);

  useEffect(() => {
    const panel = f7.panel.get("right");
    if (allowRightPanel) {
      panel.params.visibleBreakpoint = RightPanelBreakpoint;
      panel.enableVisibleBreakpoint();
    } else {
      panel.params.visibleBreakpoint = null;
      panel.disableVisibleBreakpoint();
    }
  }, [allowRightPanel]);

  return (
    <Panel
      id="marcobotRightPanel"
      right
      cover
      swipe
      swipeOnlyClose
      onPanelBreakpoint = { () => setOnRightPanelBreak( val => !val)}
      // onPanelOpened={() => setRightPanelOpen(true)}
      // onPanelClose={() => setRightPanelOpen(false)}
      {...props}
    >
      <View url="/filters-page/"></View>
    </Panel>
  );
}

function F7PanelContextProvider(props) {
  const [allowLeftPanel, setAllowLeftPanel] = useState(false);
  // const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [allowRightPanel, setAllowRightPanel] = useState(false);
  // const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [onRightPanelBreak, setOnRightPanelBreak] = useState(false);

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
        openLeftPanel,
        closeLeftPanel,
        // leftPanelOpen,
        // setLeftPanelOpen,

        // Right
        allowRightPanel,
        setAllowRightPanel,
        openRightPanel,
        closeRightPanel,
        onRightPanelBreak,
        setOnRightPanelBreak,
        // rightPanelOpen,
        // setRightPanelOpen,
      }}
    >
      {props.children}
    </F7PanelContext.Provider>
  );
}
export { F7PanelContextProvider, F7PanelContext };
