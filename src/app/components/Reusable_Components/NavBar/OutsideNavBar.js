import React from "react";
import { Link } from "react-router-dom";
//import * as urls from "../../../constants/urls";

class OutsideNavBar extends React.Component {
  render() {
    return (<React.Fragment>
        <li className="navli"><Link to="/">Inventory</Link></li>
        <li className="navli"><Link to="/schedule">Schedule</Link></li>
        </React.Fragment>
        );
  }
}

export default OutsideNavBar;