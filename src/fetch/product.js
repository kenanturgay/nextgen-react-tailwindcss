import axios from "axios";
import { API } from "../api/api";

export const fetchProducts = () => API.get("products").then((res) => res.data);

export const fetchProductsPagination = (page, limit) => {
  const offset = page * limit;
  return API.get("https://workintech-fe-ecommerce.onrender.com/products", {
    params: { offset, limit, filter: "(siyah tişört)" },
  }).then((res) => res.data);
};
