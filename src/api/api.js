import axios from "axios";
import { REQ_TYPES } from "../hooks/useAxios";

export const createApiInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: {
      Authorization: token,
      "X-LANG": "TR",
    },
  });
};

export let API = createApiInstance();

// Endpoints ********************************

export const GetProductsArguments = () => ({
  reqType: REQ_TYPES.GET,
  endpoint: "products",
});

export const UpdateProductArguments = (product) => ({
  reqType: REQ_TYPES.PUT,
  endpoint: `products/${product.id}`,
  payload: product,
});

export const CreateProductArguments = (product) => ({
  reqType: REQ_TYPES.POST,
  endpoint: `products`,
  payload: product,
});

export const DeleteProductArguments = (productId) => ({
  reqType: REQ_TYPES.DELETE,
  endpoint: `products/${productId}`,
});
