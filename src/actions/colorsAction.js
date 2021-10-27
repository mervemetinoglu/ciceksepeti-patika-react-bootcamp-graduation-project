import * as COLORS from "../constants/color";
import getColors from "../services/colorService";

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

const colorsAction = () => async (dispatch) => {
  dispatch(colorsRequest());
  try {
    const { data } = await getColors();
    dispatch(colorsSuccess(data));
  } catch (error) {
    dispatch(colorsFailure(error));
  }
};

export default colorsAction;
