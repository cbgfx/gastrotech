import React from "react"
import { connect } from "react-redux"

//import SvgLabel from "../Reusable_Components/SvgLabel"
//import { SvgIconType } from "../../constants/constants"

import "../../css/Popup.css"

class RelationshipPopup extends React.Component {
  state = { errorMessage: null }

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
        <div className="popup_inner_relationship">
          <div className="gridStyle">
            COMING SOON
          </div>
        </div>
      </div>
    )
  }
}

RelationshipPopup.defaultProps = {}


const mapStateToProps = (state) => {
  return { stats: state.relationshipViewReducer }
}

export default connect(mapStateToProps, {  })(RelationshipPopup);