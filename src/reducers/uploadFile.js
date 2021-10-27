import * as FILE from "../constants/file";

const initialState = {
  imageUrl: {},
  isFetching: false,
  isError: false,
};

const uploadFile = (state = initialState, action) => {
  switch (action.type) {
    case FILE.FILE_REQUEST:
      return { ...state, isFetching: true };
    case FILE.FILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        imageUrl: action.payload,
      };
    case FILE.FILE_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default uploadFile;
