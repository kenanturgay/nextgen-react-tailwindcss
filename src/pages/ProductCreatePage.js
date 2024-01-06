import LoginForm from "../components/LoginForm";
import ProductForm from "../components/ProductForm";
import ProductYupForm from "../components/ProductYupForm";

const ProductCreatePage = () => {
  return (
    <div className="page">
      <h1  className="page-title">Ürün Oluştur</h1>
      <ProductYupForm />
    </div>
  );
};

export default ProductCreatePage;
