import { ContactFrom } from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-file-signature fa-xs me-2"></i>
        İletişim Formu
      </h1>
      <ContactFrom />
    </div>
  );
};

export default ContactPage;
