import { ProductActions } from "../reducers/productReducer";

export const setProductsActionCreator = (productList) => ({
  type: ProductActions.setProducts,
  payload: productList,
});
