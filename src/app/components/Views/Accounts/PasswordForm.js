import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { evalutatePassword } from "../../../constants/helpers";
import {cancelUserEdit} from "../../../store/actions/UserView";
import SvgLabel from "../../Reusable_Components/SvgLabel";
import { SvgIconType } from "../../../constants/constants";
import * as reduxStyle from "../../../css/reduxStyle";

class UserPassForm extends React.Component {
  state = { passScore: "" };

  checkPassStrength = (pass) => {
    this.setState({ passScore: evalutatePassword(pass) });
  };

  renderPasswordField = ({ input, iconType, title }) => {
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
        {this.state.passScore}
      </div>
    );
  };

  rendercPasswordField = ({ input, iconType, title }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input type="password" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="gridStyle">
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          autoComplete="off"
        >
          <br />
          <Field
            name="password"
            component={this.renderPasswordField}
            title="New Password:"
            iconType={SvgIconType.PassKey}
          />
          <br />
          <Field
            name="cpassword"
            component={this.rendercPasswordField}
            title="Re-Enter New Password:"
            iconType={SvgIconType.PassKey}
          />
          <br />
          <button className="ui button primary">Save</button>
          <button className="ui orange button" onClick={() => this.props.cancelUserEdit()}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const formRedux = reduxForm({
  form: "UserEditForm",
  enableReinitialize: true, // Add 'enableReinitialize: true' to enable re-loading the form when state is fetched from remote server
})(UserPassForm);

export default connect(mapStateToProps, {cancelUserEdit})(formRedux);
