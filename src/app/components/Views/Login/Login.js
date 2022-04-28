import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { login } from "../../../../app/store/actions/UserView";

import MainTitle from "../../Reusable_Components/MainTitle";
import * as reduxStyle from "../../../css/reduxStyle";
import "../../../css/notificationBars.css";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";
import * as url from "../../../constants/urls";

class Login extends React.Component {
  state = { errorMessage: null };
  //formProps passed by Field by default
  renderUsernameField = (formProps) => {
    return (
      <div className="ui input icon">
        <label style={reduxStyle.textStyle.white}>
          {formProps.label}: &nbsp;
        </label>
        <input
          type="text"
          onChange={formProps.input.onChange} //hook the input component to the Field's props
          value={formProps.input.value}
          style={reduxStyle.inputStyle.gold}
        />
      </div>
    );
  };

  // destructure the input field out of formProps for brievity
  renderPasswordField = ({ input, meta, label }) => {
    return (
      <div className="ui input icon">
        <label style={reduxStyle.textStyle.white}>{label}: &nbsp;</label>
        {/* alternate syntax to hook Field props to the input's */}
        <input type="password" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    );
  };

  onSubmit = (formValues) => {
    if (!formValues.username) {
      this.setState({ errorMessage: "You must enter a Username." });
      return;
    }
    if (!formValues.password) {
      this.setState({ errorMessage: "You must enter a Password." });
      return;
    }
    formValues.username = formValues.username.toLowerCase();
    this.props.login(formValues.username, formValues.password);
    this.setState({ errorMessage: null});
  };

  render() {
    return (
      <div className="fields center">
        <NavBar userNav={false} />
        <MainTitle />
        <h1>Login</h1>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          {/* "label" prop is custom added. So Field will throw its value in formProps prop, so we can use/exctract it above */}
          <Field
            name="username"
            component={this.renderUsernameField}
            label="Username"
          />
          <br />
          <Field
            name="password"
            component={this.renderPasswordField}
            label="Password"
          />
          <br />
          <button className="ui button primary">Login</button>
        </form>
        <br />
        <a href={url.forgot.route}>Forgot Your Username / Password?</a>
        {this.state.errorMessage ? (
          <div className="bar errorBox">{this.state.errorMessage}</div>
        ) : null}
        {this.props.successMessage ? (
          <div className="bar successBox">{this.props.successMessage}</div>
        ) : null}
        {this.props.errorMessage ? (
          <div className="bar errorBox">{this.props.errorMessage}</div>
        ) : null}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.userReducer.errorMessage,
    successMessage: state.userReducer.successMessage };
};

const formRedux = reduxForm({ form: "loginForm" })(Login);

export default connect(mapStateToProps, { login })(formRedux);
