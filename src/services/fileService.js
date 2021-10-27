import axios from "axios";
import { getToken } from "../helpers/auth";

const API_URL = `${process.env.REACT_APP_BASE_URL}file/upload/image`;
const accessToken = getToken();
const header = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
};

export const uploadFile = async (file, options) => {
  const img = new FormData();
  img.append("file", file);
  const response = await axios.post(`${API_URL}`, img, {
    ...options,
    ...header,
  });
  return response;
};
