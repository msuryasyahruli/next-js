import React, { useEffect, useState } from "react";
import Navlogin from "../../components/header/navlogin";
import Profile from "../../components/profile/profile";
import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
import NavHire from "../../components/header/navHire";
import ProfileViewer from "../../components/profile viewer/profileViewer";

const Index = () => {
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
        <ProfileViewer />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavHire />
        <ProfileViewer />
        <Footer />
      </>
    );
  }
};

export default Index;
