import * as ACCOUNT from "../../constants/account";
import { cancelOffer } from "../../services/accountService";
import productAction from "../product/productAction";
import givenOffersAction from "./givenOffersAction";

const cancelOfferRequest = () => ({
  type: ACCOUNT.CANCEL_OFFER_REQUEST,
});

const cancelOfferSuccess = (payload) => ({
  type: ACCOUNT.CANCEL_OFFER_SUCCESS,
  payload,
});

const cancelOfferFailure = (payload) => ({
  type: ACCOUNT.CANCEL_OFFER_FAILURE,
  payload,
});

const cancelOfferAction = (offerID, productID) => async (dispatch) => {
  dispatch(cancelOfferRequest());
  try {
    const { data } = await cancelOffer(offerID);
    dispatch(cancelOfferSuccess(data));
  } catch (error) {
    dispatch(cancelOfferFailure(error));
  } finally {
    dispatch(productAction(productID));
    dispatch(givenOffersAction());
  }
};

export default cancelOfferAction;
