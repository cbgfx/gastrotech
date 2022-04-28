import React from "react";

class BlueButton extends React.Component {
  render() {
    const normalStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#DAA5E9",
      border: "solid 1px",
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "130px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    const selectedStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#ECA72C",
      borderColor: "#2e4057",
      color: "#2e4057",
      border: "solid 2px",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "130px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    return (
      <button
        style={this.props.selected ? selectedStyle : normalStyle}
        onClick={() => {
          this.props.didClick();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}

BlueButton.defaultProps = {
  didClick: () => {
    
  },
};

export default BlueButton;
