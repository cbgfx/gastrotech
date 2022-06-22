import React from "react";
import * as constants from "../../constants/constants";

class Footer extends React.Component {

  render() {
    return (
      <div>
      <div style={{position:"relative", bottom:"0", height: "50px", width: "100%", textAlign:"center", marginTop: "50px", marginBottom:"25px", padding: "10px",}}>
      <small> We do use "Strictly Necessary Cookies", as defined by the GDPR. A session cookie will be placed in order to be able to keep you logged in throughout the experience.</small>
      <br />
        <font color="red">RedNimbus&#169;</font> {new Date().getFullYear()} Conefetti App v{constants.APPVERSION} BETA, All Rights Reserved.
        <div><a href="/privacy.html">Privacy Policy.</a></div>
    </div>
    </div>
    );
  }
}

export default Footer;
