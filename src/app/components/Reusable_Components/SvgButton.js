import React from "react";

import SvgIcon from "./SvgIcon";

class SvgButton extends React.Component {
  render() {
    const style = {
      // display: "inline-block",
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: this.props.color,
      textDecoration: "none",
      fontSize: "14px",
      border: "0",
      borderColor: "#FFFFFF",
      marginBottom: "5px",
      borderRadius: "5px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    return (
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <SvgIcon color={this.props.color} type={this.props.type} />
        <button
          style={style}
          onClick={() => {
            this.props.didClick();
          }}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

SvgButton.defaultProps = {
  didClick: () => {
  },
};

export default SvgButton;
