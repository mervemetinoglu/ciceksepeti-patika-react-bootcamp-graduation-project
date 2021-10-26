import * as FILE from "../constants/file";
import { uploadFile } from "../services/fileService";

const uploadFileRequest = () => ({
  type: FILE.FILE_REQUEST,
});

const uploadFileSuccess = (payload) => ({
  type: FILE.FILE_SUCCESS,
  payload,
});

const uploadFileFailure = (payload) => ({
  type: FILE.FILE_FAILURE,
  payload,
});

const uploadFileAction = (file, options) => async (dispatch) => {
  dispatch(uploadFileRequest());
  try {
    const { data } = await uploadFile(file, options);
    dispatch(uploadFileSuccess(data));
  } catch (error) {
    dispatch(uploadFileFailure(error));
  }
};

export default uploadFileAction;
