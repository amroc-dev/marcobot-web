import React, { useContext, useRef } from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Popup,
  Row,
  Col,
  Button,
  Icon,
  f7,
} from "framework7-react";

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { F7PanelContext } from "@root/F7PanelContext";
import marcobot from "@assets/marcobot_alpha.png";
import { AboutIcon } from "@components/Misc";
import "@css/AboutPage.css";

function AboutPage() {
  const { setAllowLeftPanel } = useContext(F7PanelContext);
  const donatePopupRef = useRef();

  function pageIn() {}

  function afterPageOut() {}

  const shareUrl = "www.marcobot.com";
  const title = "Marcobot.com - a search engine for pay once App Store games";

  const iconSize = 40;

  return (
    <Page onPageBeforeIn={pageIn} onPageAfterOut={afterPageOut}>
      <Navbar>
        <NavTitle>
          About
          {/* <AboutIcon /> */}
        </NavTitle>
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={marcobot} style={{ width: "110px", height: "110px", borderRadius: "12px" }} alt="" />
        </div>
      </Block>
      <Block>Marcobot is a search engine for 'pay once' App Store games. Games that have no in-app purchases.</Block>
      <Block>
        This site currently just includes paid games, but there are plans to add games which
        use the free + unlock full game IAP approach.
      </Block>
      <Block>
        If you like this site please consider{" "}
        <Link
          onClick={() => {
            f7.popup.close();
            f7.popup.open(".donatePagePopup");
          }}
        >
          giving support
        </Link>{" "}
        or sharing it using the buttons below.
      </Block>


      <Block>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="some-network">
            <FacebookShareButton url={shareUrl} quote={title} className="some-network__share-button">
              <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
          </div>

          <div className="some-network">
            <FacebookMessengerShareButton url={shareUrl} appId="521270401588372" className="some-network__share-button">
              <FacebookMessengerIcon size={iconSize} round />
            </FacebookMessengerShareButton>
          </div>

          <div className="some-network">
            <TwitterShareButton url={shareUrl} title={title} className="some-network__share-button">
              <TwitterIcon size={iconSize} round />
            </TwitterShareButton>

            <div className="some-network__share-count">&nbsp;</div>
          </div>

          <div className="some-network">
            <WhatsappShareButton url={shareUrl} title={title} separator=":: " className="some-network__share-button">
              <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>

            <div className="some-network__share-count">&nbsp;</div>
          </div>

          <div className="some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              className="some-network__share-button"
            >
              <RedditIcon size={iconSize} round />
            </RedditShareButton>
          </div>
        </div>
      </Block>

      <Block>
        {/* <Link href={"mailto:marco@marcobot.com"} external> */}
        <div style={{ display: "flex", justifyContent: "center" }}>marco@marcobot.com</div>
        {/* </Link> */}
      </Block>

      <Block style={{ fontSize: "10px", display: "flex", justifyContent: "center"  }}>
        Marcobot doesn't collect or store any sort of personal data. No cookies are used on this site.
      </Block>
    </Page>
  );
}

export default AboutPage;
