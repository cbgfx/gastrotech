import React from "react";
import { connect } from "react-redux";

import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import Footer from "../../Reusable_Components/Footer";

class ScheduleView extends React.Component {
  state = { showPopup: false };

  componentDidMount() {
  }

  showHidePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };


  render() {
    return (
      <div>
        <AccountsBar />
        <NavBar userNav={true} backButton={true}/>
        <table className="table table-striped table-hover text-white">
        <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
    <tr>
        <td>{/*Monday*/}
            -----
        </td>
        <td>{/*Tuesday*/}
            -----
        </td>
        <td>{/*Wednesday*/}
            -----
            </td>
        <td>{/*Thursday*/}
            Delphine 3pm-7pm
        <br />Tatiana 7pm-10pm
        </td>
        <td>{/*Friday*/}
            Tessa 3pm-7pm
        <br />Christel  6pm-10pm
        </td>
        <td>{/*Saturday*/}
            Adele 2pm-7pm
            <br />Christel 6pm-10pm
        </td>
        <td>{/*Sunday*/}
            Delphine 11am-4pm
            <br />Adele 4pm-10pm
        </td>
    </tr>
        </table>
      <Footer />
      </div>
    );
  }
}

ScheduleView.defaultProps = {};

const mapStateToProps = (state) => {
  return { items: Object.values(state.itemsViewReducer) };
};

export default connect(mapStateToProps, {
})(ScheduleView);
