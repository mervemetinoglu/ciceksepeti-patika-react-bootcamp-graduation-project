import * as BRANDS from "../constants/brands";
import getBrands from "../services/brandService";

const brandsRequest = () => ({
  type: BRANDS.ALL_BRANDS_REQUEST,
});

const brandsSuccess = (payload) => ({
  type: BRANDS.ALL_BRANDS_SUCCESS,
  payload,
});

const brandsFailure = (payload) => ({
  type: BRANDS.ALL_BRANDS_FAILURE,
  payload,
});

const brandsAction = () => async (dispatch) => {
  dispatch(brandsRequest());
  try {
    const { data } = await getBrands();
    dispatch(brandsSuccess(data));
  } catch (error) {
    dispatch(brandsFailure(error));
  }
};

export default brandsAction;
