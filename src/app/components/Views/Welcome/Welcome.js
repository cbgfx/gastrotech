import React from "react";
import { Link } from "react-router-dom";

import CoolButton from "../../Reusable_Components/CoolButton";
import MainTitle from "../../Reusable_Components/MainTitle";
import Footer from "../../Reusable_Components/Footer";
import * as CONST from "../../../constants/constants";

class Welcome extends React.Component {
  state = { passLog: false };

  componentDidMount() {
  }

  render() {
    return (
      <div className="fields center">
        <MainTitle />
        <h1>Conefetti System: </h1>
        <div className="container-sm">
          {this.state.passLog ? (
            <div>
              <Link to="/recipe">
                <CoolButton title="Recipe" />
              </Link>
              <Link to="/base">
                <CoolButton title="Bases" />
              </Link>
              <Link to="/drinks">
                <CoolButton title="Drinks" />
              </Link>
            </div>
          ) : (
            <p>
              Password:{" "}
              <input
                type="ui search"
                placeholder="Password"
                onChange={(e) => {
                  if (CONST.textPass(e.target.value, "carl")) {
                    this.setState({ passLog: true });
                  }
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


Welcome.defaultProps = {};
export default Welcome;