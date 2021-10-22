import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}detail/color/`;

const getColors = async () => {
  const response = await axios.get(`${API_URL}all`);
  return response;
};

const getColorByID = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response;
};

export { getColors, getColorByID };
