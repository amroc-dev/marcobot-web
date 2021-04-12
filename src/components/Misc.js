import React, { useRef, useEffect, useContext, useState, forwardRef } from "react";
import { Link, Icon, Searchbar, NavLeft, NavRight, f7 } from "framework7-react";
import { F7PanelContext, RightPanelBreakpoint } from "@root/F7PanelContext";
import coffee from "@assets/coffee_128.png";
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
  const frameDelay = 1000 / 30;
  const repeatDelay = 5;
  const animDuration = 1.5;
  const animFrame = useRef(0);
  const waitCounter = useRef(0);
  const [rot, setRot] = useState("rotate(0deg)");
  const [intervalObj, setIntervalObj] = useState(false);

  const deltaTime = parseFloat(frameDelay) / 1000.0;
  function update() {
    waitCounter.current += deltaTime;
    if (waitCounter.current < repeatDelay) return;

    animFrame.current += deltaTime;
    let degs =
      Math.sin(animFrame.current * Math.PI * 6) * 12.5 * Math.sin((animFrame.current / animDuration) * Math.PI);
    if (animFrame.current >= animDuration) {
      degs = 0;
      waitCounter.current = 0;
      animFrame.current = 0;
    }
    setRot("rotate(" + degs + "deg)");
  }

  useEffect(() => {
    // waitCounter.current = repeatDelay / 2;
    // animFrame.current = 0;
    // setIntervalObj(setInterval(update, frameDelay));
    // return () => stopAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // "rgba(255, 126, 0, 0.85)"
  //rgba(255, 126, 34, 0.9)
  //rgba(125, 50, 225, 0.75)
  //"var(--f7-theme-color)"

  function stopAnim() {
    if (intervalObj) {
      clearInterval(intervalObj);
      setIntervalObj(null);
      setRot("rotate(0deg)");
    }
  }

  return (
    // <Icon
    //   style={{ padding: "0.2rem", color: "var(--f7-theme-color)", transform: "rotate(-15deg)" }}
    //   size={"var(--gt-icon-size-medium)"}
    //   f7="rocket_fill"
    // />
    <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}} onClick={() => stopAnim()}>
      <img style={{ height: "22px", marginLeft: "-5px", transform: rot }} src={coffee} alt="" />
      <div style={{ paddingLeft: "0.3rem" }}>
        <MenuText>Support</MenuText>
      </div>
    </div>
  );
}

export function AboutIcon() {
  return (
    // <Icon
    //   style={{ padding: "0.0rem", color: "rgba(0, 161, 222, 1)" }}
    //   size={"var(--gt-icon-size-large)"}
    //   f7="info_circle"
    // />
    <div style={{ fontSize: "16px", color: "rgba(0,0,0,0.9)" }}>About</div>
  );
}

export function MenuText(props) {
  return <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.9)", paddingRight: "0.25rem" }}>{props.children}</div>;
}

export function RightPanelNavLink(props) {
  const { rightPanelOpen, openRightPanel, onRightPanelBreak } = useContext(F7PanelContext);

  const f7RightPanel = f7.panel.get("right");
  let opened = false;

  if (window.innerWidth >= RightPanelBreakpoint) {
    if (f7RightPanel && f7RightPanel.opened) opened = true;
  }

  return !opened ? (
    <NavRight>
      <Link onClick={() => openRightPanel()}>
        {props.children}
        <Icon size={"var(--gt-icon-size-large)"} f7="chevron_right" />
      </Link>
    </NavRight>
  ) : null;
}
