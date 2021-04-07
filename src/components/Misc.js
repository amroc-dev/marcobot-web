import React, { useRef, useEffect, useContext, useState, forwardRef } from "react";
import { Link, Icon, Searchbar, NavLeft, NavRight, f7 } from "framework7-react";
import { F7PanelContext } from "@root/F7PanelContext";
import "@css/App.scss";

export function BackButton(props) {
  return (
    <Link back>
      <Icon style={{ paddingRight: "2rem" }} size={"var(--gt-icon-size-large)"} f7="chevron_left" />
      {/* Back */}
    </Link>
  );
}

export const SearchbarFixed = forwardRef((props, ref) => {
  const [cancelButtonText, setCancelButtonText] = useState("Cancel");
  const [timeoutVal, setTimeoutVal] = useState(null);

  return (
    <Searchbar disableButton={false} ref={ref} {...props}>
      {props.children}
    </Searchbar>
  );
});

export function LeftPanelNavLink(props) {
  const { leftPanelOpen, openLeftPanel } = useContext(F7PanelContext);

  return (
    <NavLeft>
      <Link iconF7="line_horizontal_3" onClick={() => openLeftPanel()}>
        {props.children}
      </Link>
    </NavLeft>
  );
}

export function DonateIcon() {
//   const position = useRef([0, 0]);
//   const iter = useRef(0);
//   const [transformStyle, setTransformStyle] = useState("translate(0,0)");

//   function update() {
//     iter.current += 4;
//     const x = Math.sin(iter.current * 0.3) * 0.5;
//     const y = Math.cos(iter.current * 0.2) * 0.5;
//     position.current = [x, y];
//     setTransformStyle("translate(" + position.current[0] + "px," + position.current[1] + "px)");
//     setTransformStyle("rotate(-20deg)");
//   }

//   useEffect(() => {
//     const interval = setInterval(update, 100);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  // "rgba(255, 126, 0, 0.85)"
  //rgba(255, 126, 34, 0.9)
  //rgba(125, 50, 225, 0.75)
  //"var(--f7-theme-color)"


  return (
    <Icon
      style={{ padding: "0.2rem", color: "var(--f7-theme-color)", transform: "rotate(-15deg)" }}
      size={"var(--gt-icon-size-medium)"}
      f7="rocket_fill"
    />
  );
}

export function AboutIcon() {
  return (
    <Icon
      style={{ padding: "0.25rem", color: "var(--f7-theme-color)" }}
      size={"var(--gt-icon-size-large)"}
      f7="question_square"
    />
  );
}

export function RightPanelNavLink(props) {
  const { rightPanelOpen, openRightPanel, onRightPanelBreak } = useContext(F7PanelContext);

  const f7RightPanel = f7.panel.get("right");
  let opened = false;

  if (f7RightPanel && f7RightPanel.opened) opened = true;

  return !opened ? (
    <NavRight>
      <Link onClick={() => openRightPanel()}>
        {props.children}
        <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" />
      </Link>
    </NavRight>
  ) : null;
}
