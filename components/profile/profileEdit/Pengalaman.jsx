import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ModalUpdate from "../../exp modal/modalUpdate";
import ModalDelete from "../../exp modal/modalDelete";

const Pengalaman = () => {
  // get all exp
  let [exp, setExp] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/exp`)
      .then((res) => {
        setExp(res.data.data);
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

  // create exp
  const [data, setData] = useState({
    position: "",
    company_name: "",
    working_start: "",
    working_end: "",
    description: "",
    workerid: ""
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
    axios
      .post("http://localhost:2525/exp", data, {
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

  // update exp
  // const [update, setUpdate] = useState({
  //   position: "",
  //   company_name: "",
  //   working_start: "",
  //   working_end: "",
  //   description: ""
  // });

  // const changeUpdate = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(data);
  // };

  // const submitUpdate = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put(`http://localhost:2525/exp/${exp_id}`, data)
  //     .then((res) => {
  //       setUpdate(res.data.data[0]);
  //       console.log(res.data.data[0]);
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err);
  //       setShow(false);
  //     });
  // };

  return (
    <div>
      <div
        className="mt-4"
        style={{ borderRadius: 8, background: "white", padding: 20 }}
      >
        <p style={{ fontWeight: 600, fontSize: 22 }}>Experience</p>
        <hr />
        {exp.map((exp) => (
          <div>
            <div>
              <div>
                <p
                  className="m-0 p-0"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  {exp.position}
                </p>
                <p className="m-0 p-0">{exp.company_name}</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    color: "#9EA0A5",
                  }}
                >
                  <p className="m-0 p-0">
                    {exp.working_start} - {exp.working_end}
                  </p>
                  <p className="ml-md-3 m-0 p-0">X months</p>
                </div>
              </div>
              <p className="mt-3" style={{ color: "#1F2A36" }}>
                {exp.description}
              </p>
            </div>
            {/* <ModalUpdate
              exp_id={exp.exp_id}
              position={exp.position}
              company_name={exp.company_name}
              working_start={exp.working_start}
              working_end={exp.working_end}
              description={exp.description}
            >
              Update
            </ModalUpdate> */}
            {/* <ModalDelete exp_id={exp.exp_id}>Delete</ModalDelete> */}
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
              Posisi
            </p>
            <input
              type="text"
              placeholder="Masukan posisi"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.position}
              onChange={handleChange}
              name="position"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p
                style={{
                  color: "#9ea0a5",
                  fontSize: 12,
                  margin: "30px 0 0 0",
                }}
              >
                Nama perusahaan
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
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <p
                    style={{
                      color: "#9ea0a5",
                      fontSize: 12,
                      margin: "30px 0 0 0",
                    }}
                  >
                    Dari Bulan/tahun
                  </p>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                    }}
                    value={data.working_start}
                    onChange={handleChange}
                    name="working_start"
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
                    Sampai Bulan/tahun
                  </p>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                    }}
                    value={data.working_end}
                    onChange={handleChange}
                    name="working_end"
                  />
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
              Deskripsi singkat
            </p>
            <textarea
              type="text"
              placeholder="Deskripsikan pekerjaan anda"
              style={{
                width: "100%",
                height: 150,
                borderRadius: 4,
                border: "1px solid #e2e5ed",
              }}
              value={data.description}
              onChange={handleChange}
              name="description"
            />
          </div>
          <input
            type="hidden"
            name="workerid"
            value={(data.workerid = login)}
          />
          <hr />
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
            Tambah pengalaman kerja
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pengalaman;
