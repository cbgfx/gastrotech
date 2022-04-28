import React from "react";
import { connect } from "react-redux";
import {
  hideSideMenu,
  createPosition,
  createRace,
  createOrganization,
  createStats,
  filterItems,
} from "../../../app/store/actions/SideMenu";

import { NPCField, SvgIconType } from "../../constants/constants";
import SvgButton from "../Reusable_Components/SvgButton";
import AddCategoryPopup from "./AddCategoryPopup";
import AddStatPopup from "./AddStatPopup";
import SideMenuRow from "../Views/NPCDetailsView/SideMenuRow";

import "../../css/Popup.css";

class SideMenu extends React.Component {
  state = { showAddPopup: false, showAddStatPopup: false };

  showHidePopup = () => {
    this.setState({ showAddPopup: !this.state.showAddPopup });
  };

  showHideStatPopup = () => {
    this.setState({ showAddStatPopup: !this.state.showAddStatPopup });
  };

  filterText = (t) => {
    this.props.filterItems(t);
  };

  saveNewItem = (formValues) => {
    const newItem = {
      campaignID: this.props.campaignID,
      name: formValues.name,
    };

    const newStat = {
      campaignID: this.props.campaignID,
      name: formValues.name,
      hp: formValues.hp,
      ac: formValues.ac,
      atk: formValues.atk,
      hit: formValues.hit,
    };

    switch (this.props.categoryName) {
      case NPCField.Position:
        this.props.createPosition(newItem);
        break;
      case NPCField.Race:
        this.props.createRace(newItem);
        break;
      case NPCField.Org:
        this.props.createOrganization(newItem);
        break;
      case NPCField.Stats:
        this.props.createStats(newStat);
        break;
      default:
        return;
    }
  };

  didClickAdd = () => {
    switch (this.props.categoryName) {
      case NPCField.Stats:
        this.showHideStatPopup();
        return;
      default:
        this.showHidePopup();
    }
  };

  render() {
    return (
      <div className="popup">
        {this.state.showAddPopup ? (
          <AddCategoryPopup
            editMode={false}
            didSaveNewCategory={(formValues) => this.saveNewItem(formValues)}
            closePopup={() => this.showHidePopup()}
          />
        ) : null}
        {this.state.showAddStatPopup ? (
          <AddStatPopup
            campaignID={this.props.campaignID}
            closePopup={() => this.showHideStatPopup()}
            editMode={false}
            didSaveNewCategory={(formValues) => this.saveNewItem(formValues)}
          />
        ) : null}
        <label
          className="popup_hide_label"
          onClick={() => this.props.hideSideMenu()}
        ></label>
        <div className="popup_inner_sidemenu elementToFadeInFive">
          <table className="table table-striped table-hover text-white">
            <thead>
              <tr>
                <td>
                  <input
                    type="ui search"
                    placeholder="Search"
                    onChange={(e) => {
                      this.filterText(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                {this.props.categoryName === NPCField.Disposition ||
                this.props.categoryName === NPCField.Loc ? null : (
                  <td>
                    <SvgButton
                      title={"Add New " + this.props.categoryName}
                      color="#FFFFFF"
                      type={SvgIconType.Add}
                      didClick={() => this.didClickAdd()}
                    />
                  </td>
                )}
              </tr>
            </thead>
            <tbody>
              {this.props.categoryName === NPCField.Disposition ||
              this.props.categoryName === NPCField.Loc ? null : (
                <SideMenuRow
                  categoryType={this.props.categoryName}
                  data={{ name: "Unknown", _id: "0" }}
                  key="0"
                ></SideMenuRow>
              )}
              {this.props.dataSource.map((category, i) => (
                <SideMenuRow
                  categoryType={this.props.categoryName}
                  data={category}
                  key={i}
                ></SideMenuRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SideMenu.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    categoryName: state.sideMenuReducer.selectedCategory,
    dataSource: Object.values(state.sideMenuReducer.filteredValues),
  };
};

export default connect(mapStateToProps, {
  hideSideMenu,
  createPosition,
  createRace,
  createOrganization,
  createStats,
  filterItems,
})(SideMenu);
