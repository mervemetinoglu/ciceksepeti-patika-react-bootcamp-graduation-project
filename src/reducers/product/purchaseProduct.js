import * as PRODUCTS from "../../constants/products";
import { toast } from "react-toastify";

const initialState = {
  isFetching: false,
  isError: false,
};

const purchaseProduct = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.PURCHASE_PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS.PURCHASE_PRODUCT_SUCCESS: {
      toast.success("Satın Alındı!");
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    }
    case PRODUCTS.PURCHASE_PRODUCT_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default purchaseProduct;
