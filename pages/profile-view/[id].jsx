import React, { useEffect, useState } from "react";
import Navlogin from "../../components/header/navlogin";
import Profile from "../../components/profile/profile";
import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";

const index = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    const login = localStorage.getItem("token");
    setLogin(login);
  }, []);

  if (!login) {
    return (
      <>
        <Navlogin />
        <Profile />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <Profile />
        <Footer />
      </>
    );
  }
};

export default index;
