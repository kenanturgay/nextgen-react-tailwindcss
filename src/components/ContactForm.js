import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";
import { useForm } from "react-hook-form";

const formDataInitial = {
  name: "",
  email: "",
  subject: "",
  message: "",
  subscribe: false,
};

export const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: formDataInitial,
    mode: "all",
  });

  const onFormSubmit = (formData) => {
    console.log("form submitted: ", formData);

    // form datasını backend'e göndermek için axios.post()
    // axios.post();
  };

  return (
    <div className="form-card">
      <div className="form-container">
        <form onSubmit={handleSubmit(onFormSubmit)} className="card-body">
          <div className="mb-3">
            <label className="form-label">İsim soyisim</label>
            <input
              className="form-control"
              type="text"
              {...register("name", {
                required: "İsim alanı zorunludur.",
                minLength: {
                  value: 3,
                  message: "İsim alanı 3 karakterden az olamaz",
                },
                pattern: {
                  value: /^[A-Za-z ıİüÜğĞşŞçÇöÖ]+$/i,
                  message: "Lütfen sayı ve özel karakter kullanmayın.",
                },
                validate: (name) => {
                  if (name.includes("ali")) {
                    return true;
                  }
                  return "Ama sen Ali değilsin!";
                },
              })}
            />
            {errors.name && (
              <p className="form-hata-mesaji">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              className="form-control"
              type="text"
              {...register("email", {
                required: "E-posta alanı zorunludur.",
                pattern: {
                  value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                  message: "Lütfen geçerli bir e-posta adresi girin.",
                },
              })}
            />
            {errors.email && (
              <p className="form-hata-mesaji">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Başlık</label>
            <input
              className="form-control"
              type="text"
              {...register("subject", {
                required: "Başlık alanı zorunludur.",
                maxLength: {
                  value: 20,
                  message: "Başlık en fazla 20 karakter uzunluğunda olabilir.",
                },
              })}
            />
            {errors.subject && (
              <p className="form-hata-mesaji">{errors.subject.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Mesaj</label>
            <textarea
              className="form-control"
              type="text"
              rows="3"
              {...register("message", {
                required: "Mesaj alanı zorunludur.",
                minLength: {
                  value: 10,
                  message:
                    "Mesaj alanı en az 10 karakter uzunluğunda olmalıdır.",
                },
              })}
            />
            {errors.message && (
              <p className="form-hata-mesaji">{errors.message.message}</p>
            )}
          </div>
          <div className="form-check mb-3">
            <input
              id="subscribe"
              type="checkbox"
              className="form-check-input"
              {...register("subscribe")}
            />
            <label className="form-check-label" htmlFor="subscribe">
              Gelişmelerden haberdar olmak için abone ol
            </label>
          </div>
          <div className="pt-3 text-end">
            <Button
              type="submit"
              color="primary"
              className="px-5"
              // disabled={!isValid}
            >
              Gönder
            </Button>
          </div>
        </form>
      </div>
      <div className="contact-form-bg"></div>
    </div>
  );
};
