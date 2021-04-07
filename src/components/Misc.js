import React, { useRef, useEffect, useContext, useState, forwardRef } from "react";
import { Link, Icon, Searchbar, NavLeft, NavRight } from "framework7-react";
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
  // "rgba(255, 126, 0, 0.85)"
  //rgba(255, 126, 34, 0.9)
  //rgba(125, 50, 225, 0.75)
  //"var(--f7-theme-color)"
  return (
    <Icon
      style={{ padding: "0.2rem", color: "var(--f7-theme-color)" }}
      size={"var(--gt-icon-size-medium)"}
      f7="rocket_fill"
    />
  );
}

export function AboutIcon() {
  return (
    <Icon
      style={{ padding: "0.25rem", color: "rgba(230, 126, 34, 0.75)" }}
      size={"var(--gt-icon-size-large)"}
      f7="question_square_fill"
    />
  );
}

export function RightPanelNavLink(props) {
  const { rightPanelOpen, openRightPanel } = useContext(F7PanelContext);

  return (
    <NavRight>
      <Link onClick={() => openRightPanel()}>
        {props.children}
        <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" />
      </Link>
    </NavRight>
  );
}
