import React, { useContext } from "react";
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
  Row,
  Col,
  Button,
  Icon,
  f7,
} from "framework7-react";
import { F7PanelContext } from "@root/F7PanelContext";
import marcobot from "@assets/marcobot_256.png";
import AppleLogin from "@components/AppleLogin";
import { DonateIcon } from "@components/Misc";
import "@css/DonatePage.css";
import patreon from "@assets/patreon.png";
import nano from "@assets/nano.png";
import paypal from "@assets/paypal.png";
import bitcoin from "@assets/bitcoin.png";
import "@css/HomePage.css";

function DonatePage() {
  const { setAllowLeftPanel } = useContext(F7PanelContext);

  function pageIn() {}

  function afterPageOut() {}

  return (
    <Page onPageBeforeIn={pageIn} onPageAfterOut={afterPageOut}>
      <Navbar>
        <NavTitle>
          Donate
          <DonateIcon />
        </NavTitle>
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        Marcobot is free. Free from ads, data harvesting (absolutely no information is collected or stored),
        and other monetization mechanisms that have made much of the internet shit.
      </Block>
      <Block>
        If you find Marcobot valuable, please consider donating, even just a dollar, if you can afford to of course. It's the only way I'll be able to keep this alive, and continue working on it.
      </Block>
      <Block>Thanks for your support. 
          <p>Marco.</p></Block>
      <Block>
        <div id="donateButtons">
          <div>
            <Link color="white" href="https://www.patreon.com/bePatron?u=7282195" external>
              <div id="patreonButton">
                <img id="patreonLogo" src={patreon} alt="" />
                Patreon
              </div>
            </Link>
            <Link style={{ marginLeft: "1rem" }}></Link>

            <Link color="white" href="https://www.paypal.com/donate?hosted_button_id=8TRKHBL2AKUCA" external>
              <div id="paypalButton">
                <img id="paypalLogo" src={paypal} alt="" />
                
              </div>
            </Link>
          </div>

          <img id="bitcoinLogo" src={bitcoin} alt="" />
          <div
            style={{
              alignSelf: "center",
              paddingLeft: "0.75rem",
              paddingTop: "0.3rem",
            }}
          >
            1HnHSWMkMKd2FsMJJ7rfV8gfT5mbWtbNSA
          </div>
        </div>

        {/* <div id="nanoButton">
          <img id="nanoLogo" src={nano} alt="" />
          <div style={{ fontSize: "1.8vw", fontWeight: "400", paddingLeft: "0.75rem" }}>
            nano_1bsa45aho65poboyx1mbqx7whcsjked81eshwstphwdu5mytj7uuxuich6ot
          </div>
        </div> */}
      </Block>
    </Page>
  );
}

export default DonatePage;
