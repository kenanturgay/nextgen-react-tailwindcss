import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCard2";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  const deleteProduct = (productId) => {
    axios
      .delete(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => {
        console.log("ürün silindi: ", res.data);
        fetchProducts();
      })
      .catch((err) => {
        console.log("ürün silinirken bir hata ile karşılaşıldı: ", err);
      });
  };

  const fetchProducts = () => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  useEffect(() => {
    setList(
      products.filter((p) =>
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
        {list.map((product) => (
          <ProductCard2
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
