import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import ProductForm from "../components/ProductForm";

const ProductEditPage = () => {
  // productId url den yakala
  const { productId } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState(null);

  const goBack = () => {
    // history geri butonuna tıkla
    history.goBack();
  };

  // productId ye göre product datasını çek
  useEffect(() => {
    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <>
      <h1 className="page-title">
        <Button className="me-2" onClick={goBack}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <i className="fa-solid fa-table-cells fa-xs me-2"></i>
        Ürünler <span className="me-3"></span>\{" "}
        <i className="fa-solid fa-pen fa-xs ms-3 me-2"></i>
        Ürün Düzenle: {product?.name}
      </h1>
      <div>
        {/* Ürün Formu Konulacak */}
        <ProductForm productData={product} />
      </div>
    </>
  );
};

export default ProductEditPage;
