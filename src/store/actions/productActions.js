import axios from "axios";
import { ProductActions } from "../reducers/productReducer";
import { API } from "../../api/api";

export const setProductsActionCreator = (productList) => ({
  type: ProductActions.setProducts,
  payload: productList,
});

export const setProductsLoadingActionCreator = (loading) => ({
  type: ProductActions.setLoading,
  payload: loading,
});

export const fetchProductsAction = () => (dispatch, getState) => {
  dispatch(setProductsLoadingActionCreator(true));
  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((res) => {
      dispatch(setProductsActionCreator(res.data));
    })
    .finally(() => {
      dispatch(setProductsLoadingActionCreator(false));
    });
};

export const deleteProductAction = (productId) => (dispatch, getState) => {
  API.delete("products/" + productId)
    .then((res) => {
      console.log("ürün silindi: ", res.data);
      dispatch(fetchProductsAction());
    })
    .catch((err) => {
      console.log("ürün silinirken bir hata ile karşılaşıldı: ", err);
    });
};
