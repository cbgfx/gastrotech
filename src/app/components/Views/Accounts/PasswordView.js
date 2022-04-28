import React from "react";
import { connect } from "react-redux";

import "../../../css/notificationBars.css";

import PasswordForm from "./PasswordForm";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import Footer from "../../Reusable_Components/Footer";

import {
  fetchUser,
  editPassword,
} from "../../../store/actions/UserView";

class PasswordView extends React.Component {
  state = { errorMessage: null };

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    if (formValues.password) {
      if (formValues.password.length < 6) {
        this.setState({
          errorMessage: "You must enter a 6 character Password.",
        });
        return;
      }
      if (formValues.password !== formValues.cpassword) {
        this.setState({ errorMessage: "The Passwords do not match." });
        return;
      }
    }
    this.props.editPassword(formValues, this.props.user);
    this.setState({ errorMessage: null });
  };

  render() {
    return (
      <div>
        <AccountsBar />
        <NavBar userNav={false} backButton={true} />
        <h1>Change Your Password:</h1>
        {this.state.errorMessage ? (
          <div className="bar errorBox">{this.state.errorMessage}</div>
        ) : null}
        <PasswordForm
          initialValues={this.props.user}
          onSubmit={this.onSubmit}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.editUserReducer,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  editPassword,
})(PasswordView);

//ALLOW PEOPLE TO UPDATE FIRST NAME / EMAIL (needs reconfirmation) / PASSWORD
//AND TO DELETE ACCOUNT
