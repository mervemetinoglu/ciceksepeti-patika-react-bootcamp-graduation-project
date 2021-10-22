import * as PRODUCTS from "../constants/products";

const productInitialState = {
  product: {},
  isFetching: false,
  isError: false,
};

const allProductsInitialState = {
  products: [],
  isFetching: false,
  isError: false,
};

const allProductsReducer = (state = allProductsInitialState, action) => {
  switch (action.type) {
    case PRODUCTS.ALL_PRODUCTS_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS.ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.ALL_PRODUCTS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case PRODUCTS.PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS.PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isFetching: false,
        isError: false,
      };
    case PRODUCTS.PRODUCT_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { allProductsReducer, productReducer };
