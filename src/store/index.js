import { applyMiddleware, createStore } from "redux";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = applyMiddleware(thunk, reduxLogger);
const store = createStore(rootReducer, middleware);

export default store;
