import Head from "next/head";
import React from "react";
import Nav from "../../components/header/nav";
import Home from "../../components/home/home";
import Footer from "../../components/footer/footer";

const index = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
};

export default index;
