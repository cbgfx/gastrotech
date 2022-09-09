import React from "react";

class CoolButton extends React.Component {
  render() {
    const onlyStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#cbd0e2",
      border: "solid 1px",
      color: "#000000",
      borderColor: "#000000",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "180px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    return (
      <button
        style={onlyStyle}
        onClick={() => {
          this.props.didClick();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}

CoolButton.defaultProps = {
  didClick: () => {

  },
};

export default CoolButton;
