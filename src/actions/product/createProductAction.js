import * as PRODUCT from "../../constants/products";
import { createProduct } from "../../services/productsService";

const createProductRequest = () => ({
  type: PRODUCT.CREATE_PRODUCT_REQUEST,
});

const createProductSuccess = (payload) => ({
  type: PRODUCT.CREATE_PRODUCT_SUCCESS,
  payload,
});

const createProductFailure = (payload) => ({
  type: PRODUCT.CREATE_PRODUCT_FAILURE,
  payload,
});

const createProductAction = (product) => async (dispatch) => {
  dispatch(createProductRequest());
  try {
    const { data } = await createProduct(product);
    dispatch(createProductSuccess(data));
  } catch (error) {
    dispatch(createProductFailure(error));
  }
};

export default createProductAction;
