import Image from "next/image";
import React from "react";
import logo from "./imgNav/logo.png";
import Link from "next/link";

const Navlogin = () => {
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
        </nav>
      </header>
    </div>
  );
};

export default Navlogin;
