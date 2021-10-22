import * as USER from "../constants/userAuth";
import { loginService } from "../services/authService";

const loginRequest = () => ({
  type: USER.LOGIN_REQUEST,
});

const loginSuccess = (payload) => ({
  type: USER.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: USER.LOGIN_FAILURE,
  payload,
});

const loginAction = (formData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await loginService(formData);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export default loginAction;
