import Image from "next/image";
import React from "react";
import image from "./imgAuth/true-agency-o4UhdLv5jbQ-unsplash.jpg";
import gradient from "./imgAuth/gradient.png";
import logo from "./imgAuth/logo.png";
import Link from "next/link";
import style from "./login.module.css";

const worker = () => {
  return (
    <>
      <main style={{ margin: 0, backgroundColor: "#f6f7f8" }}>
        <div className="container-fluid">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "100vh",
            }}
          >
            <div
              className={style.img}
              style={{
                width: 570,
                overflow: "hidden",
                position: "relative",
                margin: 10,
              }}
            >
              <div
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <Image
                  src={gradient}
                  alt="gradient"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="d-flex align-items-center"
                style={{
                  height: "100%",
                  position: "absolute",
                  margin: "10%",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 44, color: "white" }}>
                  Temukan developer berbakat &amp; terbaik di berbagai bidang
                  keahlian
                </p>
              </div>
              <Image
                src={image}
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Image
                src={logo}
                alt="logo"
                style={{ position: "absolute", top: 40, left: 40 }}
              />
            </div>
            <div
              style={{
                width: 570,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <div>
                <p style={{ fontWeight: 600, fontSize: 32 }}>Halo, Pewpeople</p>
                <p style={{ fontWeight: 400, fontSize: 18, color: "#46505c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div>
                  <p
                    style={{
                      color: "#9ea0a5",
                      fontSize: 12,
                      margin: "30px 0 0 0",
                    }}
                  >
                    Email
                  </p>
                  <input
                    type="text"
                    placeholder="Masukan alamat email"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      color: "#9ea0a5",
                      fontSize: 12,
                      margin: "30px 0 0 0",
                    }}
                  >
                    Kata Sandi
                  </p>
                  <input
                    type="password"
                    placeholder="Masukan kata sandi"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div>
                <a
                  href=""
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontWeight: 400,
                    fontSize: 16,
                    margin: 10,
                    color: "#1f2a36",
                  }}
                >
                  Lupa kata sandi?
                </a>
                <button
                  style={{
                    width: "100%",
                    height: 50,
                    borderRadius: 4,
                    border: "1px solid #e2e5ed",
                    backgroundColor: "#fbb017",
                    color: "white",
                  }}
                >
                  Masuk
                </button>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                  }}
                >
                  Anda belum punya akun?
                  <span>
                    <Link style={{ color: "#fbb017" }} href="/register/worker">
                      {" "}
                      Daftar disini
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default worker;
