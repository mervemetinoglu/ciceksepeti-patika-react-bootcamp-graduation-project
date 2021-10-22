import * as STATUS from "../constants/status";
import { getStatus, getStatuByID } from "../services/statusService";

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

const statusRequest = () => ({
  type: STATUS.STATUS_REQUEST,
});

const statusSuccess = (payload) => ({
  type: STATUS.STATUS_SUCCESS,
  payload,
});

const statusFailure = (payload) => ({
  type: STATUS.STATUS_FAILURE,
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

const statusAction = (id) => async (dispatch) => {
  dispatch(statusRequest());
  try {
    const { data } = await getStatuByID(id);
    dispatch(statusSuccess(data));
  } catch (error) {
    dispatch(statusFailure(error));
  }
};

export { allStatusAction, statusAction };
