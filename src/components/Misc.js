import React, { useRef, useEffect, useState, forwardRef } from "react";
import { Searchbar } from "framework7-react";
import "@css/App.scss";
import { Link, Icon, Page } from "framework7-react";

export function BackButton(props) {
  return (
    <Link back>
      <Icon size={"var(--gt-icon-size-large)"} f7="chevron_left" />
      Back
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

  // return (
  //   <Searchbar
  //     ref = {ref}
  //     disableButtonText={cancelButtonText}
  //     onBlur={() => {
  //       const val = setTimeout(() => setCancelButtonText(""), 250);
  //       setTimeoutVal(val);
  //     }}
  //     onFocus={() => {
  //       if (timeoutVal) clearTimeout(timeoutVal);
  //       setTimeoutVal(null);
  //       setCancelButtonText("Cancel");
  //     }}
  //     {...props}
  //   >
  //     {props.children}
  //   </Searchbar>
  // );
});
