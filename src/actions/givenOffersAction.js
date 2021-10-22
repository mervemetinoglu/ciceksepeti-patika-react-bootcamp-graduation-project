import * as ACCOUNT from "../constants/account";
import { getGivenOffers } from "../services/accountService";

const givenOffersRequest = () => ({
  type: ACCOUNT.GIVEN_OFFERS_REQUEST,
});

const givenOffersSuccess = (payload) => ({
  type: ACCOUNT.GIVEN_OFFERS_SUCCESS,
  payload,
});

const givenOffersFailure = (payload) => ({
  type: ACCOUNT.GIVEN_OFFERS_FAILURE,
  payload,
});

const givenOffersAction = () => async (dispatch) => {
  dispatch(givenOffersRequest());
  try {
    const { data } = await getGivenOffers();
    dispatch(givenOffersSuccess(data));
  } catch (error) {
    dispatch(givenOffersFailure(error));
  }
};

export default givenOffersAction;