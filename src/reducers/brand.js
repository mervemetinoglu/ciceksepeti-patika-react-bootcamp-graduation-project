import * as BRAND from "../constants/brands";

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

export default allBrandsReducer;
