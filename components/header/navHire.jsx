import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "./imgNav/logo.png";
import bell from "./imgNav/bell.png";
import mail from "./imgNav/mail.png";
// import Profile from "./imgNav/profile.png";
import Profile2 from "./imgNav/profile (2).png";
import Link from "next/link";
// import { useRouter } from "next/router";
// import axios from "axios";

const NavHire = () => {
  const [login, setLogin] = useState();

  useEffect(() => {
    const isLogin = localStorage.getItem("user_id");
    setLogin(isLogin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLogout = () => {
    localStorage.clear();
    window.location.reload();
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <header>
        <nav
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
          }}
        >
          <div href={`/landingPage`}>
            <Image src={logo} alt="logo" />
          </div>
          <div className="row">
            <div className="pt-2">
              <Image className="ml-3 mr-3" src={bell} alt="bell" />
            </div>
            <div className="pt-2">
              <Image className="ml-3 mr-3" src={mail} alt="mail" />
            </div>
            <div className="mr-3">
              <ul className="navbar-nav dropdown">
                <li className="nav-item">
                  <Link
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Image
                      className="ml-3"
                      src={Profile2}
                      alt="profile"
                      width={30}
                      height={30}
                      style={{
                        borderRadius: "100%",
                      }}
                    />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" href={`/profile/${login}`}>
                      Profile
                    </Link>
                    {/* <Link
                      className="dropdown-item"
                      href={`/profile/edit/${login}`}
                    >
                      Edit profile
                    </Link> */}
                    <Link
                      className="dropdown-item"
                      href="/landingPage"
                      onClick={isLogout}
                    >
                      Log Out
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavHire;
