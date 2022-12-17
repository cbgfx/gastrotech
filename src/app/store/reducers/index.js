import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // user the "as" keyword to make the import name's a little less confusing




// What is actually accessible from MapToProps.
// Keys can have any value and don't need to match the reducer value
export default combineReducers({
  // someKey: someReducer,
  form: formReducer, // we have to use the key "form" as required by redux-form. This reducer will handle all forms in app
});
