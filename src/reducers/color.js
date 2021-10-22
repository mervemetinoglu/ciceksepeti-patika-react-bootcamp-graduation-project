import * as COLOR from "../constants/color";

const colorInitialState = {
  color: {},
  isFetching: false,
  isError: false,
};

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

const colorReducer = (state = colorInitialState, action) => {
  switch (action.type) {
    case COLOR.COLOR_REQUEST:
      return { ...state, isFetching: true };
    case COLOR.COLOR_SUCCESS:
      return {
        ...state,
        color: action.payload,
        isFetching: false,
        isError: false,
      };
    case COLOR.COLOR_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { allColorsReducer, colorReducer };
