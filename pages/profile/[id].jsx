import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/profile";
import Nav from "../../components/header/nav";
import Footer from "../../components/footer/footer";
import Navlogin from "../../components/header/navlogin";
import ProfileRecruiter from "../../components/profile recruit/profileRecruiter";
import NavHire from "../../components/header/navHire";

const index = () => {
  const [login, setLogin] =
    useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const login = localStorage.getItem("token");
    setLogin(login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [role, setRole] =
    useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const isRole = localStorage.getItem("role");
    setRole(isRole);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
