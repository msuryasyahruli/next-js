import Image from "next/image";
import React from "react";
import logo from "./imgFooter//logo.png";

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#5e50a1" }}>
        <div className="container pt-3">
          <Image src={logo} style={{ margin: "20px 0" }} alt="logo" />
          <p style={{ color: "white", maxWidth: 330 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div style={{ height: 1, backgroundColor: "white", marginTop: 40 }} />
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 20,
              color: "white",
            }}
          >
            <div className="col-lg-9 col-md-8 mb-2">
              2020 Peworld. All right reserved
            </div>
            <div className="row col-lg-3 col-md-4">
              <p className="col-md-6 col-3 justify-content-md-center d-flex">Telepon</p>
              <p className="col-md-6 col-3 justify-content-md-center d-flex">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
