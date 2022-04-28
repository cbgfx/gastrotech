import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { signUp } from "../../../store/actions/UserView";
import SvgLabel from "../../Reusable_Components/SvgLabel";
import SvgIcon from "../../Reusable_Components/SvgIcon";
import { SvgIconType } from "../../../constants/constants";
import { evalutatePassword } from "../../../constants/helpers";

import MainTitle from "../../Reusable_Components/MainTitle";
import * as reduxStyle from "../../../css/reduxStyle";
import "../../../css/notificationBars.css";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";

class SignUp extends React.Component {
  state = { errorMessage: null, passScore: "", infoMessage: null };

  checkPassStrength = (pass) => {
    this.setState({ passScore: evalutatePassword(pass) });
  };

  //formProps passed by Field by default
  renderUsernameField = ({ input, title, iconType, notificationText }) => {
    return (
      <div>
        <div className="row"  onClick={(e) => this.notificationCallOut(e, notificationText)}>
          <div className="col-sm-4">
            <SvgLabel
              type={iconType}
              value={title}
              color="#FFFFFF"
            />
          </div>
          <div className="col-sm-4">
            <SvgIcon color="#FFFFFF" type={SvgIconType.Question} />
          </div>
        </div>
        <input type="text" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    );
  };

  renderPasswordField = ({ input, title, iconType }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input
          type="password"
          {...input}
          style={reduxStyle.inputStyle.gold}
          onKeyDown={(e) => {
            this.checkPassStrength(e.target.value);
          }}
        />
      </div>
    );
  };

  rendercPasswordField = ({ input, title, iconType }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input type="password" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    );
  };

  notificationCallOut = (e, text) => {
    e.preventDefault();
    this.setState({ infoMessage: text });
  };

  onSubmit = (formValues) => {
    if (
      !formValues.email ||
      formValues.email.indexOf("@") <= 0 ||
      formValues.email.indexOf(".") <= 0
    ) {
      this.setState({ errorMessage: "You must enter a valid E-mail." });
      return;
    }
    if (!formValues.username) {
      this.setState({ errorMessage: "You must enter a Username." });
      return;
    }
    if (!formValues.name) {
      this.setState({ errorMessage: "You must enter your Display Name." });
      return;
    }
    if (!formValues.password || formValues.password.length < 6) {
      this.setState({
        errorMessage: "You must enter minimum 6 characters for the Password.",
      });
      return;
    }
    if (formValues.password !== formValues.cpassword) {
      this.setState({ errorMessage: "The Passwords do not match." });
      return;
    }
    if (formValues.bot !== "10") {
      this.setState({
        errorMessage:
          "BotCheck: 1001111 1101110 1101100 1111001 100000 1001000 1110101 1101101 1100001 1101110 1110011 100000 1000001 1101100 1101100 1101111 1110111 1100101 1100100",
      });
      return;
    }
    formValues.email = formValues.email.toLowerCase();
    formValues.username = formValues.username.toLowerCase();
    this.props.signUp(formValues);
    this.setState({ errorMessage: null });
  };

  render() {
    return (
      <React.Fragment>
        <div className="fields center">
          <NavBar userNav={false} />
          <MainTitle />
        </div>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <h1>Sign Up</h1>
              <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                {/* "title" prop is custom added. So Field will throw its value in formProps prop, so we can use/exctract it above */}
                <Field
                  name="email"
                  component={this.renderUsernameField}
                  title="E-Mail:"
                  iconType={SvgIconType.Email}
                  notificationText="Your E-mail is requied so you can retrieve your password, should you ever forget it."
                />
                <br />
                <Field
                  name="username"
                  component={this.renderUsernameField}
                  title="Username:"
                  iconType={SvgIconType.UserName}
                  notificationText="Your UserName is used to log in and invited to join your friends' Campaigns. This cannot be changed."
                />
                <br />
                <Field
                  name="name"
                  component={this.renderUsernameField}
                  title="Display Name:"
                  iconType={SvgIconType.Name}
                  notificationText="Your Display Name is the name you want us to call you and how you will appear in friends' Campaigns."
                />

                <br />
                <Field
                  name="password"
                  component={this.renderPasswordField}
                  title="Password:"
                  iconType={SvgIconType.PassKey}
                />
                {this.state.passScore}
                <br />
                <Field
                  name="cpassword"
                  component={this.rendercPasswordField}
                  title="Confirm Password:"
                  iconType={SvgIconType.PassKey}
                />
                <br />
                <Field
                  name="bot"
                  component={this.renderUsernameField}
                  title="5 + 5 ="
                  iconType={SvgIconType.Robot}
                  notificationText="Less annoying than a Captcha... 01110011 01110100 01101001 01101100 01101100 00100000 01110111 01101111 01110010 01101011 01110011 00100000 01100001 01100111 01100001 01101001 01101110 01110011 01110100 00100000 01111001 01101111 01110101"
                />
                <br />
                <button className="ui button primary">Sign Up</button>
              </form>
            </div>
            <div className="col-sm-4">
              {" "}
              {this.state.infoMessage ? (
                <div className="bar infoBox">{this.state.infoMessage}</div>
              ) : null}
            </div>
          </div>
          {this.state.errorMessage ? (
            <div className="bar errorBox">{this.state.errorMessage}</div>
          ) : null}
          {this.props.errorMessage ? (
            <div className="bar errorBox">{this.props.errorMessage}</div>
          ) : null}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.signupUserReducer.errorMessage };
};

const formRedux = reduxForm({ form: "signUpForm" })(SignUp);

export default connect(mapStateToProps, { signUp })(formRedux);
