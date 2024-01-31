import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { API } from "../api/api";

const LoginForm = ({ setUserName }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: localStorage.getItem("userName") || "",
      password: "",
      rememberMe: false,
    },
  });
  const history = useHistory();
  const location = useLocation();

  console.log("location **** ", location);

  const onSubmit = (formData) => {
    API
      .post("https://workintech-fe-ecommerce.onrender.com/login", {
        email: formData.userName,
        password: formData.password,
      })
      .then((res) => {
        console.log("Login oldu: ", res.data);
        if (formData.rememberMe) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name);
        }
        setUserName(res.data.name);
        history.push(location.state.referrer);
      })
      .catch((err) => {
        console.error("Login Hata: ", err);
      });
  };

  return (
    <div className="form-card">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="mb-3">
            <label className="form-label">Kullanıcı Adı</label>
            <input
              className="form-control"
              type="text"
              data-testid="username-input"
              {...register("userName")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              data-testid="password-input"
              {...register("password")}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              data-testid="remember-input"
              {...register("rememberMe")}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Beni hatırla
            </label>
          </div>

          {/* <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setFormData(formDataInitial)}
          >
            Sıfırla
          </button> */}
          <Button type="submit" color="primary" data-testid="login-submit">
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
