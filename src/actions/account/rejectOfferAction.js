import * as ACCOUNT from "../../constants/account";
import { rejectOffer } from "../../services/accountService";
import receivedOffersAction from "./receivedOffersAction";

const rejectOfferRequest = () => ({
  type: ACCOUNT.REJECT_OFFER_REQUEST,
});

const rejectOfferSuccess = (payload) => ({
  type: ACCOUNT.REJECT_OFFER_SUCCESS,
  payload,
});

const rejectOfferFailure = (payload) => ({
  type: ACCOUNT.REJECT_OFFER_FAILURE,
  payload,
});

const rejectOfferAction = (id) => async (dispatch) => {
  dispatch(rejectOfferRequest());
  try {
    const { data } = await rejectOffer(id);
    dispatch(rejectOfferSuccess(data));
  } catch (error) {
    dispatch(rejectOfferFailure(error));
  }  finally{
    dispatch(receivedOffersAction());
  }
};

export default rejectOfferAction;
