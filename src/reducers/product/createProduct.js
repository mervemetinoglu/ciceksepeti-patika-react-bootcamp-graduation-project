import * as PRODUCTS from "../../constants/products";

const initialState = {
  createdProduct: {},
  isFetching: false,
  isError: false,
};

const createProduct = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.CREATE_PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createdProduct: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.CREATE_PRODUCT_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default createProduct;
