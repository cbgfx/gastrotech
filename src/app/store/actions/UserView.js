import japi from "../japi";
import history from "../../../history";
import * as urls from "../../constants/urls";
import {
  useNavigate
} from "react-router-dom";
import { saveUserInLocalStorage } from "../../constants/helpers";




//---- Logins, LogOut, and JWT stuff
export const login = (username, password) => async (dispatch, getState) => {
  const credentials = { username: username, password: password };
  let navigate = useNavigate();
  
  await japi
    .post("/user/login", credentials)
    .then((response) => {
      saveUserInLocalStorage(response.data);
      dispatch({ type: "LOGIN_USER", payload: response.data });
      console.log("Logged in Route...")
      navigate(urls.sched.route);
    })
    .catch((reason) => {
      if (reason.response.status === 401) {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Incorrect Username or Password.",
        });
        console.log("Bad Usernane")
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Error:",
          reason,
        });
        // Handle else
        console.log("Reason:", reason);
      }
    });
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch({ type: "LOGOUT_USER" });
  history.replace(urls.login.route);
};

/// Check if user is logged in -> Get the latest data. Otherwise, redirect to Campaign View
export const isUserLoggedIn = () => async (dispatch) => {
  const sessionToken = localStorage.jwtToken;
  if (sessionToken) {
    const response = await japi.get(`/user/refresh`);
    saveUserInLocalStorage(response.data);
    dispatch({
      type: "REFRESH_USER",
      _id: response.data._id,
      username: response.data.username,
      name: response.data.name,
    });
    history.replace(urls.sched.route);
  }
};

//----- User Manipulations:
export const fetchUser = (userID) => async (dispatch) => {
  const response = await japi.get(`/user?id=${userID}`);
  dispatch({ type: "GET_USER", payload: response.data });
};

export const editUser = (userFields) => async (dispatch) => {
  await japi.patch(`/user/edit?id=${userFields._id}`, userFields);
  dispatch({ type: "UPDATE_USER", payload: userFields.name });
  dispatch({ type: "VIEW_UNMOUNT" });
  history.push(urls.welcome.route);
};

export const editPassword = (passFields, user) => async (dispatch) => {
  await japi.patch(`/user/editPass?id=${user._id}`, passFields);
  dispatch({ type: "VIEW_UNMOUNT" });
  history.push(urls.welcome.route);
};

export const cancelUserEdit = () => async (dispatch) => {
  dispatch({ type: "VIEW_UNMOUNT" });
  history.push(urls.welcome.route);
};

export const didClickDelete = (user) => async (dispatch) => {
  dispatch({ type: "DID_CLICK_DELETE_USER", payload: user });
};

export const deleteUser = (userID) => async (dispatch) => {
  console.log("Delete The User now");

  // const campaigns = await japi.get(`/campaigns?userID=${userID}`);

  // if (campaigns) {
  //   console.log("campaigns: ", campaigns);
  // }

  // await Promise.all(
  //   campaigns.data.map(async (campaign, i) => {
  //     console.log("Campaign to Delete: ", campaign._id);
  //     var response = await japi.delete(
  //       `/campaign/delete?campaignID=${campaign._id}`
  //     );
  //     console.log("User Deleted", response)
  //   })
  // );

  // await japi.delete(`/user/delete?id=${userID}`);
  // dispatch(logout());
};

export const closeDeletePopup = () => async (dispatch) => {
  dispatch({ type: "DID_CANCEL_DELETE_USER", payload: null });
};

// combined action to delete and close the popup
export const deleteUserAndClosePopup = (user) => async (dispatch) => {
  await dispatch(deleteUser(user));
  dispatch(closeDeletePopup());
};

//----- SIGN UP

export const signUp = (signupInfo) => async (dispatch) => {
  signupInfo.creationDate = Date.now();
  await japi
    .post("/user/register", signupInfo)
    .then((response) => {
      // Handle response
      dispatch({ type: "SIGNUP_USER", payload: response.data });
      // Push the Login right after
      history.replace(urls.login.route);
    })
    .catch((reason) => {
      if (reason.response.status === 400) {
        dispatch({
          type: "SIGNUP_USER_ERROR",
          payload: "Account already linked to this UserName / E-Mail Address.",
        });
      } else {
        dispatch({ type: "SIGNUP_USER_ERROR", payload: "Error:", reason });
        // Handle else
      }
    });
};


// ============== USEFUL CODE TO SORT BY DATE
// employees.sort((a, b) => {
//   let da = new Date(a.joinedDate),
//   db = new Date(b.joinedDate);
// return da - db;
// });
