import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "./imgNav/logo.png";
import bell from "./imgNav/bell.png";
import mail from "./imgNav/mail.png";
// import Profile from "./imgNav/profile.png";
import Profile2 from "./imgNav/profile (2).png";
import axios from "axios";
import Link from "next/link";

const Nav = () => {
  const [login, setLogin] = useState();

  const isLogout = () => {
    localStorage.clear();
    // window.location.reload();
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("user_id");
    setLogin(isLogin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const router = useRouter();
  const [worker, setWorker] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("user_id");
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/worker/${user}`)
      .then((res) => {
        setWorker(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {!worker.worker_photo ? (
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
                    ) : (
                      <Image
                        className="ml-3"
                        src={worker.worker_photo}
                        alt="profile"
                        width={30}
                        height={30}
                        style={{
                          borderRadius: "100%",
                        }}
                      />
                    )}
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" href={`/profile/${login}`}>
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      href={`/profile/edit/${login}`}
                    >
                      Edit profile
                    </Link>
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

export default Nav;
