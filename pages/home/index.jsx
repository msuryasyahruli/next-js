import Head from "next/head";
import React, { useEffect, useState } from "react";
import Nav from "../../components/header/nav";
import Home from "../../components/home/home";
import Footer from "../../components/footer/footer";
import Navlogin from "../../components/header/navlogin";
import NavHire from "../../components/header/navHire";

const index = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [login, setLogin] = useState();
  useEffect(() => {
    const login = localStorage.getItem("token");
    setLogin(login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [role, setRole] = useState();
  useEffect(() => {
    const roleUser = localStorage.getItem("role");
    setRole(roleUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!login) {
    return (
      <>
        <Navlogin />
        <Home />
        <Footer />
      </>
    );
  } else if (role === "worker") {
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
        <NavHire />
        <Home />
        <Footer />
      </>
    );
  }
};

export default index;
