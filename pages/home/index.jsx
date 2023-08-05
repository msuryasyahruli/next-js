import Head from "next/head";
import React, { useEffect, useState } from "react";
import Nav from "../../components/header/nav";
import Home from "../../components/home/home";
import Footer from "../../components/footer/footer";
import Navlogin from "../../components/header/navlogin";

const index = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    const login = localStorage.getItem("token");
    setLogin(login);
  }, []);

  if (login) {
    return (
      <>
        <Nav />
        <Home />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navlogin />
        <Home />
        <Footer />
      </>
    );
  }
};

export default index;
