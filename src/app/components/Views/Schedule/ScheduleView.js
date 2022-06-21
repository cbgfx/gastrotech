import React from "react";

import * as constants from "../../../constants/constants"
import Footer from "../../Reusable_Components/Footer";
import MainTitle from "../../Reusable_Components/MainTitle";

class ScheduleView extends React.Component {
  state = { showPopup: false, passLog: false};

  textPass = (a) => {
    if (a === "hazel") {
      this.setState({ passLog: true });
    }
  };

  render() {
    return (
      <div className="fields center">
        <MainTitle />
        <h1>Conefetti Scheduler: </h1>
        <div>
          {this.state.passLog ? (
            <div>
              <img src={constants.SCHEDULE} alt="schedule"></img>
            </div>
          ) : (
            <p>
              Password:{" "}
              <input
                type="ui search"
                placeholder="Password"
                onChange={(e) => {
                  this.textPass(e.target.value);
                }}
              />{" "}
            </p>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

ScheduleView.defaultProps = {};


export default ScheduleView;
