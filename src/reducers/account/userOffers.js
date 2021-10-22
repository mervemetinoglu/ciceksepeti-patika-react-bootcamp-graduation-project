import * as ACCOUNT from "../../constants/account";

const givenOffersInitialState = {
  givenOffers: [],
  isFetching: false,
  isError: false,
};

const receivedOffersInitialState = {
  receivedOffers: [],
  isFetching: false,
  isError: false,
};

const givenOffersReducer = (state = givenOffersInitialState, action) => {
  switch (action.type) {
    case ACCOUNT.GIVEN_OFFERS_REQUEST:
      return { ...state, isFetching: true };
    case ACCOUNT.GIVEN_OFFERS_SUCCESS:
      return {
        ...state,
        givenOffers: action.payload,
      };
    case ACCOUNT.GIVEN_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

const receivedOffersReducer = (state = receivedOffersInitialState, action) => {
  switch (action.type) {
    case ACCOUNT.RECEIVED_OFFERS_REQUEST:
      return { ...state, isFetching: true };
    case ACCOUNT.RECEIVED_OFFERS_SUCCESS:
      return {
        ...state,
        receivedOffers: action.payload,
      };
    case ACCOUNT.RECEIVED_OFFERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { givenOffersReducer, receivedOffersReducer };
