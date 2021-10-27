import * as PRODUCTS from "../../constants/products";

const initialState = {
  isFetching: false,
  isError: false,
};

const offerProduct = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.OFFER_PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS.OFFER_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.OFFER_PRODUCT_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default offerProduct;
