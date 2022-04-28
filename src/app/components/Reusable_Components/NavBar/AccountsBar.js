import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../../../history";
import * as urls from "../../../constants/urls";
import "../../../css/header.css";
import { logout } from "../../../store/actions/UserView";
//import * as urls from "../../../constants/urls";

class AccountsBar extends React.Component {
  renderLoggedInBar = () => {
    return (
      <div className="navRight">
        <Link to={urls.account.path(this.props.user._id)}>
          Account ({this.props.user.username})
        </Link>
        -
        <button className="blueButtonStyle" onClick={() => this.props.logout()}>
          Logout
        </button>
      </div>
    );
  };

  render() {
    const sessionToken = localStorage.jwtToken;
    if (!sessionToken) {
      history.replace(urls.login.route);
    }

    return (
      <div className="navRight">
        {sessionToken ? (
          this.renderLoggedInBar()
        ) : (
          <li className="navli">
            <Link to={urls.login.route}>Login</Link>
          </li>
        )}
      </div>
    );
  }
}

AccountsBar.defaultProps = { campaignID: 0 };

const mapStateToProps = (state, ownProps) => {
  return { user: state.userReducer }; //Object.values extracts the values and puts them in array
};

export default connect(mapStateToProps, { logout })(AccountsBar);

//Do Login, Logout, and check if logged in here.
