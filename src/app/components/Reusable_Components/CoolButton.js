import React from "react";

class CoolButton extends React.Component {
  render() {
    const ConeStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#e29b30",
      border: "solid 1px",
      color: "#000000",
      borderColor: "#000000",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "130px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    const WhiskyStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#335B50",
      borderColor: "#335B50",
      color: "#86764F",
      border: "solid 2px",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "130px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    return (
      <button
        style={this.props.whiskyStyle ?  WhiskyStyle : ConeStyle}
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
