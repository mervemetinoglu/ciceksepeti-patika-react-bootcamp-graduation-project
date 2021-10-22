import axios from "axios";
import { getToken } from "../helpers/auth";

const API_URL = `${process.env.REACT_APP_BASE_URL}file/upload/image`;
const accessToken = getToken();
const header = { headers: { Authorization: `Bearer ${accessToken}` } };


export const uploadFile = async () => {
  const response = await axios.post(`${API_URL}`, header);
  return response;
};
