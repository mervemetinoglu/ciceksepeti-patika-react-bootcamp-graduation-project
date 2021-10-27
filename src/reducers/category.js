import * as CATEGORIES from "../constants/categories";

const allCategoriesInitialState = {
  allCategories: [],
  isFetching: false,
  isError: false,
};


const allCategoriesReducer = (state = allCategoriesInitialState, action) => {
  switch (action.type) {
    case CATEGORIES.ALL_CATEGORIES_REQUEST:
      return { ...state, isFetching: true };
    case CATEGORIES.ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        allCategories: action.payload,
      };
    }
    case CATEGORIES.ALL_CATEGORIES_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};


export default allCategoriesReducer;
