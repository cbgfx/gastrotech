import React from "react";

import SvgIcon from "./SvgIcon";

class SvgLabel extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: this.props.color,
          textAlign: "left",
          fontSize: this.props.size
        }}
        onClick={() => {
          this.props.didClick();
        }}
      >
        <SvgIcon color={this.props.color} type={this.props.type} /> &nbsp;{" "}
        {this.props.value} &nbsp;
      </div>
    );
  }
}

SvgLabel.defaultProps = {
  didClick: () => {
  },
  fontSize: "regular"
};

export default SvgLabel;
