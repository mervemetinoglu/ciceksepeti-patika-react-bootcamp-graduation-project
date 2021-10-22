import * as STATUS from "../constants/status";

const statusInitialState = {
  status: {},
  isFetching: false,
  isError: false,
};

const allStatusInitialState = {
  allStatus: [],
  isFetching: false,
  isError: false,
};

const allStatusReducer = (state = allStatusInitialState, action) => {
  switch (action.type) {
    case STATUS.ALL_STATUS_REQUEST:
      return { ...state, isFetching: true };
    case STATUS.ALL_STATUS_SUCCESS:
      return {
        ...state,
        allStatus: action.payload,
        isFetching: false,
        isError: false,
      };
    case STATUS.ALL_STATUS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

const statusReducer = (state = statusInitialState, action) => {
  switch (action.type) {
    case STATUS.STATUS_REQUEST:
      return { ...state, isFetching: true };
    case STATUS.STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload,
        isFetching: false,
        isError: false,
      };
    case STATUS.STATUS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { allStatusReducer, statusReducer };
