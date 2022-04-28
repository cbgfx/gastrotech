import React from "react";

import SvgButton from "../../Reusable_Components/SvgButton";
import { SvgIconType } from "../../../constants/constants";
import EditSupplierRow from "./EditSupplierRow";

class EditSupplierTable extends React.Component {
  didClickAdd = () => {
    this.props.didClickAdd();
  };

  didClickEdit = (supplierToEdit) => {
    this.props.didClickEdit(supplierToEdit);
  };

  didClickDelete = (id) => {
    this.props.didClickDelete(id);
  };

  render() {

    return (
      <table className="table table-striped table-hover text-white">
        <thead>
          <tr>
            <th style={{ background: "#342741", borderTop: "none" }}>
              <SvgButton
                title="Add"
                color="#FFFFFF"
                type={SvgIconType.Add}
                didClick={() => this.didClickAdd()}
              />
            </th>
          </tr>
          <tr>
            <th scope="col">{this.props.modelType}</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">E-Mail</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.dataSource.map((item, i) => (
            <React.Fragment key={i}>
              <EditSupplierRow
                key={item._id}
                dataSource={item}
                bgcolor={i % 2 === 0 ? "#301934" : "#3c1f41"}
                didClickDelete={(id) => this.didClickDelete(id)}
                didClickEdit={(item) => this.didClickEdit(item)}
              />
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Number of {this.props.modelType}:</td>
            <td>{this.props.dataSource.length}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

EditSupplierTable.defaultProps = {};

export default EditSupplierTable;
