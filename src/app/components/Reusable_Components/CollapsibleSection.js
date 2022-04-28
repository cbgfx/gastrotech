import React from "react";
import "../../css/CollapsibleSection.css";

import SvgButton from "./SvgButton";
import { SvgIconType } from "../../constants/constants";

class CollapsibleSection extends React.Component {
  state = { showSubSection: false };

  didClickEdit = (locToEdit) => {
    this.props.didClickEditLoc(locToEdit);
  };

  didClickDelete = (locID) => {
    this.props.didClickDeleteLoc(locID);
  };

  didClickAddCity = (locObj) => {
    this.props.didClickAddCity(locObj);
    this.setState({ showSubSection: true })
  };

  showHideSubSection = () => {
    this.setState({ showSubSection: !this.state.showSubSection });
  };

  render() {
    return (
      <div style={{ border: "1px solid" }}>
        <div className="gridStyle" style={{ background: this.props.bgcolor, borderBottom: "1px solid" }} onClick={() => this.showHideSubSection()}>
          <div className="col">
            {this.props.title}
          </div>
          <div className="col" onClick={(e) => e.stopPropagation()}>
            <SvgButton
              title="Add City"
              color="#FFFFFF"
              type={SvgIconType.Add}
              didClick={() => this.didClickAddCity(this.props.item)}
            />
          </div>
          <div className="col" onClick={(e) => e.stopPropagation()}>
            <SvgButton
              title="Edit"
              color="#FFFFFF"
              type={SvgIconType.Edit}
              didClick={() => this.didClickEdit(this.props.item)}
            />
          </div>
          <div className="col" onClick={(e) => e.stopPropagation()}>
            <SvgButton
              title="Delete"
              color="#FFFFFF"
              type={SvgIconType.Delete}
              didClick={() => this.didClickDelete(this.props.item._id)}
            />
          </div>
          <div className="col-1">
            {this.state.showSubSection ? <i className="chevron up icon"></i> : <i className="chevron down icon"></i>}
          </div>
        </div>

        <div>
          {this.state.showSubSection ? this.props.embededComponent : null}
        </div>
      </div>
    );
  }
}

// Default value to props, in case we don't pass down any values
CollapsibleSection.defaultProps = {
  title: "Title",
  embededComponent: null,
};

export default CollapsibleSection;
