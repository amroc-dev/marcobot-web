import React from "react";
import { Link } from "framework7-react";
import "../css/LinkButton.scss"


function LinkButton(props) {
  
  return (
    <div className="linkButtonContainer">
    <Link className="linkButton" {...props}>
      {props.children}
    </Link>
    </div>
    // <Button className="themedButton" large {...props}>
    //   {props.children}
    // </Button>
  );
}

export default LinkButton;
