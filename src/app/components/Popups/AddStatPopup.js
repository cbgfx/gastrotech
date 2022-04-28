import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"

import SvgLabel from "../Reusable_Components/SvgLabel"
import { SvgIconType } from "../../constants/constants"

import "../../css/Popup.css"
import "../../css/notificationBars.css"
import * as reduxStyle from "../../css/reduxStyle"

class AddStatPopup extends React.Component {
  state = { errorMessage: null }

  renderStatField = ({ input, iconType, title }) => {
    return (
      <div>
        <SvgLabel type={iconType} value={title} color="#FFFFFF" />
        <input type="text" {...input} style={reduxStyle.inputStyle.gold} />
      </div>
    )
  }

  onSubmit = (formValues) => {
    if (formValues.name) {
      this.props.editMode
        ? this.props.didEditCategory(formValues)
        : this.props.didSaveNewCategory(formValues)
      this.props.closePopup()
    } else {
      this.setState({ errorMessage: "Name cannot be empty." })
    }
  }

  onCancel = () => {
    this.props.closePopup()
  }

  isEscape = (eKey) => {
    if (eKey.keyCode === 27) {
      this.onCancel()
    }
  }

  render() {
    return (
      <div className="popup">
        <label className="popup_hide_label" onClick={this.onCancel}></label>
        <div className="popup_inner_stat">
          <div className="gridStyle">
            <form
              className="ui form error"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="name"
                component={this.renderStatField}
                iconType={SvgIconType.Name}
                title="Name:"
              />
              <br />
              <Field
                name="hp"
                component={this.renderStatField}
                iconType={SvgIconType.Alive}
                title="HP:"
              />
              <br />
              <Field
                name="ac"
                component={this.renderStatField}
                iconType={SvgIconType.Position}
                title="AC:"
              />
              <br />
              <Field
                name="hit"
                component={this.renderStatField}
                iconType={SvgIconType.Add}
                title="Hit:"
              />
              <br />
              <Field
                name="atk"
                component={this.renderStatField}
                iconType={SvgIconType.Dices}
                title="Attack:"
              />
              <br />
              {this.state.errorMessage ? (
                <div className="bar errorBox">{this.state.errorMessage}</div>
              ) : null}
              <button className="ui button blue">Save</button>{" "}
              <button className="ui button orange" onClick={this.onCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

AddStatPopup.defaultProps = {}

const mapStateToProps = (state) => {
  return { stats: state.statsViewReducer }
}

const formRedux = reduxForm({ form: "addStatForm" })(AddStatPopup)

export default connect(mapStateToProps, {})(formRedux)
