import React from "react";
import { connect } from "react-redux";

import {
  createSupplier,
  fetchSuppliers,
  editSupplier,
  deleteSupplier,
} from "../../../store/actions/SupplierView";
import EditSupplierTable from "./EditSupplierTable";
import AddSupplierPopup from "./AddSupplierPopup";
import NavBar from "../../Reusable_Components/NavBar/NavBar";
import AccountsBar from "../../Reusable_Components/NavBar/AccountsBar";
import Footer from "../../Reusable_Components/Footer";

class EditSuppliers extends React.Component {
  state = { showPopup: false, editCategory: {}, editMode: false };
  componentDidMount() {
    this.props.fetchSuppliers();
  }

  showHidePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  didClickAdd = () => {
    this.setState({
      editCategory: {},
      showPopup: !this.state.showPopup,
      editMode: false,
    });
  };

  didClickEdit = (categoryToEdit) => {
    this.setState({
      editCategory: categoryToEdit,
      showPopup: !this.state.showPopup,
      editMode: true,
    });
  };

  saveNewItem = (formValues) => {
    const newItem = {
      name: formValues.name,
      contact: formValues.contact,
      phone: formValues.phone,
      email: formValues.email,
    };
    this.props.createSupplier(newItem);
  };

  editItem = (formValues) => {
    console.log("this is being called!");
    this.props.editSupplier(formValues.id, formValues);
  };

  deleteItem = (itemID) => {
    this.props.deleteSupplier(itemID);
  };

  render() {
    return (
      <div>
        <AccountsBar />
        <NavBar userNav={true} backButton={true} />
        {this.state.showPopup ? (
          <AddSupplierPopup
            editMode={this.state.editMode}
            initialValues={this.state.editCategory}
            didSaveNewCategory={(formValues) => this.saveNewItem(formValues)}
            didEditCategory={(formValues) => this.editItem(formValues)}
            closePopup={() => this.showHidePopup()}
          />
        ) : null}
        <h1>Edit Suppliers</h1>
        <EditSupplierTable
          modelType="Suppliers"
          dataSource={this.props.suppliers}
          didClickAdd={() => this.didClickAdd()}
          didClickDelete={(id) => this.deleteItem(id)}
          didClickEdit={(categoryToEdit) => this.didClickEdit(categoryToEdit)}
        />
        <Footer />
      </div>
    );
  }
}

EditSuppliers.defaultProps = {};

const mapStateToProps = (state) => {
  return { suppliers: Object.values(state.suppliersViewReducer) };
};

export default connect(mapStateToProps, {
  fetchSuppliers,
  createSupplier,
  editSupplier,
  deleteSupplier,
})(EditSuppliers);
