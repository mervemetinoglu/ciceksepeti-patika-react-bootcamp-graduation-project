import * as STATUS from "../constants/status";
import getStatus from "../services/statusService";

const allStatusRequest = () => ({
  type: STATUS.ALL_STATUS_REQUEST,
});

const allStatusSuccess = (payload) => ({
  type: STATUS.ALL_STATUS_SUCCESS,
  payload,
});

const allStatusFailure = (payload) => ({
  type: STATUS.ALL_STATUS_FAILURE,
  payload,
});

const allStatusAction = () => async (dispatch) => {
  dispatch(allStatusRequest());
  try {
    const { data } = await getStatus();
    dispatch(allStatusSuccess(data));
  } catch (error) {
    dispatch(allStatusFailure(error));
  }
};

export default allStatusAction;
