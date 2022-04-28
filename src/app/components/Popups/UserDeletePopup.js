import React from "react";
import { connect } from "react-redux";
import { closeDeletePopup } from "../../store/actions/UserView";
import "../../css/Popup.css";

class NPCDeletePopup extends React.Component {
  render() {
    return (
      <div className="popup">
        <label
          className="popup_hide_label"
          onClick={() => this.props.closeDeletePopup()}
        ></label>
        <div className="popup_inner_prompt">
          <div>Delete NPC</div>
          <div>Are you sure you want to delete {this.props.itemName}?</div>
          <div>
            <button
              className="ui button negative"
              onClick={() => this.props.didClickDelete()}
            >
              Delete
            </button>
            <button
              className="ui button"
              onClick={() => this.props.closeDeletePopup()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { closeDeletePopup })(NPCDeletePopup);
