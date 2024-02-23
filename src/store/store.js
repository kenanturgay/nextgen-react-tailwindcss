import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import logger from "redux-logger";
import { myLogger } from "./middleware/myLogger";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
});

export const store = createStore(
  // reducers
  reducers, 
  // middleware
  applyMiddleware(thunk, myLogger, logger));
