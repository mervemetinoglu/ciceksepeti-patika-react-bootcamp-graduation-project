import * as BRANDS from "../constants/brands";
import { getBrands, getBrandByID } from "../services/brandService";

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

const brandRequest = () => ({
  type: BRANDS.BRAND_REQUEST,
});

const brandSuccess = (payload) => ({
  type: BRANDS.BRAND_SUCCESS,
  payload,
});

const brandFailure = (payload) => ({
  type: BRANDS.BRAND_FAILURE,
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

const brandAction = (id) => async (dispatch) => {
  dispatch(brandRequest());
  try {
    const { data } = await getBrandByID(id);
    dispatch(brandSuccess(data));
  } catch (error) {
    dispatch(brandFailure(error));
  }
};

export { brandsAction, brandAction };
