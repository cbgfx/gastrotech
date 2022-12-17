import japi from "../japi";

export const fetchItems = () => async (dispatch) => {
  const response = await japi.get(`/items`);
  dispatch({ type: "GET_ITEMS", payload: response.data });
};

export const fetchItem = (itemID) => async (dispatch) => {
  const response = await japi.get(`/items/${itemID}`);
  dispatch({ type: "GET_ITEM", payload: response.data });
};

export const createItem = (itemsObj) => async (dispatch) => {
  const newitemObj = { ...itemsObj };
  const response = await japi.post("/items/create", newitemObj);
  dispatch({ type: "CREATE_ITEMS", payload: response.data });
};

export const editItem = (newFields) => async (dispatch) => {
  const response = await japi.patch(
    `/items/edit?id=${newFields._id}`,
    newFields
  );
  dispatch({ type: "EDIT_ITEMS", payload: response.data });
};

export const deleteItem = (id, campaignID) => async (dispatch) => {
  await japi.delete(`/items/delete?id=${id}`);
  dispatch({ type: "DELETE_ITEM", payload: id });
};
