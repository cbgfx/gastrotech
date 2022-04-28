import React from "react";
import { connect } from "react-redux";

import "../../../css/notificationBars.css";

import UserDeletePopup from "../../Popups/UserDeletePopup";
import AccountForm from "./AccountForm";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import Footer from "../../Reusable_Components/Footer";
import SvgButton from "../../Reusable_Components/SvgButton";
import { SvgIconType } from "../../../constants/constants";

import {
  fetchUser,
  editUser,
  deleteUserAndClosePopup,
  didClickDelete,
} from "../../../store/actions/UserView";

class AccountView extends React.Component {
  state = { avatarClean: true, errorMessage: null };

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  didClickAvatarChange = () => {
    this.setState({ avatarClean: false });
  };

  onSubmit = (formValues) => {
    if (!formValues.name) {
      this.setState({ errorMessage: "You must enter a Display Name." });
      return;
    }
    if (
      !formValues.email ||
      formValues.email.indexOf("@") <= 0 ||
      formValues.email.indexOf(".") <= 0
    ) {
      this.setState({ errorMessage: "You must enter a valid E-mail." });
      return;
    }
    this.props.editUser(formValues, this.props.user.newAvatar);
    this.setState({ errorMessage: null });
  };

  render() {
    return (
      <div>
        <AccountsBar />
        <NavBar userNav={false} backButton={true} />
        {this.props.userToDelete ? (
          <UserDeletePopup
            itemName={this.props.user.username}
            didClickDelete={() =>
              this.props.deleteUserAndClosePopup(this.props.userToDelete)
            }
          />
        ) : null}
        <h1>Account</h1>
        {this.state.errorMessage ? (
          <div className="bar errorBox">{this.state.errorMessage}</div>
        ) : null}
        <AccountForm
          initialValues={this.props.user}
          onSubmit={this.onSubmit}
          avatar={this.props.user.avatar}
        />

        <SvgButton
          color="#FF4D4D"
          type={SvgIconType.Delete}
          title="Delete My Account!"
          didClick={() => this.props.didClickDelete(this.props.user._id)}
        ></SvgButton>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.editUserReducer,
    userToDelete: state.editUserReducer.userToDelete,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  editUser,
  deleteUserAndClosePopup,
  didClickDelete,
})(AccountView);

//ALLOW PEOPLE TO UPDATE FIRST NAME / EMAIL (needs reconfirmation) / PASSWORD
//AND TO DELETE ACCOUNT
