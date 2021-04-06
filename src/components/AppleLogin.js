import React, { useState, useRef, useEffect, useContext } from "react";
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
// import AppleSignin from "react-apple-signin-auth";
// import "@css/AppleLogin.css"

// window.AppleID.auth.init({
//   clientId: "com.mmazzoli.marcobot-web.signin", // This is the service ID we created.
//   scope: "name", // To tell apple we want the user name and emails fields in the response it sends us.
//   redirectURI: "https://marcobot-web.ngrok.io", // As registered along with our service ID
//   //state: "origin:web", // Any string of your choice that you may use for some logic. It's optional and you may omit it.
//   usePopup: true, // Important if we want to capture the data apple sends on the client side.
// });

export default function AppleLogin(props) {
  const [debug, setDebug] = useState("Debug here");

//   const signIn = async () => {
//     let response = null;
//     console.log("signIn");
//     try {
//       response = await window.AppleID.auth.signIn();
    
//       console.log(response);
//       setDebug(JSON.stringify(response));
//     } catch (error) {
//       console.log("Error: " + error);
//       setDebug("Error: " + JSON.stringify(error))
//     }

//     return response;
//   };

//   useEffect(() => {
//     window.addEventListener("AppleIDSignInOnSuccess", (data) => {
//       setDebug(JSON.stringify(data));
//     });

//     window.addEventListener("AppleIDSignInOnFailure", (data) => {
//       setDebug(JSON.stringify(data));
//     });
//   }, []);

//   return (
//     <>
//       <Link onClick={signIn}> Apple Login Test</Link>
//       <Block>
//         <p>{debug}</p>
//       </Block>
//     </>
//   );

    function onSuccess(response) {
      setDebug(JSON.stringify(response));
    }

    function onError(error) {
      setDebug(JSON.stringify(error));
    }

    return (""
    //   <>
    //     <AppleSignin
    //       /** Auth options passed to AppleID.auth.init() */
    //       authOptions={{
    //         /** Client ID - eg: 'com.example.com' */
    //         clientId: "com.mmazzoli.marcobot-web.signin",
    //         /** Requested scopes, seperated by spaces - eg: 'email name' */
    //         scope: "name",
    //         /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
    //         redirectURI: "https://marcobot-web.ngrok.io",
    //         /** State string that is returned with the apple response */
    //         state: "state",
    //         /** Nonce */
    //         nonce: "nonce",
    //         /** Uses popup auth instead of redirection */
    //         usePopup: true,
    //       }} 
    //       /** General props */
    //       uiType="dark"
    //       /** className */
    //       className="apple-auth-btn"
    //       /** Removes default style tag */
    //       noDefaultStyle={false}
    //       /** Extra controlling props */
    //       /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
    //       onSuccess={onSuccess} // default = undefined
    //       /** Called upon signin error */
    //       onError={onError} // default = undefined
    //       /** Skips loading the apple script if true */
    //       skipScript={false} // default = undefined
    //       /** Apple image props */
    //       // iconProp={{ style: { marginTop: '10px' } }} // default = undefined
    //       /** render function - called with all props - can be used to fully customize the UI by rendering your own component  */
    //       // render={(props) => <button {...props}>My Custom Button</button>}
    //     />
    //     {debug}
    //   </>
    );
}
