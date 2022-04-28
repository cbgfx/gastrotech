import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { cancelUserEdit } from "../../../store/actions/UserView";
import SvgLabel from "../../Reusable_Components/SvgLabel";
import { UserField, SvgIconType } from "../../../constants/constants";
import * as reduxStyle from "../../../css/reduxStyle";
import * as urls from "../../../constants/urls";

class UserEditForm extends React.Component {

  renderNameField = ({ input, iconType, title }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input type="text" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    );
  };
  renderUserNameField = ({ input, iconType, title }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input
          type="text"
          {...input}
          style={reduxStyle.inputStyle.gold}
          disabled
        />
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
          <Field
            name={UserField.Username}
            component={this.renderUserNameField}
            iconType={SvgIconType.UserName}
            title="Username"
          />
          <br />
          <Field
            name={UserField.Email}
            component={this.renderNameField}
            iconType={SvgIconType.Email}
            title="E-Mail"
          />
          <br />
          <Field
            name={UserField.Name}
            component={this.renderNameField}
            iconType={SvgIconType.Name}
            title="Display Name"
          />
          <br />
          <div style={{ paddingBottom: 25 }}>
            <br />

            <Link to={urls.changePass.path(this.props.initialValues._id)}>
              Change Password
            </Link>
            <br />
          </div>
          <button className="ui button primary">Save</button>
          <button
            className="ui orange button"
            onClick={() => this.props.cancelUserEdit()}
          >
            Cancel
          </button>
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
})(UserEditForm);

export default connect(mapStateToProps, { cancelUserEdit })(formRedux);
