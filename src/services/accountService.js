import axios from "axios";
import { getToken } from "../helpers/auth";

const API_URL = `${process.env.REACT_APP_BASE_URL}account`;
const accessToken = getToken();
const header = { headers: { Authorization: `Bearer ${accessToken}` } };

const getGivenOffers = async () => {
  const response = await axios.get(`${API_URL}/given-offers`, header);
  return response;
};

const getReceivedOffers = async () => {
  const response = await axios.get(`${API_URL}/received-offers`, header);
  return response;
};

const rejectOffer = async (id) => {
  const response = await axios.post(
    `${API_URL}/reject-offer/${id}`,id,
    header
  );
  return response;
};

const acceptOffer = async (id) => {
  const response = await axios.put(
    `${API_URL}/accept-offer/${id}`,id,
    header
  );
  return response;
};

const cancelOffer = async (id) => {
  const response = await axios.delete(`${API_URL}/cancel-offer/${id}`, id, header);
  return response;
};

export {
  getGivenOffers,
  getReceivedOffers,
  rejectOffer,
  acceptOffer,
  cancelOffer,
};
