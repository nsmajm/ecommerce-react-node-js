import {
  REGISTERREQUEST,
  REGISTERSUCCESS,
  REGISTERFAILURE,
  LOGINSUCCESS,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  token: null,
  error: null,
};
const AuthReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERREQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTERSUCCESS:
      return {
        data: payload,
        loading: false,
        token: payload,
        error: null,
      };
    case REGISTERFAILURE:
      return {
        ...state,
        error: payload,
      };

    case LOGINSUCCESS: {
      return state;
    }
    default:
      return state;
  }
};

export default AuthReducers;
