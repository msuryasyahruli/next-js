import React, { useEffect, useState } from "react";
import upload from "../imgEditProfile/upload.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2525/portfolio", data, {
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
        <p style={{ fontWeight: 600, fontSize: 22 }}>Portofolio</p>
        <hr />
        {portfolio.map((portfolio) => (
          <div>
            <div>
              <p className="m-0 p-0" style={{ fontWeight: 600 }}>{portfolio.app_name}</p>
              <p className="m-0 p-0">{portfolio.link_repo}</p>
              <p className="m-0 p-0">{portfolio.tipe}</p>
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
              <form style={{ display: "flex" }}>
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
              </form>
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
              <input className="border" type="file" />
            </div>
            <input
              type="hidden"
              name="workerid"
              value={(data.workerid = login)}
            />
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
