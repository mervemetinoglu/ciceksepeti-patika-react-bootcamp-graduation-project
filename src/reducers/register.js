import * as USER from "../constants/userAuth";
import { setToken } from "../helpers/auth";
import { toast } from "react-toastify";

const initialState = {
  token: "",
  isFetching: false,
  isError: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.REGISTER_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case USER.REGISTER_SUCCESS: {
      const { access_token } = action.payload;
      setToken(access_token);

      return {
        ...state,
        token: access_token,
        isFetching: false,
        isError: false,
      };
    }
    case USER.REGISTER_FAILURE: {
      toast.error("Email zaten kayıtlı!");
      return { ...state, isError: true, isFetching: false };
    }
    default:
      return state;
  }
};

export default registerReducer;
