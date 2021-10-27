import { combineReducers } from "redux";

import RegisterReducer from "./register";
import loginReducer from "./login";
import { allProductsReducer, productReducer } from "./product/product";
import  allCategoriesReducer from "./category";
import  allStatusReducer from "./status";
import  allBrandsReducer from "./brand";
import allColorsReducer from "./color";
import {
  givenOffersReducer,
  receivedOffersReducer,
} from "./account/userOffers";
import acceptOffer from "./account/acceptOffer";
import cancelOffer from "./account/cancelOffer";
import rejectOffer from "./account/rejectOffer";
import purchaseProduct from "./product/purchaseProduct";
import createProduct from "./product/createProduct";
import offerProduct from "./product/offerProduct";
import uploadFile from "./uploadFile";

const rootReducer = combineReducers({
  register: RegisterReducer,
  login: loginReducer,
  products: allProductsReducer,
  product: productReducer,
  categories: allCategoriesReducer,
  allStatus: allStatusReducer,
  brands: allBrandsReducer,
  colors: allColorsReducer,
  givenOffers: givenOffersReducer,
  receivedOffers: receivedOffersReducer,
  purchaseProduct: purchaseProduct,
  acceptOffer: acceptOffer,
  cancelOffer: cancelOffer,
  rejectOffer: rejectOffer,
  createProduct: createProduct,
  offerProduct: offerProduct,
  file: uploadFile,
});

export default rootReducer;
