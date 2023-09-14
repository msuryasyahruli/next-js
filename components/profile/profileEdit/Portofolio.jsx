import React, { useEffect, useRef, useState } from "react";
import upload from "../imgEditProfile/upload.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import ModalUpdate from "../../modal portfolio/modalUpdate";
import ModalDelete from "../../modal portfolio/modalDelete";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Portofolio = () => {
  // get all portfolio
  const router = useRouter();
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      const islogin = localStorage.getItem("user_id");
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/portfolio/${islogin}`)
        .then((res) => {
          setPortfolio(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  //login
  const [login, setLogin] = useState();
  useEffect(() => {
    if (router.isReady) {
      const login = localStorage.getItem("user_id");
      setLogin(login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // create portofolio
  const [data, setData] = useState({
    app_name: "",
    link_repo: "",
    tipe: "",
    workerid: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const [photo, setPhoto] = useState(null);

  const inputRef = useRef(null);
  const handleImgClink = () => {
    inputRef.current.click();
  };

  const [preview, setPreview] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("app_name", data.app_name);
    formData.append("link_repo", data.link_repo);
    formData.append("tipe", data.tipe);
    formData.append("photo", photo);
    formData.append("workerid", data.workerid);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/portfolio`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div>
      <div
        className="mt-4"
        style={{ borderRadius: 8, background: "white", padding: 20 }}
      >
        <div>
          <p style={{ fontWeight: 600, fontSize: 22 }}>Portofolio</p>
        </div>
        <hr />
        {portfolio.map((portfolio, index) => (
          <div key={index}>
            <div className="row mb-3 mt-2">
              <div className="col-md-4">
                <Image
                  src={portfolio.photo}
                  alt="app"
                  crossOrigin="anonymous"
                  width={100}
                  height={100}
                  style={{ width: "100%",height:"auto", borderRadius: 5 }}
                />
              </div>
              <div className="col-md-6">
                <p className="mt-2 p-0" style={{ fontWeight: 600 }}>
                  {portfolio.app_name}
                </p>
                <p className="m-0 p-0">{portfolio.link_repo}</p>
                <p className="mb-3 p-0">{portfolio.tipe}</p>
              </div>
              <div className="col-md-2 d-flex justify-content-md-center">
                <ModalUpdate
                  portfolio_id={portfolio.portfolio_id}
                  app_name={portfolio.app_name}
                  link_repo={portfolio.link_repo}
                  tipe={portfolio.tipe}
                >
                  <i className="bi bi-pencil-square"></i>
                </ModalUpdate>
                <ModalDelete portfolio_id={portfolio.portfolio_id}>
                  <i className="bi bi-trash"></i>
                </ModalDelete>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <div>
            <p
              style={{
                color: "#9ea0a5",
                fontSize: 12,
                margin: "30px 0 0 0",
              }}
            >
              Nama aplikasi
            </p>
            <input
              type="text"
              placeholder="Masukan nama aplikasi"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.app_name}
              onChange={handleChange}
              name="app_name"
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
              Link repository
            </p>
            <input
              type="text"
              placeholder="Masukan link repository"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.link_repo}
              onChange={handleChange}
              name="link_repo"
            />
          </div>
          <div>
            <div>
              <p
                style={{
                  color: "#9ea0a5",
                  fontSize: 12,
                  margin: "30px 0 0 0",
                }}
              >
                Type portofolio
              </p>
              <div style={{ display: "flex" }}>
                <div
                  className="p-2 mr-3"
                  style={{
                    height: 50,
                    borderRadius: 4,
                    border: "1px solid #e2e5ed",
                  }}
                >
                  <input
                    type="radio"
                    defaultValue="mobile"
                    value={"Aplikasi Mobile"}
                    onChange={handleChange}
                    name="tipe"
                  />
                  <label htmlFor="mobile">Aplikasi Mobile</label>
                  <br />
                </div>
                <div
                  className="p-2"
                  style={{
                    height: 50,
                    borderRadius: 4,
                    border: "1px solid #e2e5ed",
                  }}
                >
                  <input
                    type="radio"
                    defaultValue="web"
                    value={"Aplikasi Web"}
                    onChange={handleChange}
                    name="tipe"
                  />
                  <label htmlFor="web">Aplikasi Web</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p
              style={{
                color: "#9ea0a5",
                fontSize: 12,
                margin: "30px 0 0 0",
              }}
            >
              Upload gambar
            </p>
            <div
              style={{
                width: "100%",
                height: 300,
                borderRadius: 10,
                border: "2px dashed #e2e5ed",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div onClick={handleImgClink}>
                {preview ? (
                  <Image
                    src={preview}
                    alt="avatar"
                    height={180}
                    width={320}
                    style={{ objectFit: "cover" }}
                    className="m-auto my-3"
                  />
                ) : (
                  <Image src={upload} alt="uploadImg" />
                )}
                <input
                  className="border"
                  type="file"
                  ref={inputRef}
                  name="photo"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div>
              <input
                type="hidden"
                name="workerid"
                value={(data.workerid = login)}
              />
            </div>
          </div>
          <hr />
          <button
            onSubmit={handleSubmit}
            className="w-100 mt-3"
            style={{
              height: 50,
              backgroundColor: "white",
              borderRadius: 4,
              color: "#fbb017",
              border: "1px solid #fbb017",
            }}
          >
            Tambah portofolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Portofolio;
