import Head from "next/head";
import React from "react";
import Landing from "../../components/landingPage/landing";
import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
import Navlogin from "../../components/header/navlogin";

const index = () => {
  // const login = localStorage.getItem("id");

  // if (!login) {
    return (
      <>
        <Navlogin />
        <Landing />
        <Footer />
      </>
    );
  // } else {
  //   return (
  //     <>
  //       <Nav />
  //       <Landing />
  //       <Footer />
  //     </>
  //   );
  // }
};

export default index;
