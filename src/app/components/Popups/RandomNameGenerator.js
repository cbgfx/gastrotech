import React from "react";
//import { withRouter } from "../../../withRoute";

import {
  MaleNameRandomizer,
  FemaleNameRandomizer,
  FantasyNameRandomizer,
  CityNameRandomizer,
} from "../../constants/nameGenerator";

class RandomNameGenerator extends React.Component {
  state = { randomName: "" };

  onCancel = () => {
    this.props.closePopup();
  };

  generateRandomName = (v) => {
    switch (v) {
      case 0:
        this.setState({ randomName: MaleNameRandomizer() });
        return;
      case 1:
        this.setState({ randomName: FemaleNameRandomizer() });
        return;
      case 2:
        this.setState({ randomName: FantasyNameRandomizer() });
        return;
      case 3:
        this.setState({ randomName: CityNameRandomizer() });
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="popup">
        <label className="popup_hide_label" onClick={this.onCancel}></label>
        <div className="popup_inner_gen" onClick={(e) => e.stopPropagation()}>
          <div className="header">Randomize a Name:</div>
          <div>
            <label style={{ color: "#e29b30" }}>{this.state.randomName}</label>
          </div>
          <div>
            <div className="inline">
              <button
                type="button"
                className="blueButtonStyle"
                onClick={() => this.generateRandomName(0)}
              >
                <i className="large male icon"></i>Male
              </button>
              <button
                type="button"
                className="blueButtonStyle"
                onClick={() => this.generateRandomName(1)}
              >
                <i className="large female icon"></i>Female
              </button>
              <button
                type="button"
                className="blueButtonStyle"
                onClick={() => this.generateRandomName(2)}
              >
                <i className="large pied piper alternate icon"></i>Fantasy
              </button>

              <button
                type="button"
                className="blueButtonStyle"
                onClick={() => this.generateRandomName(3)}
              >
                <i className="map signs icon"></i>City
              </button>
            </div>
            <div>
              <br />
              <button className="ui button orange" onClick={this.onCancel}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RandomNameGenerator.defaultProps = {};

export default RandomNameGenerator;
// export default withRouter(RandomNameGenerator);
