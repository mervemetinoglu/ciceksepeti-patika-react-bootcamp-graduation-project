import * as ACCOUNT from "../../constants/account";
import { getReceivedOffers } from "../../services/accountService";

const receivedOffersRequest = () => ({
  type: ACCOUNT.RECEIVED_OFFERS_REQUEST,
});

const receivedOffersSuccess = (payload) => ({
  type: ACCOUNT.RECEIVED_OFFERS_SUCCESS,
  payload,
});

const receivedOffersFailure = (payload) => ({
  type: ACCOUNT.RECEIVED_OFFERS_FAILURE,
  payload,
});

const receivedOffersAction = () => async (dispatch) => {
  dispatch(receivedOffersRequest());
  try {
    const { data } = await getReceivedOffers();
    dispatch(receivedOffersSuccess(data));
  } catch (error) {
    dispatch(receivedOffersFailure(error));
  }
};

export default receivedOffersAction;
