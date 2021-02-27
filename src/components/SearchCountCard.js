import React from "react";
import { Block, Card } from "framework7-react";
import { numberWithCommas } from "../shared/react/Misc";
import "../css/CardItem.css";

//////////
function SearchCountCard(props) {
  let text = props.errorMessage ? props.errorMessage : "No results";
  if (props.count > 0) {
    text = `Showing ${numberWithCommas(props.count)} results`;

    if (props.count === 1) {
      text = text.slice(0, -1);
    }
  }

  return (
    <div key={0} className="cardItemRoot fade-in">
      <div className="cardItem searchCountCardItem">
        {text}
      </div>
    </ div>
  );
}

export default SearchCountCard;
