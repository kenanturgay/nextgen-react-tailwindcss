import { useEffect, useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../store/actions/productActions";

const ProductPage = () => {
  const products = useSelector((store) => store.product.list);
  const productsLoading = useSelector((store) => store.product.loading);
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

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
            <ProductCard2 key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
