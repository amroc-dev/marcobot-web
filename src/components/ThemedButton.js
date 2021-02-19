import React from "react";
import { Button } from "framework7-react";
import "../css/ThemedButton.scss"



function ThemedButton(props) {
  
  return (
    <Button className="themedButton" {...props}>
      {props.children}
    </Button>
  );
}

export default ThemedButton;
