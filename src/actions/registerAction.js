import * as USER from "../constants/userAuth";
import { registerService } from "../services/authService";

const registerRequest = () => ({
  type: USER.REGISTER_REQUEST,
});

const registerSuccess = (payload) => ({
  type: USER.REGISTER_SUCCESS,
  payload,
});

const registerFailure = (payload) => ({
  type: USER.REGISTER_FAILURE,
  payload,
});

const registerAction = (formData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await registerService(formData);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};

export default registerAction;
