import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import MainTitle from "../../Reusable_Components/MainTitle";
import * as reduxStyle from "../../../css/reduxStyle";
import "../../../css/notificationBars.css";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import Footer from "../../Reusable_Components/Footer";
import { sendForgetEmail } from "../../../store/actions/ForgotPassView";

class ForgotUserPass extends React.Component {
  state = { errorMessage: null, successMessage: null };
  //formProps passed by Field by default
  renderEmailField = (formProps) => {
    return (
      <div className="ui input icon">
        <label style={reduxStyle.textStyle.white}>
          {formProps.label}: &nbsp;
        </label>
        <input
          type="text"
          onChange={formProps.input.onChange}
          value={formProps.input.value}
          style={reduxStyle.inputStyle.gold}
        />
      </div>
    );
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

    this.props.sendForgetEmail(formValues.email);
    this.setState({ errorMessage: null, successMessage: "Sending..." });
  };

  render() {
    return (
      <div className="fields center">
        <NavBar userNav={false} />
        <MainTitle />
        <h1>Forgot Your Username / Password</h1>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="email"
            component={this.renderEmailField}
            label="Account's E-Mail"
          />
          <br />
          <br />
          <button className="ui button primary">Send my Username</button>
        </form>

        <div>Please also check your Junk Mail. If you still do not receive the e-mail, please <a href="mailto:forgot@npc-tracker.com"><u>contact us.</u></a></div>
        {this.state.successMessage ? (
          <div className="bar successBox">{this.state.successMessage}</div>
        ) : null}
        {this.state.errorMessage ? (
          <div className="bar errorBox">{this.state.errorMessage}</div>
        ) : null}
        {this.props.forgotMessage ? (
          <div className="bar errorBox">{this.props.forgotMessage}</div>
        ) : null}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { forgotMessage: state.errorReducer.errorMessage };
};

const formRedux = reduxForm({ form: "forgotForm" })(ForgotUserPass);

export default connect(mapStateToProps, { sendForgetEmail })(formRedux);
