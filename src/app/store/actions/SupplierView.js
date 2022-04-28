import japi from "../japi";

export const fetchSuppliers = () => async (dispatch) => {
  const response = await japi.get(`/suppliers`);
  dispatch({ type: "GET_SUPPLIERS", payload: response.data });
};

export const fetchSupplier = (supplierID) => async (dispatch) => {
  const response = await japi.get(`/suppliers?_id=${supplierID}`);
  dispatch({ type: "GET_SUPPLIER", payload: response.data });
};

export const createSupplier = (supplier) => async (dispatch) => {
  const response = await japi.post("/suppliers/create", supplier);
  dispatch({ type: "CREATE_SUPPLIER", payload: response.data });
};

export const editSupplier = (id, newFields) => async (dispatch) => {
  const newName = { name: newFields };
  const response = await japi.patch(`/suppliers/edit?id=${id}`, newName);
  dispatch({ type: "EDIT_SUPPLIER", payload: response.data });
};

export const deleteSupplier = (id, campaignID) => async (dispatch) => {
  await japi.delete(`/suppliers/delete?id=${id}`);
  dispatch({ type: "DELETE_SUPPLIER", payload: id });
};
