import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}detail/brand/`;

const getBrands = async () => {
  const response = await axios.get(`${API_URL}all`);
  return response;
};

const getBrandByID = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response;
};

export { getBrands, getBrandByID };
