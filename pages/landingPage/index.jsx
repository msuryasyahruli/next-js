import Head from "next/head";
import React from "react";
import Landing from "../../components/landingPage/landing";
import Footer from "../../components/footer/footer";
import Navlogin from "../../components/header/navlogin";

const index = () => {
  return (
    <>
      <Navlogin />
      <Landing />
      <Footer />
    </>
  );
};

export default index;
