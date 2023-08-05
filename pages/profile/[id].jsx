import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/profile";
import Nav from "../../components/header/nav";
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
        <Profile />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navlogin />
        <Profile />
        <Footer />
      </>
    );
    
  }
};

export default index;
