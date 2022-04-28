import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as urls from "../../../constants/urls";

import BlueButton from "../../Reusable_Components/BlueButton";
import MainTitle from "../../Reusable_Components/MainTitle";
import Footer from "../../Reusable_Components/Footer";
import { logout, isUserLoggedIn } from "../../../store/actions/UserView";

class Welcome extends React.Component {
  componentDidMount() {
    this.props.isUserLoggedIn();
  }

  render() {

    var isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      return (
        <div className="fields center">
          <MainTitle />
          <h1>Conefetti Inventory System: </h1>
          <div className="container-sm">
            We believe your experience will be better using our{" "}
            <a href="https://apps.apple.com/ca/app/npc-tracker/id1504359362">
              App
            </a>
            !<p />
            <Link to={urls.login.route}>
              <BlueButton title="Login" />
            </Link>
            <Link to="/signup">
              <BlueButton title="Sign Up" />
            </Link>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="fields center">
          <MainTitle />
          <h1>Select </h1>
          <div className="container-sm">
            <Link to={urls.login.route}>
              <BlueButton title="Login" />
            </Link>
            <Link to="/signup">
              <BlueButton title="Sign Up" />
            </Link>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.userReducer }; //Object.values extracts the values and puts them in array
};

export default connect(mapStateToProps, { logout, isUserLoggedIn })(Welcome);
