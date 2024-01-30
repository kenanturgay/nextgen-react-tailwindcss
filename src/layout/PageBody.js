import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AnaSayfa from "../pages/AnaSayfa";
import ProductPage from "../pages/ProductPagePagination";
import SayacSayfa from "../pages/SayacSayfa";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";
import ContactPage from "../pages/ContactPage";
import { PrivatePage } from "./PrivatePage";

const PageBody = ({ userName, setUserName }) => {
  const location = useLocation();

  return (
    <div className="page-body container pb-5">
      <Switch>
        <Route path="/" exact>
          <AnaSayfa />
        </Route>
        <Route path="/sayac">
          <SayacSayfa />
        </Route>
        <Route path="/login">
          <LoginPage setUserName={setUserName} />
        </Route>
        <Route path="/products" exact>
          <ProductPage />
        </Route>
        <Route path="/products/create" exact>
          <ProductCreatePage />
        </Route>
        <Route path="/products/detail/:productId" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/products/edit/:productId" exact>
          <PrivatePage userName={userName} PageComponent={ProductEditPage} />
        </Route>
        <Route path="/contact" exact>
          <PrivatePage userName={userName} PageComponent={ContactPage} />
        </Route>
        <Route path="*">
          <h2 className="error-box">404 - Sayfa Bulunamadı</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
