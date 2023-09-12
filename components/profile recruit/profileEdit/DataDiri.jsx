import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DataDiri = () => {
  //update profile
  const [data, setData] = useState({
    company_name:"",
    recruiter_province: "",
    recruiter_city: "",
    recruiter_email:"",
    company_email: "",
    company_field: "",
    company_phone: "",
    company_info: "",
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
      .put(`${process.env.NEXT_PUBLIC_API}/recruiter/${login}`, data)
      .then((res) => {
        setData(res.data.data[0]);
        alert("Data updated");
        window.location.reload();
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
        .get(`${process.env.NEXT_PUBLIC_API}/recruiter/${router.query.id}`)
        .then((res) => {
          setData(res.data.data[0]);
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
              Nama Perusahaan
            </p>
            <input
              type="text"
              placeholder="Masukan nama perusahan"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.company_name}
              onChange={handleChange}
              name="company_name"
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
              Bidang
            </p>
            <input
              type="text"
              placeholder="Masukan bidang perusahaan ex : Financial"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.company_field}
              onChange={handleChange}
              name="company_field"
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
              value={data.recruiter_province}
              onChange={handleChange}
              name="recruiter_province"
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
              value={data.recruiter_city}
              onChange={handleChange}
              name="recruiter_city"
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
                height: 100,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              name="company_info"
              value={data.company_info}
              onChange={handleChange}
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
              placeholder="Masukan email"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.recruiter_email}
              onChange={handleChange}
              name="recruiter_email"
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
              Email Perusahaan 
            </p>
            <input
              type="email"
              placeholder="Masukan email Perusahaan"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.company_email}
              onChange={handleChange}
              name="company_email"
            />
          </div><div>
            <p
              style={{
                color: "#9ea0a5",
                fontSize: 12,
                margin: "30px 0 0 0",
              }}
            >
              Nomor Telepon 
            </p>
            <input
              type="text"
              placeholder="Masukan nomor telepon"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.company_phone}
              onChange={handleChange}
              name="company_phone"
            />
          </div><div>
            <p
              style={{
                color: "#9ea0a5",
                fontSize: 12,
                margin: "30px 0 0 0",
              }}
            >
              Linkedin 
            </p>
            <input
              type="text"
              placeholder="Masukan nama Linkedin"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              // value={data.workplace}
              // onChange={handleChange}
              // name="workplace"
            />
          </div>
          <button
            type="submit"
            className="w-100 mt-5"
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
