import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsPagination } from "../fetch/product";

const ProductPage = () => {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(0);
  const limit = 20;

  const {
    isPending: productsLoading,
    error,
    data: { products, total } = { products: [], total: 0 },
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProductsPagination(page, limit),
  });

  const [pages, setPages] = useState([0]);

  useEffect(() => {
    setPages(Array.from(Array(parseInt(total / limit)).keys()));
    // [0, 1, 2, 3, 4]
  }, [total]);

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
      <div>
        <select value={page} onChange={(e) => setPage(e.target.value)}>
          {pages.map((p) => (
            <option value={p}>{p + 1}</option>
          ))}
        </select>
      </div>
      <div className="products-container gap-3">
        {productsLoading && <h1>LOADING..........</h1>}
        {!productsLoading &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
