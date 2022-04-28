import japi from "../japi";
import history from "../../../history";
import * as urls from "../../constants/urls";

export const sendForgetEmail = (email) => async (dispatch) => {
  const obj = { email: email };
  const response = await japi.post(`/forgot-password`, obj).then((response) => {
    dispatch({
      type: "CLEAR_ERRORS",});
    history.replace(urls.login.route);
  })
  .catch((reason) => {
    if (reason.response.status === 401) {
      dispatch({
        type: "FORGOT_ERROR",
        payload: "No account is tied to this E-Mail.",
      });
    } else {
      dispatch({
        type: "FORGOT_ERROR",
        payload: "Error:",
        reason,
      });
      // Handle else
      console.log("Reason:", reason, "\n Response:", response)
    }
  })
};
