import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // user the "as" keyword to make the import name's a little less confusing
import { arrayToObject, omit } from "./helpers";
import { getUserFromLocalStorage } from "../../constants/helpers";

/*------ JS GAYNESS -------
  ** State Array Ops **
  - Push element "x"  : [...state, 'x']
- Remove element "x": state.filter(e => e !== "x")
- Replace 'x' w/ 'y': state.map(e => e === 'x' ? 'y' : e)

  ** State Object Ops **
  - Add new property to object : {...state, newProp: "x"}
- Update property in object  : {...state, oldProp: "x"}
- Delete property from object: {...state, oldProp: undefined}
*/

//--- MARK: SIGNUPUSER REDUCER
const signupUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return { ...state, errorMessage: null };

    case "SIGNUP_USER_ERROR":
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const editUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, ...action.payload };

    case "DID_CANCEL_DELETE_USER":
      return { ...state, userToDelete: null };

    case "DID_CLICK_DELETE_USER":
      return { ...state, userToDelete: action.payload };

    case "NEW_USERPIC_TO_UPLOAD":
      return { ...state, newAvatar: action.payload };

    case "VIEW_UNMOUNT":
      return {};

    default:
      return state;
  }
};

//--- MARK: USER REDUCER

const userReducer = (
  state = {
    _id: getUserFromLocalStorage()._id,
    username: getUserFromLocalStorage().userName,
    name: getUserFromLocalStorage().name,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload,
        errorMessage: null,
        succcessMessage: "Logging in...",
      };

    case "UPDATE_USER":
      return { ...state, name: action.payload };

    case "LOGOUT_USER":
      return {};

    case "REFRESH_USER":
      return { _id: action._id, username: action.username, name: action.name };

    case "LOGIN_ERROR":
      return { ...state, errorMessage: action.payload, successMessage: null };

    default:
      return state;
  }
};

//--- MARK: FILTER VIEW REDUCERS

const filterViewReducer = (
  state = {
    values: {},
    selectedCategory: null,
    selectedFilterValues: {},
    filteredValues: {},
    metSelected: null,
    aliveSelected: null,
    visible: false,
  },
  action
) => {
  switch (action.type) {
    case "DELETE_NPC":
      //TODO: Need to do a bunch of thinggs to remove deleted NPC from the datasource
      return {
        ...state,
      };

    case "FILTER_ITEMS_FM":
      return {
        ...state,
        filteredValues: arrayToObject(action.payload, "_id"),
      };

    case "SHOW_FILTER_VIEW":
      return { ...state, visible: true };

    case "HIDE_FILTER_VIEW":
      return { ...state, selectedCategory: null, visible: false };

    case "DID_TOGGLE_MET":
      switch (action.payload) {
        case true:
          return {
            ...state,
            metSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              met: action.payload,
            },
          };

        case false:
          return {
            ...state,
            metSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              met: action.payload,
            },
          };

        default:
          return {
            ...state,
            metSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              met: action.payload,
            },
          };
      }

    case "NULLIFY_MET":
      return {
        ...state,
        metSelected: action.payload,
        selectedFilterValues: omit("met", state.selectedFilterValues),
      };

    case "DID_TOGGLE_ALIVE":
      switch (action.payload) {
        case true:
          return {
            ...state,
            aliveSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              alive: action.payload,
            },
          };

        case false:
          return {
            ...state,
            aliveSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              alive: action.payload,
            },
          };

        default:
          return {
            ...state,
            aliveSelected: action.payload,
            selectedFilterValues: {
              ...state.selectedFilterValues,
              alive: action.payload,
            },
          };
        //     return { ...state, aliveSelected: action.payload, selectedFilterValues: omit("alive",state.selectedFilterValues) };
      }

    case "NULLIFY_ALIVE":
      return {
        ...state,
        aliveSelected: action.payload,
        selectedFilterValues: omit("alive", state.selectedFilterValues),
      };

    case "DID_SELECT_FILTER_CATEGORY_VALUE":
      if (
        state.selectedFilterValues[state.selectedCategory] &&
        state.selectedFilterValues[state.selectedCategory][action.payload._id]
      ) {
        // Selected value already exists, remove it from category array

        var selectedFilterValues = {};

        const temp = {
          ...state.selectedFilterValues,
          [state.selectedCategory]: omit(
            [action.payload._id],
            state.selectedFilterValues[state.selectedCategory]
          ),
        };

        // Check that if after deselecting a value, the category becomes emtpy. If so then remove the category from selectedFilterValues
        if (Object.keys(temp[state.selectedCategory]).length === 0) {
          selectedFilterValues = omit(
            state.selectedCategory,
            state.selectedFilterValues
          );
        } else {
          // Remove deselected filter value from category but keep category
          selectedFilterValues = temp;
        }

        return {
          ...state,
          selectedFilterValues: selectedFilterValues,
        };
      } else {
        // New Selection add to category array

        return {
          ...state,
          selectedFilterValues: {
            ...state.selectedFilterValues,
            [state.selectedCategory]: {
              ...state.selectedFilterValues[state.selectedCategory],
              [action.payload._id]: action.payload.name,
            },
          },
        };
      }

    case "CLEAR_FILTER_SELECTION":
      return {
        ...state,
        selectedCategory: null,
        selectedFilterValues: {},
        metSelected: null,
        aliveSelected: null,
      };

    case "GET_POSITIONS_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_RACES_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_RELATIONSHIPS_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_ORGANIZATIONS_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_STATS_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_LOCATIONS_FM":
      return {
        ...state,
        values: arrayToObject(action.payload.data, "_id"),
        filteredValues: arrayToObject(action.payload.data, "_id"),
        selectedCategory: action.payload.category,
      };

    case "GET_DISPOSITIONS_FM":
      return {
        ...state,
        values: action.payload.data,
        selectedCategory: action.payload.category,
        filteredValues: arrayToObject(action.payload.data, "_id"),
      };

    default:
      return state;
  }
};

//--- MARK: CATEGORY REDUCERS

const suppliersViewReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SUPPLIERS":
      return { ...arrayToObject(action.payload, "_id") };

    case "GET_SUPPLIER":
      return { ...state, ...action.payload };

    case "CREATE_SUPPLIER":
      return { ...state, [action.payload._id]: action.payload };

    case "EDIT_SUPPLIER":
      return { ...state, [action.payload._id]: action.payload };

    case "DELETE_SUPPLIER":
      return omit([action.payload], state);

    default:
      return state;
  }
};

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case "FORGOT_ERROR":
      return { ...state, errorMessage: action.payload };

    case "CLEAR_ERRORS":
      return {};

    default:
      return state;
  }
};

// What is actually accessible from MapToProps.
// Keys can have any value and don't need to match the reducer value
export default combineReducers({
  // someKey: someReducer,
  form: formReducer, // we have to use the key "form" as required by redux-form. This reducer will handle all forms in app
  filterViewReducer,
  signupUserReducer,
  userReducer,
  editUserReducer,
  suppliersViewReducer,
  errorReducer,
});
