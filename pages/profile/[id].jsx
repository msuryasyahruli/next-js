import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/profile";
import Nav from "../../components/header/nav";
import Footer from "../../components/footer/footer";
import Navlogin from "../../components/header/navlogin";
import ProfileRecruiter from "../../components/profile recruit/profileRecruiter";
import NavHire from "../../components/header/navHire";

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
        <Profile />
        <Footer />
      </>
    );
  } else if (role === "worker") {
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
        <NavHire />
        <ProfileRecruiter />
        <Footer />
      </>
    );
  }
};

export default index;
