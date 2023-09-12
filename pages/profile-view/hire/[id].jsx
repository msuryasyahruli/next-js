import React, { useEffect, useState } from "react";
import Navlogin from "../../../components/header/navlogin";
// import Profile from "../../components/profile/profile";
import Footer from "../../../components/footer/footer";
import Nav from "../../../components/header/nav";
import NavHire from "../../../components/header/navHire";
import Hire from "../../../components/profile viewer/hire/Hire";

const index = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    const login = localStorage.getItem("token");
    setLogin(login);
  }, []);

  const [role, setRole] = useState();
  useEffect(() => {
    const isRole = localStorage.getItem("role");
    setRole(isRole);
  }, []);

  if (!login) {
    return (
      <>
        <Navlogin />
        <Hire />
        <Footer />
      </>
    );
  } else if (role === "worker") {
    return (
      <>
        <Nav />
        <Hire />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavHire />
        <Hire />
        <Footer />
      </>
    );
  }
};

export default index;
