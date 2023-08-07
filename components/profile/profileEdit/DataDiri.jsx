import axios from "axios";
import React, { useEffect, useState } from "react";

const DataDiri = () => {
  //update profile
  const [data, setData] = useState({
    name: "",
    province: "",
    city: "",
    workplace: "",
    description: "",
  });

  // console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = localStorage.getItem("worker_id");
    axios
      .put(`http://localhost:2525/worker/${login}`, data)
      .then((res) => {
        setData(res.data.data[0]);
        // console.log(res.data.data[0]);
        alert("Data updated");
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setShow(false);
      });
  };

  return (
    <div>
      <div style={{ borderRadius: 8, background: "white", padding: 20 }}>
        <p style={{ fontWeight: 600, fontSize: 22 }}>Data diri</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <p
              style={{
                color: "#9ea0a5",
                fontSize: 12,
                margin: "30px 0 0 0",
              }}
            >
              Nama lengkap
            </p>
            <input
              type="text"
              placeholder="Masukan nama lengkap"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.name}
              onChange={handleChange}
              name="name"
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
              Job desk
            </p>
            <input
              type="text"
              placeholder="Masukan job desk"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <p
                style={{
                  color: "#9ea0a5",
                  fontSize: 12,
                  margin: "30px 0 0 0",
                }}
              >
                Kota
              </p>
              <input
                type="text"
                placeholder="Masukan kota"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 4,
                  border: "1px solid #e2e5ed",
                }}
                value={data.city}
                onChange={handleChange}
                name="city"
              />
            </div>
            <div className="col-6">
              <p
                style={{
                  color: "#9ea0a5",
                  fontSize: 12,
                  margin: "30px 0 0 0",
                }}
              >
                Provinsi
              </p>
              <input
                type="text"
                placeholder="Masukan provinsi"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 4,
                  border: "1px solid #e2e5ed",
                }}
                value={data.province}
                onChange={handleChange}
                name="province"
              />
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
              Tempat kerja
            </p>
            <input
              type="text"
              placeholder="Masukan tempat kerja"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.workplace}
              onChange={handleChange}
              name="workplace"
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
              Deskripsi singkat
            </p>
            <textarea
              type="text"
              placeholder="Tuliskan deskripsi singkat"
              style={{
                width: "100%",
                height: 150,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-100 mt-3"
            style={{
              height: 50,
              backgroundColor: "white",
              borderRadius: 4,
              color: "#fbb017",
              border: "1px solid #fbb017",
            }}
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataDiri;
