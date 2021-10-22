import { combineReducers } from "redux";

import RegisterReducer from "./register";
import loginReducer from "./login";
import { allProductsReducer, productReducer } from "./product";
import { allCategoriesReducer, categoryReducer } from "./category";
import { allStatusReducer, statusReducer } from "./status";
import { allBrandsReducer, brandReducer } from "./brand";
import { allColorsReducer, colorReducer } from "./color";
import {
  givenOffersReducer,
  receivedOffersReducer,
} from "./account/userOffers";

const rootReducer = combineReducers({
  register: RegisterReducer,
  login: loginReducer,
  products: allProductsReducer,
  product: productReducer,
  categories: allCategoriesReducer,
  category: categoryReducer,
  allStatus: allStatusReducer,
  productStatus: statusReducer,
  brands: allBrandsReducer,
  brand: brandReducer,
  colors: allColorsReducer,
  color: colorReducer,
  givenOffers: givenOffersReducer,
  receivedOffers: receivedOffersReducer,
});

export default rootReducer;
