import React, { useState, useRef } from "react";
import { Block, Card, ListItem } from "framework7-react";
import "../css/CardItem.css";

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

function CardItem({ doc, id }) {
  const doc_releaseDate = objectKeyFromDotString(doc, dbkeys.releaseDate);
  const doc_recentReleaseDate = objectKeyFromDotString(doc, dbkeys.currentVersionReleaseDate);
  const doc_popularity = objectKeyFromDotString(doc, dbkeys.popularity);
  const doc_ratingCount = objectKeyFromDotString(doc, dbkeys.ratingCountCurrentVersion);
  const doc_rating = objectKeyFromDotString(doc, dbkeys.ratingCurrentVersion);
  const doc_formattedPrice = objectKeyFromDotString(doc, dbkeys.formattedPrice);
  const doc_trackName = objectKeyFromDotString(doc, dbkeys.trackName);
  const doc_trackId = objectKeyFromDotString(doc, dbkeys.trackId);
  const doc_artistName = objectKeyFromDotString(doc, dbkeys.artistName);
  const doc_artworkUrl = objectKeyFromDotString(doc, dbkeys.artworkUrl);

  const releaseDate = getDate(doc_releaseDate, false);

  //////// rating
  let rating = parseFloat(parseFloat(doc_rating).toFixed(1));
  let ratingCellColour = 'rgb(125, 125, 125)';
  if (doc_ratingCount >= 5) {
    ratingCellColour = 'rgb(92, 184, 92)';

    if (rating < 4) {
      ratingCellColour = 'rgb(225, 180, 48)';
    }
    if (rating < 3) {
      ratingCellColour = 'rgb(225, 0, 0)';
    }
  } else if (doc_ratingCount === 0) {
    rating = "-";
  }

  const ratingCellStyle = { backgroundColor: ratingCellColour };
  const formattedPopularity = formatRatingCount(doc_popularity);
  const formattedRecentRatingCount = formatRatingCount(doc_ratingCount);
  const formattedPriceElem = doc_formattedPrice;

  function onClick() {
    // const baseURL = "itms-apps://itunes.apple.com/app/id" + doc.searchBlob.trackId;
    const prefix = window.navigator.standalone ? "itms-apps" : "https";
    const url = prefix + "://itunes.apple.com/app/id" + doc.searchBlob.trackId;
    window.open(url);
  }

  return (
    <div key={doc_trackId} id={id} className="cardItemRoot fade-in">
      <div className="cardItem" onClick={onClick}>
        <img
          style={{ width: "110px", height: "110px" }}
          className="cardImage"
          src={doc_artworkUrl}
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
              <div className="ratingCell" style={ratingCellStyle}>
                <div className="ratingValue">{rating}</div>
              </div>
              <div className="ratingCount">{formattedRecentRatingCount}</div>
            </div>
            <div className="price">{formattedPriceElem}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
