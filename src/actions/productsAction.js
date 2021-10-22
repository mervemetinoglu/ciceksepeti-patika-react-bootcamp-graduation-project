import * as PRODUCTS from "../constants/products";
import { getProducts } from "../services/productsService";

const productsRequest = () => ({
  type: PRODUCTS.ALL_PRODUCTS_REQUEST,
});

const productsSuccess = (payload) => ({
  type: PRODUCTS.ALL_PRODUCTS_SUCCESS,
  payload,
});

const productsFailure = (payload) => ({
  type: PRODUCTS.ALL_PRODUCTS_FAILURE,
  payload,
});

const productsAction = () => async (dispatch) => {
  dispatch(productsRequest());
  try {
    const { data } = await getProducts();
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFailure(error));
  }
};

export default productsAction;
