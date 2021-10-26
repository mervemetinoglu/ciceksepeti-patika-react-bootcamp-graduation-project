import * as PRODUCT from "../../constants/products";
import { offerProduct } from "../../services/productsService";
import productAction from "../product/productAction";
import givenOffersAction from "../account/givenOffersAction";

const offerProductRequest = () => ({
  type: PRODUCT.OFFER_PRODUCT_REQUEST,
});

const offerProductSuccess = (payload) => ({
  type: PRODUCT.OFFER_PRODUCT_SUCCESS,
  payload,
});

const offerProductFailure = (payload) => ({
  type: PRODUCT.OFFER_PRODUCT_FAILURE,
  payload,
});

const offerProductAction = (id, price) => async (dispatch) => {
  dispatch(offerProductRequest());
  try {
    const { data } = await offerProduct(id, price);
    dispatch(offerProductSuccess(data));
  } catch (error) {
    dispatch(offerProductFailure(error));
  } finally {
    dispatch(productAction(id));
    dispatch(givenOffersAction());
  }
};

export default offerProductAction;
