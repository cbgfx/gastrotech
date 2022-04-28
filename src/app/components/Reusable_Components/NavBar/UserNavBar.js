import React from "react";
import { Link } from "react-router-dom";
import * as urls from "../../../constants/urls";

class UserNavBar extends React.Component {
  state = { displayMenu: false, randomPop: false };

  menuToggle = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  render() {
    return (
      <React.Fragment>
        <li className="navli">
          <Link to={urls.suppliers.route}>Suppliers</Link>
        </li>
      </React.Fragment>
    );
  }
}

UserNavBar.defaultProps = {};

export default UserNavBar;
