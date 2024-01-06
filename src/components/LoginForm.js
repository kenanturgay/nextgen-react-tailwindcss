import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

const formDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const [formData, setFormData] = useState(formDataInitial);

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit edildi! ", formData);

    axios
      .post("https://reqres.in/api/user", formData)
      .then((res) => {
        console.log("Login oldu: ", res.data);
      })
      .catch((err) => {
        console.error("Login Hata: ", err);
      });
  };

  return (
    <div className="counter-card">
      <div className="yumurta-form">
        <form onSubmit={submitHandler} className="card-body">
          <div className="mb-3">
            <label className="form-label" htmlFor="user-mail">
              E-posta
            </label>
            <input
              id="user-mail"
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="rememberMe"
              id="rememberMe"
              value={formData.rememberMe}
              onChange={inputChangeHandler}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Beni hatırla
            </label>
          </div>

          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setFormData(formDataInitial)}
          >
            Sıfırla
          </button>
          <Button type="submit" color="primary">
            Giriş
          </Button>
        </form>
      </div>
      <div className="login-form-bg">
        <p className="fs-6">
          Üye değilseniz <a href="#">buradan</a> kayıt olabilirsiniz...
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
