import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";

const Main = ({ userName, setUserName }) => {
  const changeUserName = (newName) => {
    console.log("changeUserName >>> ", newName);
    setUserName(newName);
  };

  useEffect(() => {
    console.log("MAIN userName >>> ", userName);
  }, [userName]);

  return (
    <div className="layout">
      <Header userName={userName} />
      <PageBody userName={userName} setUserName={changeUserName} />
      <Footer />
    </div>
  );
};

export default Main;
