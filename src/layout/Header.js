import { Link, NavLink } from "react-router-dom";
import mandarinIcon from "./../assets/mandarin.png";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Header = ({ userName }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar navbar-expand-sm py-3" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand pe-5 pt-3" href="#">
          <img src={mandarinIcon} className="logo-icon" />
          MandaLina
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                <i className="fa-solid fa-house fa-xs me-1"></i> Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sayac">
                <i className="fa-solid fa-egg fa-xs me-1"></i>
                Yumurta Sepeti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                data-cy="link-products"
              >
                <i className="fa-solid fa-table-cells fa-xs me-1"></i>
                Ürünler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products/create"
                data-cy="link-product-form"
              >
                <i className="fa-solid fa-circle-plus fa-xs me-1"></i>Ürün Ekle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                data-cy="link-product-form"
              >
                <i className="fa-solid fa-file-signature fa-xs me-1"></i>
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {userName ? (
                <span className="nav-link">
                  <i className="fa-solid fa-user fa-xs me-1"></i>
                  {userName}
                </span>
              ) : (
                <NavLink className="nav-link" to="/login">
                  <i className="fa-solid fa-user fa-xs me-1"></i>
                  Giriş
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              <button className="btn" onClick={toggleTheme}>
                {theme === "light" ? "dark" : "light"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
