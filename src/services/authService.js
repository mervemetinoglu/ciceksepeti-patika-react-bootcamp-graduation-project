import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}authorization/`;

const registerService = async (formData) => {
  const response = await axios.post(`${API_URL}signup`, formData);
  return response;
};

const loginService = async (formData) => {
  const response = await axios.post(`${API_URL}signin`, formData);
  return response;
};

export { registerService, loginService };
