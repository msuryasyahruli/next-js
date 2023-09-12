import Image from "next/image";
import React, { useState } from "react";
import image from "./imgAuth/true-agency-o4UhdLv5jbQ-unsplash.jpg";
import gradient from "./imgAuth/gradient.png";
import logo from "./imgAuth/logo.png";
import Link from "next/link";
import style from "./login.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const worker = () => {
  const [data, setData] = useState({
    worker_name: "",
    worker_email: "",
    worker_phone: "",
    worker_password: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const router = useRouter();

  const submit = (e) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/worker/register`, data)
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        setTimeout(function () {
          router.push("/login/worker");
        }, 1000);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.response.data.message,
        });
        // console.log(err);
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
              <div
                className="d-flex align-items-center"
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
                padding: 10,
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
                    Nama
                  </p>
                  <input
                    type="text"
                    name="worker_name"
                    id="worker_name"
                    placeholder="Masukan nama panjang"
                    onChange={change}
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
                    Email
                  </p>
                  <input
                    type="email"
                    name="worker_email"
                    id="worker_email"
                    placeholder="Masukan alamat email"
                    onChange={change}
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
                    No handphone
                  </p>
                  <input
                    type="text"
                    name="worker_phone"
                    id="worker_phone"
                    placeholder="Masukan no handphone"
                    onChange={change}
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
                    name="worker_password"
                    id="worker_password"
                    placeholder="Masukan kata sandi"
                    onChange={change}
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div>
                {/* <div>
                  <p
                    style={{
                      color: "#9ea0a5",
                      fontSize: 12,
                      margin: "30px 0 0 0",
                    }}
                  >
                    Konfirmasi kata sandi
                  </p>
                  <input
                    type="password"
                    placeholder="Masukan konfirmasi kata sandi"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div> */}
                <button
                  onClick={submit}
                  style={{
                    marginTop: 50,
                    width: "100%",
                    height: 50,
                    borderRadius: 4,
                    border: "1px solid #e2e5ed",
                    backgroundColor: "#fbb017",
                    color: "white",
                  }}
                >
                  Daftar
                </button>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                  }}
                >
                  Anda sudah punya akun?
                  <span>
                    <Link style={{ color: "#fbb017" }} href="/login/worker">
                      {" "}
                      Masuk disini
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
