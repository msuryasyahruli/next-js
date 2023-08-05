import Image from "next/image";
import React, { useState } from "react";
import image from "./imgAuth/true-agency-o4UhdLv5jbQ-unsplash.jpg";
import gradient from "./imgAuth/gradient.png";
import logo from "./imgAuth/logo.png";
import Link from "next/link";
import style from "./login.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const worker = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  
  let router = useRouter()

  let submit = (e) => {
    axios
      .post(`http://localhost:2525/worker/login`, data)
      .then((res) => {
        localStorage.setItem("token",res.data.data.token);
        localStorage.setItem("worker_id",res.data.data.worker_id);
        alert("Login success");
        router.push("/landingPage");
      })
      .catch((err) => {
        alert("Account doesn't exist")
        console.log(err);
      });
  };

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
                    type="email"
                    name="email"
                    id="email"
                    onChange={change}
                    required
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
                    name="password"
                    id="password"
                    onChange={change}
                    required
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
                  onClick={submit}
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
