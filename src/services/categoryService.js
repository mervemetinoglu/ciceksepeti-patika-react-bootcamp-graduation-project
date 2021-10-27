import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}detail/category/`;

const getCategories = async () => {
  const response = await axios.get(`${API_URL}all`);
  return response;
};



export default getCategories;
