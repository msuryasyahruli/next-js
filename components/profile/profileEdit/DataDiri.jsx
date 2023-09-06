import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DataDiri = (name) => {
  //update profile
  const [data, setData] = useState({
    worker_name: "",
    worker_jobdesk: "",
    worker_province: "",
    worker_city: "",
    worker_workplace: "",
    worker_description: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = localStorage.getItem("user_id");
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/worker/${login}`, data)
      .then((res) => {
        setData(res.data.data[0]);
        alert("Data updated");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/worker/${router.query.id}`)
        .then((res) => {
          setData(res.data.data[0]);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.isReady]);

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
              value={data.worker_name}
              onChange={handleChange}
              name="worker_name"
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
              value={data.worker_jobdesk}
              onChange={handleChange}
              name="worker_jobdesk"
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
                value={data.worker_city}
                onChange={handleChange}
                name="worker_city"
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
                value={data.worker_province}
                onChange={handleChange}
                name="worker_province"
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
              value={data.worker_workplace}
              onChange={handleChange}
              name="worker_workplace"
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
              name="worker_description"
              value={data.worker_description}
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
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataDiri;
