import * as COLORS from "../constants/color";
import { getColors, getColorByID } from "../services/colorService";

const colorsRequest = () => ({
  type: COLORS.ALL_COLORS_REQUEST,
});

const colorsSuccess = (payload) => ({
  type: COLORS.ALL_COLORS_SUCCESS,
  payload,
});

const colorsFailure = (payload) => ({
  type: COLORS.ALL_COLORS_FAILURE,
  payload,
});

const colorRequest = () => ({
  type: COLORS.COLOR_REQUEST,
});

const colorSuccess = (payload) => ({
  type: COLORS.COLOR_SUCCESS,
  payload,
});

const colorFailure = (payload) => ({
  type: COLORS.COLOR_FAILURE,
  payload,
});

const colorsAction = () => async (dispatch) => {
  dispatch(colorsRequest());
  try {
    const { data } = await getColors();
    dispatch(colorsSuccess(data));
  } catch (error) {
    dispatch(colorsFailure(error));
  }
};

const colorAction = (id) => async (dispatch) => {
  dispatch(colorRequest());
  try {
    const { data } = await getColorByID(id);
    dispatch(colorSuccess(data));
  } catch (error) {
    dispatch(colorFailure(error));
  }
};

export { colorsAction, colorAction };
