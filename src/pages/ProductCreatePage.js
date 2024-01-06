import ProductForm from "../components/ProductForm";

const ProductCreatePage = () => {
  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-table-cells fa-xs me-2"></i>
        Ürünler <span className="me-3"></span>\{" "}
        <i className="fa-solid fa-circle-plus fa-xs ms-3 me-2"></i>
        Ürün Ekle
      </h1>
      <ProductForm />
    </div>
  );
};

export default ProductCreatePage;
