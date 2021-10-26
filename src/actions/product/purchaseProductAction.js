import * as PRODUCT from "../../constants/products";
import { purchaseProduct } from "../../services/productsService";

const purchaseProductRequest = () => ({
  type: PRODUCT.PURCHASE_PRODUCT_REQUEST,
});

const purchaseProductSuccess = (payload) => ({
  type: PRODUCT.PURCHASE_PRODUCT_SUCCESS,
  payload,
});

const purchaseProductFailure = (payload) => ({
  type: PRODUCT.PURCHASE_PRODUCT_FAILURE,
  payload,
});

const purchaseProductAction = (id) => async (dispatch) => {
  dispatch(purchaseProductRequest());
  try {
    const { data } = await purchaseProduct(id);
    dispatch(purchaseProductSuccess(data));
  } catch (error) {
    dispatch(purchaseProductFailure(error));
  }
};

export default purchaseProductAction;
