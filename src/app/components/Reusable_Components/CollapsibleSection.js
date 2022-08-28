import React from "react";
import "../../css/CollapsibleSection.css";

class CollapsibleSection extends React.Component {
  state = { showSubSection: false };

  showHideSubSection = () => {
    this.setState({ showSubSection: !this.state.showSubSection });
  };

  render() {
    return (
      <div style={{ border: "1px solid" }}>
        <div
          className="gridStyle"
          style={{ background: this.props.bgcolor, borderBottom: "1px solid", color: "#DCA111" }}
          onClick={() => this.showHideSubSection()}
        >
          <div className="col"><b>{this.props.name}</b>            {this.state.showSubSection ? (
              <i className="chevron up icon"></i>
            ) : (
              <i className="chevron down icon"></i>
            )}</div>
        </div>

        <div>
          {this.state.showSubSection ? this.props.embededComponent : null}
        </div>
      </div>
    );
  }
}

// Default value to props, in case we don't pass down any values
CollapsibleSection.defaultProps = {
  title: "Title",
  embededComponent: null,
};

export default CollapsibleSection;
