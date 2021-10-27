import * as COLOR from "../constants/color";

const allColorsInitialState = {
  allColors: [],
  isFetching: false,
  isError: false,
};

const allColorsReducer = (state = allColorsInitialState, action) => {
  switch (action.type) {
    case COLOR.ALL_COLORS_REQUEST:
      return { ...state, isFetching: true };
    case COLOR.ALL_COLORS_SUCCESS:
      return {
        ...state,
        allColors: action.payload,
        isFetching: false,
        isError: false,
      };
    case COLOR.ALL_COLORS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default allColorsReducer;
