import Head from "next/head";
import React, { useEffect, useState } from "react";
import Landing from "../../components/landingPage/landing";
import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
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
        <Landing />
        <Footer />
      </>
    );
  } else if (role === "worker") {
    return (
      <>
        <Nav />
        <Landing />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavHire />
        <Landing />
        <Footer />
      </>
    );
  }
};

export default index;
