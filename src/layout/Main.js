import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";

const Main = () => {
  const [userName, setUserName] = useState(null);

  return (
    <div className="layout">
      <Header userName={userName} />
      <PageBody userName={userName} setUserName={setUserName} />
      <Footer />
    </div>
  );
};

export default Main;
