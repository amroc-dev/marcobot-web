import React from "react";
import "@css/App.scss";
import { Link, Icon } from "framework7-react";

export function BackButton() {
  return (
    <Link back>
      <Icon size={"var(--gt-icon-size-large)"} f7="chevron_left" />
      Back
    </Link>
  );
}
