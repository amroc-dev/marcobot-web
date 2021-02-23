import React, {useRef, useEffect} from "react";
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

export function GTPage(props) {
  const pageRef = useRef();

  function pageBeforeIn() {
    console.log("in")
    // disableBodyScroll(pageRef.current);
  }

  function pageAfterOut() {
    console.log("out")
    // enableBodyScroll(pageRef.current);
  }

  // useEffect( () => {
  //   disableBodyScroll(document.querySelector('#ttt'));
  // },[])

  return (
    <Page ref={pageRef.current} {...props} onPageBeforeIn={pageBeforeIn} onPageAfterOut={pageAfterOut} >
      {props.children}
    </Page>
  );
}
