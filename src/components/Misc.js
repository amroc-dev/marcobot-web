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