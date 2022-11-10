import React from "react";
import "../../../css/header.css";
import { Link } from "react-router-dom";
import * as constants from "../../../constants/constants";

import CoolButton from "../CoolButton";

class WhiskeyNavBar extends React.Component {
  state = {
    toggle: false,
  };

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navBar">
        <button className="navButton" onClick={this.Toggle}>
          <i className="list icon"></i>
        </button>
        <ul className={this.state.toggle ? "links show-nav" : "links"}>
          <li className="navli">
            <a href="/">
            <img
              src={constants.LOGOSMALL}
              height="40px"
              width="40px"
              alt="Small Logo"
            ></img>
            </a>
          </li>
          <li className="navLi">
            {" "}
            <Link to="/drinks">
              <CoolButton title="Drinks" />
            </Link>
          </li>
          <li className="navLi">
            {" "}
            <Link to="/syrup">
              <CoolButton title="Syrups" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default WhiskeyNavBar;
