import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";

const formDataInitial = {
  name: "",
  email: "",
  subject: "",
  message: "",
  subscribe: false,
};

export const ContactFrom = () => {
  const [formData, setFormData] = useState(formDataInitial);

  const inputChangeHandler = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  const onFormSubmit = (e) => {
    // sayfa yenilenmesini engellemek için e.preventDefault();
    e.preventDefault();

    // form datasını backend'e göndermek için axios.post()
    axios.post();
  };

  return (
    <div className="form-card">
      <div className="form-container">
        <form onSubmit={onFormSubmit} className="card-body">
          <div className="mb-3">
            <label className="form-label">İsim soyisim</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Başlık</label>
            <input
              className="form-control"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mesaj</label>
            <textarea
              className="form-control"
              type="text"
              rows="3"
              name="message"
              value={formData.message}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-check mb-3">
            <input
              id="subscribe"
              type="checkbox"
              className="form-check-input"
              name="subscribe"
              value={formData.subscribe}
              onChange={inputChangeHandler}
            />
            <label className="form-check-label" htmlFor="subscribe">
              Gelişmelerden haberdar olmak için abone ol
            </label>
          </div>
          <div className="pt-3 text-end">
            <Button type="submit" color="primary" className="px-5">
              Gönder
            </Button>
          </div>
        </form>
      </div>
      <div className="contact-form-bg"></div>
    </div>
  );
};
