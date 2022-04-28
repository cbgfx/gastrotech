import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import SvgLabel from "../../Reusable_Components/SvgLabel";
import { SvgIconType } from "../../../constants/constants";

import "../../../css/notificationBars.css";

import "../../../css/Popup.css";
import * as reduxStyle from "../../../css/reduxStyle";

class AddSupplierPopup extends React.Component {
  state = { errorMessage: null };

  componentDidMount() {
    this.namefield.focus();
  }

  renderField = ({ input, iconType, title }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input
          type="text"
          {...input}
          style={reduxStyle.inputStyle.gold}
          ref={(inputE1) => (this.namefield = inputE1)}
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    if (formValues.name) {
      this.props.editMode
        ? this.props.didEditCategory(formValues)
        : this.props.didSaveNewCategory(formValues);
      this.props.closePopup();
    } else {
      this.setState({ errorMessage: "Name cannot be empty." });
    }
  };

  onCancel = () => {
    this.props.closePopup();
  };

  isEscape = (eKey) => {
    if (eKey.keyCode === 27) {
      this.onCancel();
    }
  };

  render() {
    return (
      <div className="popup">
        {console.log("state", this.state)}
        <label className="popup_hide_label" onClick={this.onCancel}></label>
        <div className="popup_inner_stat elementToFadeInFive">
          <div className="gridStyle">
            <form
              className="ui form error"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="name"
                component={this.renderField}
                iconType={SvgIconType.Name}
                title="Name:"
              />
              <br />
              <Field
                name="contact"
                component={this.renderField}
                iconType={SvgIconType.Name}
                title="Contact Person:"
              />
              <br />
              <Field
                name="phone"
                component={this.renderField}
                iconType={SvgIconType.Name}
                title="Phone:"
              />
              <br />
              <Field
                name="email"
                component={this.renderField}
                iconType={SvgIconType.Name}
                title="Email:"
              />
              <br />
              {this.state.errorMessage ? (
                <div className="bar errorBox">{this.state.errorMessage}</div>
              ) : null}
              <button className="ui button blue">Save</button>
              <button className="ui button orange" onClick={this.onCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddSupplierPopup.defaultProps = {};

const mapStateToProps = (state) => {
  return { suppliers: state.supplierViewReducer };
};

const formRedux = reduxForm({ form: "addCatForm" })(AddSupplierPopup);

export default connect(mapStateToProps, {})(formRedux);
