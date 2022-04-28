import React from "react"
import "../../../css/header.css"
import * as constants from "../../../constants/constants"

import UserNavBar from "./UserNavBar"
import OutsideNavBar from "./OutsideNavBar"

class NavBar extends React.Component {
  state = {
    toggle: false,
  }

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div className="navBar">
        <button className="navButton" onClick={this.Toggle}>
          <i className="list icon"></i>
        </button>
        <ul className={this.state.toggle ? "links show-nav" : "links"}>
          <li className="navli"><img src={constants.LOGOSMALL}
                    height="40px"
                    width="40px"
                    alt="Small Logo"></img></li>
          {this.props.userNav ? null : (
            <li className="navli">
              <a href="https://conefetti.shop">Home</a>
            </li>
          )}
           {this.props.userNav ? (
            <UserNavBar campaignID={this.props.campaignID} />
          ) : (
            <OutsideNavBar />
          )}
        </ul>
      </div>
    )
  }
}

export default NavBar
