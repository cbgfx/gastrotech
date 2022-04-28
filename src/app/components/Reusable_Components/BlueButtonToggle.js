import React from "react";

class BlueButtonToggle extends React.Component {
  render() {
    const normalStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "#2e4057",
      border: "solid 1px",
      color: "#ECA72C",
      borderColor: "#ECA72C",
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
      backgroundColor: "green",
      borderColor: "#2e4057",
      color: "#2e4057",
      border: "solid 2px",
      marginBottom: "5px",
      borderRadius: "5px",
      width: "130px",
      height: "30px",
      // boxShadow: "0px 6px 8px 1px #e4e3e3", //* h-offset v-offset blur spread color
    };

    const deSelectedStyle = {
      // display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "14px",
      backgroundColor: "red",
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
        style={
          this.props.selected === null
            ? normalStyle
            : this.props.selected === true
            ? selectedStyle
            : deSelectedStyle
        }
        onClick={() => {
          this.props.didClick();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}

BlueButtonToggle.defaultProps = {
  didClick: () => {
    console.log("didClick not implemented");
  },
};

export default BlueButtonToggle;
