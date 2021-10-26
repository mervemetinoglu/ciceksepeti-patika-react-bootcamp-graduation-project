import * as PRODUCT from "../../constants/products";
import { getProductByID } from "../../services/productsService";

const productRequest = () => ({
  type: PRODUCT.PRODUCT_REQUEST,
});

const productSuccess = (payload) => ({
  type: PRODUCT.PRODUCT_SUCCESS,
  payload,
});

const productFailure = (payload) => ({
  type: PRODUCT.PRODUCT_FAILURE,
  payload,
});

const productAction = (id) => async (dispatch) => {
  dispatch(productRequest());
  try {
    const { data } = await getProductByID(id);
    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productFailure(error));
  }
};

export default productAction;
