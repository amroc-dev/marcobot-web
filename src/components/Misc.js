import React, { useRef, useEffect, useContext, useState, forwardRef } from "react";
import { Link, Icon, Searchbar, NavLeft } from "framework7-react";
import { F7PanelContext } from "@root/F7PanelContext";
import "@css/App.scss";


export function BackButton(props) {
  return (
    <Link back>
      <Icon style={{paddingRight: "2rem"}} size={"var(--gt-icon-size-large)"} f7="chevron_left" />
      {/* Back */}
    </Link>
  );
}

export const SearchbarFixed = forwardRef((props, ref) => {
  const [cancelButtonText, setCancelButtonText] = useState("Cancel");
  const [timeoutVal, setTimeoutVal] = useState(null);

  return (
    <Searchbar disableButton={false} ref = {ref} {...props}>
      {props.children}
    </Searchbar>)
});

export function LeftPanelNavLink() {
  const {leftPanelOpen, openLeftPanel} = useContext(F7PanelContext);

  return ( leftPanelOpen ? null : <NavLeft><Link iconF7="line_horizontal_3" onClick={() => openLeftPanel()}/></NavLeft> )
}
