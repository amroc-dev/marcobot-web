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
import marcobot from "@assets/marcobot_512.png";
import AppleLogin from "@components/AppleLogin";
import { DonateIcon } from "@components/Misc";
import "@css/DonatePage.css";
import patreon from "@assets/patreon.png";
import nano from "@assets/nano.png";
import paypal from "@assets/paypal.png";
import bitcoin from "@assets/bitcoin.png";
import bmac from "@assets/bmac.png";
import kiwanuka from "@assets/kiwanuka.png";
import "@css/HomePage.css";

function DonatePage() {
  const { setAllowLeftPanel } = useContext(F7PanelContext);

  function pageIn() {}

  function afterPageOut() {}

  //   let toastBottom;
  //   const showToastBottom = () => {
  //     // Create toast
  //     if (!toastBottom) {
  //       toastBottom = f7.toast.create({
  //         text: 'Copied to clipboard',
  //         position: 'center',
  //         width:100,
  //         closeTimeout: 2000,
  //       });
  //     }
  //     // Open it
  //     toastBottom.open();
  //   }

  const kiwanukaUrl = (window.navigator.standalone ? "itms-apps" : "https") + "://itunes.apple.com/app/id849796318";

  return (
    <Page onPageBeforeIn={pageIn} onPageAfterOut={afterPageOut}>
      <Navbar>
        <NavTitle>
          <div style={{ display: "flex", alignItems: "center" }}>
            Support Marcobot
            {/* <DonateIcon /> */}
          </div>
        </NavTitle>
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        Marcobot is free. Free from ads, data harvesting (absolutely no information is collected or stored), and other
        monetization mechanisms that burden much of the internet and mobile gaming.
      </Block>
      <Block>
        If you find this project valuable and you can afford to, please consider buying me a coffee, or my game. It's
        the only way I'll be able to keep it alive, and continue to improve it.
      </Block>
      <Block>
        Thanks for your support.
        <p>Marco.</p>
      </Block>
      <Block>
        <div id="donateButtons">
          <Link href="https://www.buymeacoffee.com/marcobot" external>
            <div id="bmacButton">
              <img id="bmacLogo" src={bmac} alt="" />
            </div>
          </Link>

          <Link onClick={() => window.open(kiwanukaUrl)}>
            <div id="kiwanukaPanel">
              <img id="kiwanuka" src={kiwanuka} alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection:"column",
                  alignItems:"flex-start",
                  marginLeft: "0.5rem",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Vectrex",
                  fontSize: "14px",
                }}
              >
                <div style={{ fontSize: "12px" }}>Buy</div>Kiwanuka
              </div>
            </div>
          </Link>

          {/* <Link color="white" href="https://www.patreon.com/bePatron?u=7282195" external>
              <div id="patreonButton">
                <img id="patreonLogo" src={patreon} alt="" />
                Patreon
              </div>
            </Link>
            <Link style={{ marginLeft: "1rem" }}></Link> */}

          {/* <Link color="white" href="https://www.paypal.com/donate?hosted_button_id=8TRKHBL2AKUCA" external>
              <div id="paypalButton">
                <img id="paypalLogo" src={paypal} alt="" />
              </div>
            </Link> */}

          {/* <img id="bitcoinLogo" src={bitcoin} alt="" />
          <div
            style={{
              alignSelf: "center",
              paddingLeft: "0.75rem",
              paddingTop: "0.3rem",
            }}
          >
            1HnHSWMkMKd2FsMJJ7rfV8gfT5mbWtbNSA
          </div> */}

          {/* <Link onClick={ () => showToastBottom()}>
            <div id="nanoButton">
              <img id="nanoLogo" src={nano} alt="" />
            </div>
          </Link>
          <div style={{ overflowWrap: "break-word", maxWidth: "200px", fontWeight: "400", paddingLeft: "0.75rem" }}>
            nano_1bsa45aho65poboyx1mbqx7whcsjked81eshwstphwdu5mytj7uuxuich6ot
          </div> */}
        </div>
      </Block>
    </Page>
  );
}

export default DonatePage;
