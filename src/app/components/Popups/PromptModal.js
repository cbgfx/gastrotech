import React from "react";
import "../../css/Popup.css";

class PromptModal extends React.Component {
  onSubmit = () => {
    this.props.closePopup();
  };

  closeClick = () => {
    this.props.closePopup();
  };

  render() {
    return (
      <div className="popup">
        <label className="popup_hide_label" onClick={this.closeClick}></label>
        <div className="popup_inner_prompt">
          <div className="header">{this.props.title}</div>
          <div className="content">{this.props.body}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>
    );
  }
}

export default PromptModal;
