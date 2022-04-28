import React from "react";

import SvgButton from "../../Reusable_Components/SvgButton";
import { SvgIconType } from "../../../constants/constants";

class EditSupplierRow extends React.Component {
  didClickDelete = (id) => {
    this.props.didClickDelete(id);
  };

  didClickEdit = (supplierToEdit) => {
    this.props.didClickEdit(supplierToEdit);
  };

  render() {
    return (
      <tr className="elementToFadeInFive" style={{ background: this.props.bgcolor }}>
        <td>{this.props.dataSource ? this.props.dataSource.name : ""}</td>
        <td>{this.props.dataSource ? this.props.dataSource.contact : ""}</td>
        <td>{this.props.dataSource ? this.props.dataSource.phone : ""}</td>
        <td>{this.props.dataSource ? this.props.dataSource.email : ""}</td>
        <td>
          <SvgButton
            title="Edit"
            color="#FFFFFF"
            type={SvgIconType.Edit}
            didClick={() => this.didClickEdit(this.props.dataSource)}
          />
        </td>
        <td>
          <SvgButton
            title="Delete"
            color="#FFFFFF"
            type={SvgIconType.Delete}
            didClick={() => this.didClickDelete(this.props.dataSource._id)}
          />
        </td>
      </tr>
    );
  }
}

EditSupplierRow.defaultProps = {};

export default EditSupplierRow;
