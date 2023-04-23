import React from "react";
import * as constants from "../../constants/constants";

class Footer extends React.Component {

  render() {
    return (
      <div>
      <div style={{position:"relative", bottom:"0", height: "50px", width: "100%", textAlign:"center", marginTop: "50px", marginBottom:"25px", padding: "10px",}}>
      <br />
        <font color="red">RedNimbus&#169;</font> {new Date().getFullYear()} GastroTech App v{constants.APPVERSION} BETA, All Rights Reserved.
        <div><a href="/privacy.html">Privacy Policy.</a></div>
    </div>
    </div>
    );
  }
}

export default Footer;
