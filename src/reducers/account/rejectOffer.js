import * as ACCOUNT from "../../constants/account";

const initialState = {
  isFetching: false,
  isError: false,
};

const rejectOffer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT.REJECT_OFFER_REQUEST:
      return { ...state, isFetching: true };
    case ACCOUNT.REJECT_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case ACCOUNT.REJECT_OFFER_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default rejectOffer;
