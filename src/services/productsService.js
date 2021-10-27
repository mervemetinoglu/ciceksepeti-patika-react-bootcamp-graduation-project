import axios from "axios";
import { getToken } from "../helpers/auth";

const API_URL = `${process.env.REACT_APP_BASE_URL}product/`;
const accessToken = getToken();
const header = { headers: { Authorization: `Bearer ${accessToken}` } };

const getProducts = async () => {
  const response = await axios.get(`${API_URL}all`);
  return response;
};

const getProductByID = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response;
};

const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}create`, product, header);
  return response;
};

const offerProduct = async (id, offeredPrice) => {
  const response = await axios.post(
    `${API_URL}offer/${id}`,
 offeredPrice ,
    header
  );
  return response;
};

const purchaseProduct = async (id) => {
  const response = await axios.put(`${API_URL}purchase/${id}`, id, header);
  return response;
};

export {
  getProducts,
  getProductByID,
  createProduct,
  offerProduct,
  purchaseProduct,
};
