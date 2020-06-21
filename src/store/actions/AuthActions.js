import axios from "axios";
import {
  REGISTERSUCCESS,
  REGISTERFAILURE,
  REGISTERREQUEST,
  LOGINSUCCESS,
} from "../types";
export const hcLogin = (values) => {
  return (dispatch) => {
    dispatch(registerRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        dispatch(registerSuccess(res.data));
      })
      .catch((error) => {
        dispatch(registerFailure(error));
      });
  };
};

const registerRequest = () => ({
  type: REGISTERREQUEST,
});

const registerSuccess = (users) => ({
  type: REGISTERSUCCESS,
  payload: {
    users,
  },
});
const registerFailure = (error) => ({
  type: REGISTERFAILURE,
  payload: {
    ...error,
  },
});
