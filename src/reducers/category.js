import * as CATEGORIES from "../constants/categories";

const allCategoriesInitialState = {
  allCategories: [],
  isFetching: false,
  isError: false,
};

const categoryInitialState = {
  category: {},
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

const categoryReducer = (state = categoryInitialState, action) => {
  switch (action.type) {
    case CATEGORIES.CATEGORY_REQUEST:
      return { ...state, isFetching: true };
    case CATEGORIES.CATEGORY_SUCCESS: {
      return {
        ...state,
        category: action.payload,
      };
    }
    case CATEGORIES.CATEGORY_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export { allCategoriesReducer, categoryReducer };
