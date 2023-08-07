import React, { useEffect, useState } from "react";
import upload from "../imgEditProfile/upload.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import ModalUpdate from "../../modal portfolio/modalUpdate";
import ModalDelete from "../../modal portfolio/modalDelete";

const Portofolio = () => {
  // get all portfolio
  let [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/portfolio`)
      .then((res) => {
        setPortfolio(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //login
  const router = useRouter();
  const [login, setLogin] = useState();
  useEffect(() => {
    if (router.isReady) {
      const login = localStorage.getItem("worker_id");
      setLogin(login);
    }
  }, [router.isReady]);

  // create portofolio
  const [data, setData] = useState({
    app_name: "",
    link_repo: "",
    tipe: "",
    workerid: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
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
      .post("http://localhost:2525/portfolio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("created");
        // setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // setShow(false);
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
        {portfolio.map((portfolio) => (
          <div>
            <div className="row mb-3 mt-2">
              <div className="col-md-3">
                <img
                  src={portfolio.photo}
                  alt="app"
                  crossOrigin="anonymous"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <p className="m-0 p-0" style={{ fontWeight: 600 }}>{portfolio.app_name}</p>
                <p className="m-0 p-0">{portfolio.link_repo}</p>
                <p className="m-0 p-0">{portfolio.tipe}</p>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <ModalUpdate
                  portfolio_id={portfolio.portfolio_id}
                  app_name={portfolio.app_name}
                  link_repo={portfolio.link_repo}
                  tipe={portfolio.tipe}
                >
                  Update
                </ModalUpdate>
                <ModalDelete portfolio_id={portfolio.portfolio_id}>x</ModalDelete>
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
                  <input type="radio" defaultValue="mobile" value={'Aplikasi Mobile'}
                    onChange={handleChange}
                    name="tipe" />
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
                  <input type="radio" defaultValue="web" value={'Aplikasi Web'}
                    onChange={handleChange}
                    name="tipe" />
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
              <div>
                <Image src={upload} alt="uploadImg" />
              </div>
              <input className="border" type="file" name="photo"
                onChange={handleUpload} />
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
