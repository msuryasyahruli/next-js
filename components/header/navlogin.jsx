import Image from "next/image";
import React from "react";
import logo from "./imgNav/logo.png";
import Link from "next/link";

const Navlogin = () => {
  return (
    <div>
      <header>
        {/* <nav
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          <div>
            <Image src={logo} />
          </div>
          <div>
            <Link href="/login/worker">
              <button
                style={{
                  width: "191px",
                  height: 44,
                  borderRadius: 5,
                  border: "1px solid #5e50a1",
                  backgroundColor: "transparent",
                  margin: "0 5px",
                }}
              >
                Masuk Untuk Pekerja
              </button>
            </Link>
            <button
              style={{
                width: "191px",
                height: 44,
                borderRadius: 5,
                border: 0,
                backgroundColor: "#5e50a1",
                color: "white",
                margin: "0 5px",
              }}
            >
              Masuk Untuk Perekrut
            </button>
          </div>
        </nav> */}
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light row">
            <div className="col-7 row">
              <Image src={logo} alt="logo" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse m-0 row"
              id="navbarNav"
            >
              <div className="col-6 p-2">
                <Link href="/login/worker">
                  <button
                    style={{
                      width: "100%",
                      height: 44,
                      borderRadius: 5,
                      border: "1px solid #5e50a1",
                      backgroundColor: "transparent",
                      lineHeight:1
                    }}
                  >
                    Masuk Untuk Pekerja
                  </button>
                </Link>
              </div>
              <div className="col-6 p-2">
                <Link href="/login/recruiter">
                  <button
                    style={{
                      width: "100%",
                      height: 44,
                      borderRadius: 5,
                      border: 0,
                      backgroundColor: "#5e50a1",
                      color: "white",
                      lineHeight:1
                    }}
                  >
                    Masuk Untuk Perekrut
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navlogin;
