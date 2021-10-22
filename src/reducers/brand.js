import * as BRAND from "../constants/brands";

const brandInitialState = {
  brand: {},
  isFetching: false,
  isError: false,
};

const allBrandsInitialState = {
  allBrands: [],
  isFetching: false,
  isError: false,
};

const allBrandsReducer = (state = allBrandsInitialState, action) => {
  switch (action.type) {
    case BRAND.ALL_BRANDS_REQUEST:
      return { ...state, isFetching: true };
    case BRAND.ALL_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: action.payload,
        isFetching: false,
        isError: false,
      };
    case BRAND.ALL_BRANDS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

const brandReducer = (state = brandInitialState, action) => {
  switch (action.type) {
    case BRAND.BRAND_REQUEST:
      return { ...state, isFetching: true };
    case BRAND.BRAND_SUCCESS:
      return {
        ...state,
        brand: action.payload,
        isFetching: false,
        isError: false,
      };
    case BRAND.BRAND_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { allBrandsReducer, brandReducer };
