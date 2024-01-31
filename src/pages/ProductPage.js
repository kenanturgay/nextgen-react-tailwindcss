import { useEffect, useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../fetch/product";
import { REQ_TYPES, useAxios } from "../hooks/useAxios";
import { GetProductsArguments } from "../api/api";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  // const {
  //   isPending: productsLoading,
  //   error,
  //   data: products,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  const [getProducts, products, productsLoading, err] = useAxios([]);

  console.log("products > ", products);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  useEffect(() => {
    setList(
      products?.filter((p) =>
        p.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  useEffect(() => {
    getProducts(GetProductsArguments());
  }, []);

  return (
    <div>
      <h1 className="page-title">
        <i className="fa-solid fa-table-cells fa-xs me-2"></i>
        Ürünler
      </h1>
      {/* ÜRÜNLER LİSTELENECEK */}
      <div className="mb-3">
        <label>Arama</label>
        <input
          id="products-filter"
          type="text"
          className="form-control"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="products-container gap-3">
        {productsLoading && <h1>LOADING..........</h1>}
        {!productsLoading &&
          list?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
