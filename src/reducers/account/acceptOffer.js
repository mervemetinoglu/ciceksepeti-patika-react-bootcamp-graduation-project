import * as ACCOUNT from "../../constants/account";

const initialState = {
  isFetching: false,
  isError: false,
};

const acceptOffer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT.ACCEPT_OFFER_REQUEST:
      return { ...state, isFetching: true };
    case ACCOUNT.ACCEPT_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case ACCOUNT.ACCEPT_OFFER_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default acceptOffer;
