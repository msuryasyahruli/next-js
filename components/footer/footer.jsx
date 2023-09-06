import Image from "next/image";
import React from "react";
import logo from "./imgFooter//logo.png"

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#5e50a1" }}>
        <div className="container pt-3">
          <Image src={logo} style={{ margin: "20px 0" }} alt="logo"/>
          
          <p style={{ color: "white", width: 330 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div style={{ height: 1, backgroundColor: "white", marginTop: 40 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 20,
              color: "white",
            }}
          >
            <div>2020 Pewworld. All right reserved</div>
            <div
              style={{
                display: "flex",
                width: 200,
                justifyContent: "space-between",
              }}
            >
              <p>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
