import { combineReducers, legacy_createStore as createStore } from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
});

export const store = createStore(reducers);
