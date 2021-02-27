import React, { useState, useRef } from "react";
import { Block, Card, ListItem } from "framework7-react";
import "../css/CardItem.css";
import FadeIn from 'react-fade-in';

import {
  objectKeyFromDotString,
  monthMap,
  formatRatingCount,
} from "../shared/react/Misc";
const dbkeys = require("../shared/back-end/db-keys");

function getDate(dateString, includeDay = false) {
  const releaseDateObj = new Date(dateString);
  const month = monthMap[parseInt(releaseDateObj.getUTCMonth() + 1)];
  if (includeDay) {
    return `${releaseDateObj.getUTCDate()} ${month} ${releaseDateObj.getUTCFullYear()}`;
  } else {
    return `${month} ${releaseDateObj.getUTCFullYear()}`;
  }
}

function CardItem({ doc }) {
  const doc_releaseDate = objectKeyFromDotString(doc, dbkeys.releaseDate);
  const doc_popularity = objectKeyFromDotString(doc, dbkeys.popularity);
  const doc_rating = objectKeyFromDotString(doc, dbkeys.ratingCurrentVersion);
  const doc_formattedPrice = objectKeyFromDotString(doc, dbkeys.formattedPrice);
  const doc_trackName = objectKeyFromDotString(doc, dbkeys.trackName);
  const doc_artistName = objectKeyFromDotString(doc, dbkeys.artistName);

  const releaseDate = getDate(doc_releaseDate, false);

  const countForCurrentVersion = doc_popularity;
  let rating = "-";

  let ratingCellColour = "rgba(125, 145, 165, 1)";

  const ratingVal = parseFloat(doc_rating);
  const remainder = Math.abs(ratingVal - Math.round(ratingVal));
  const fixedDigits = remainder < 0.1 ? 0 : 1;

  rating = ratingVal.toFixed(fixedDigits);
  if (countForCurrentVersion >= 5) {
    ratingCellColour = "rgba(92, 184, 92, 1)";

    if (rating < 4) {
      ratingCellColour = "rgba(225, 180, 48, 1)";
    }
    if (rating < 3) {
      ratingCellColour = "rgba(225, 0, 0, 1)";
    }
    rating = Math.round(rating * 2);
  } else {
    rating = "-";
  }

  const ratingCellStyle = { backgroundColor: ratingCellColour };
  const ratingCellClass =
    "ratingCell" + (rating === 10 ? " ratingCellGold" : " ratingCellWhite");
  const ratingCountElem = formatRatingCount(doc_popularity);
  const formattedPriceElem = doc_formattedPrice;

  function onClick() {
    // const baseURL = "itms-apps://itunes.apple.com/app/id" + doc.searchBlob.trackId;
    const prefix = window.navigator.standalone ? "itms-apps" : "https";
    const url = prefix + "://itunes.apple.com/app/id" + doc.searchBlob.trackId;
    window.open(url);
  }

  return (
    <div key={doc._id} className="cardItemRoot fade-in">
      <div className="cardItem" onClick={onClick}>
        <img
          style={{ width: "100px", height: "100px" }}
          className="cardImage"
          src={doc.searchBlob.artworkUrl512}
          alt=""
        />
        <div className="dataContainer">
          <div className="topRowContainer">
            <div className="titleContainer">
              <div className="trackName">{doc_trackName}</div>
              <div className="devName">{doc_artistName}</div>
            </div>
          </div>
          <div className="bottomRowContainer">
            <div className="releaseDate">{releaseDate}</div>
            <div className="ratingContainer">
              <div className={ratingCellClass} style={ratingCellStyle}>
                <div className="ratingValue">{rating}</div>
              </div>
              <div className="ratingCount">{ratingCountElem}</div>
            </div>
            <div className="price">{formattedPriceElem}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
