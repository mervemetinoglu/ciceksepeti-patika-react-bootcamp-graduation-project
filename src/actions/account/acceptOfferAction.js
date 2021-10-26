import * as ACCOUNT from "../../constants/account";
import { acceptOffer } from "../../services/accountService";
import receivedOffersAction from "./receivedOffersAction";


const acceptOfferRequest = () => ({
  type: ACCOUNT.ACCEPT_OFFER_REQUEST,
});

const acceptOfferSuccess = (payload) => ({
  type: ACCOUNT.ACCEPT_OFFER_SUCCESS,
  payload,
});

const acceptOfferFailure = (payload) => ({
  type: ACCOUNT.ACCEPT_OFFER_FAILURE,
  payload,
});

const acceptOfferAction = (id) => async (dispatch) => {
  dispatch(acceptOfferRequest());
  try {
    const { data } = await acceptOffer(id);
    dispatch(acceptOfferSuccess(data));
  } catch (error) {
    dispatch(acceptOfferFailure(error));
  } finally{
    dispatch(receivedOffersAction());
  }
};

export default acceptOfferAction;
