import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  API,
  CreateProductArguments,
  PutProductArguments,
  UpdateProductArguments,
} from "../api/api";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";

const ProductForm = ({ productData }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    active: true,
    color: "",
  });
  const [submitProduct, submitRes, submitLoading] = useAxios();

  const history = useHistory();

  const productSubmitHandler = (e) => {
    e.preventDefault();
    // sayfa yenilenmesini engelle
    console.log("yeni product: ", product);
    if (product.id) {
      // update
      submitProduct(UpdateProductArguments(product)).then((resData) => {
        history.push("/products");
      });
    } else {
      // create
      submitProduct(CreateProductArguments(product)).then((resData) => {
        history.push("/products");
      });
    }
  };

  const inputChangeHandler = (e) => {
    // e.target = Input DOM nesnesi
    const { name, value, type, checked } = e.target;

    setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    console.log("Product data güncellendi: ", product);
  }, [product]);

  useEffect(() => {
    productData && setProduct(productData);
  }, [productData]);

  return (
    <div className="card login-form">
      <form onSubmit={productSubmitHandler} className="card-body">
        <div className="mb-3">
          <label className="form-label">Ürün adı</label>
          <input
            className="form-control"
            type="text"
            value={product.name}
            name="name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Açıklama</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={product.description}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fotoğraf</label>
          <input
            className="form-control"
            type="url"
            name="img"
            value={product.img}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fiyat</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={product.price}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stok Adet</label>
          <input
            className="form-control"
            type="number"
            name="stock"
            value={product.stock}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            id="active"
            className="form-check-input"
            type="checkbox"
            name="active"
            checked={product.active}
            onChange={inputChangeHandler}
          />
          <label className="form-check-label" htmlFor="active">
            Aktif
          </label>
        </div>

        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default ProductForm;
