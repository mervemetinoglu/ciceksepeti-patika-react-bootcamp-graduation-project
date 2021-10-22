import { toast } from "react-toastify";
import * as USER from "../constants/userAuth";
import { setToken } from "../helpers/auth";

const initialState = {
  token: "",
  isFetching: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case USER.LOGIN_SUCCESS: {
      const { access_token } = action.payload;
      setToken(access_token);
      return {
        ...state,
        token: access_token,
        isFetching: false,
        isError: false,
      };
    }
    case USER.LOGIN_FAILURE: {
      toast.error("Emailiniz veya şifreniz hatalı!");
      return { ...state, isError: true, isFetching: false };
    }
    default:
      return state;
  }
};

export default loginReducer;
