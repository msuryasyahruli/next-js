import Image from "next/image";
import React from "react";
import logo from "./imgNav/logo.png";
import bell from "./imgNav/bell.png"
import mail from "./imgNav/mail.png"
import Profile from "./imgNav/profile.png"

const Nav = () => {
  return (
    <div>
      <header>
        <nav
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <Image className="ml-3 mr-3" src={bell} alt="bell" />
            <Image className="ml-3 mr-3" src={mail} alt="mail" />
            <Image className="ml-3" src={Profile} alt="profile" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
