import React from "react";
import { Button } from "framework7-react";
import "../css/ThemedButton.scss"

// .sortButtonLabel {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// #sortButton {
//   padding: 1rem;
//   // background-color: var(--gt-panel-color);
//   // color: var(--f7-text-color);
//   font-weight: 500;
//   margin-left: 0.5rem;
// }


function ThemedButton(props) {
  
  return (
    <Button fill className="themedButton" large {...props}>
      {props.children}
    </Button>
  );
}

export default ThemedButton;

{/* <Button large color="rgb(255,0,0)" id="sortButton" popoverOpen=".popover-menu">
Popularity
<Icon size="1.1rem" style={{ paddingLeft: "0.5rem" }} f7="chevron_down" />
</Button> */}