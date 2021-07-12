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
import "@css/MaintenancePage.css";

function MaintenancePage() {

  return (
    <Page id="maintenancePageRoot">
      <div id="maintenancePageBody">
        <Block>
            <img id="logo" src={marcobot} alt="" />   
        </Block>
        <Block>
            Sorry, Marcobot is currently undergoing maintenance...
        </Block>
        <Block>
        </Block>
      </div>
    </Page>
  );
}

export default MaintenancePage;
