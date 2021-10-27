import * as CATEGORIES from "../constants/categories";
import getCategories from "../services/categoryService";

const categoriesRequest = () => ({
  type: CATEGORIES.ALL_CATEGORIES_REQUEST,
});

const categoriesSuccess = (payload) => ({
  type: CATEGORIES.ALL_CATEGORIES_SUCCESS,
  payload,
});

const categoriesFailure = (payload) => ({
  type: CATEGORIES.ALL_CATEGORIES_FAILURE,
  payload,
});

const categoriesAction = () => async (dispatch) => {
  dispatch(categoriesRequest());
  try {
    const { data } = await getCategories();
    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch(categoriesFailure(error));
  }
};

export default categoriesAction;
