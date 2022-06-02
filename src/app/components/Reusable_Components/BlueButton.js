import React from "react";

class BlueButton extends React.Component {
  render() {
    const normalStyle = {
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

    const selectedStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#342741",
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