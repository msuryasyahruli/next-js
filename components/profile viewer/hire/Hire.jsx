import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../imgProfile/profile.png";
import map from "../imgProfile/map-pin.png";
import { useRouter } from "next/router";
import axios from "axios";
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

const Hire = () => {
  const router = useRouter();
  //get worker
  const [worker, setWorker] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/worker/${router.query.id}`)
        .then((res) => {
          setWorker(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // get all skill
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/skill/${router.query.id}`)
        .then((res) => {
          setSkill(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const [recruiter, setRecruiter] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/recruiter/${id}`)
      .then((res) => {
        setRecruiter(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user_id, setUserId] = useState();
  useEffect(() => {
    const id = localStorage.getItem("user_id");
    setUserId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [data, setData] = useState({
    hiring_title: "",
    hiring_message: "",
    worker_id: "",
    recruiter_id: "",
    worker_name: "",
    worker_email: "",
    company_name: "",
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
      .post(`${process.env.NEXT_PUBLIC_API}/hiring`, data)
      .then((res) => {
        setData(res.data.data[0]);
        Toast.fire({
          icon: "success",
          title: "Hired",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <main style={{ backgroundColor: "#F6F7F8" }}>
        <div className="container pt-5 pb-5">
          <div className="row">
            <section className="col-lg-4">
              <div
                style={{
                  borderRadius: 8,
                  background: "white",
                  padding: 20,
                }}
              >
                <div
                  className="pt-3 pb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ width: "150px", height: "150px" }}>
                    {!worker.worker_photo ? (
                      <Image
                        src={profile}
                        alt="profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "100%",
                        }}
                      />
                    ) : (
                      <Image
                        src={worker.worker_photo}
                        alt="profile"
                        width={100}
                        height={100}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "100%",
                        }}
                      />
                    )}
                  </div>
                </div>
                <p style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
                  {worker.worker_name}
                </p>
                <p>{worker.worker_jobdesk}</p>
                <div style={{ display: "flex" }}>
                  <div className="mr-2">
                    <Image src={map} alt="map" />
                  </div>
                  <p
                    style={{
                      color: "#9ea0a5",
                      fontSize: 14,
                      fontWeight: 400,
                    }}
                  >
                    {worker.worker_city}, {worker.worker_province}
                  </p>
                </div>
                <p
                  style={{
                    color: "#9ea0a5",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  {worker.worker_workplace}
                </p>
                <p
                  style={{
                    color: "#9ea0a5",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  {worker.worker_description}
                </p>
                <p style={{ fontSize: 22, fontWeight: 600, paddingTop: 20 }}>
                  Skill
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {skill.map((skill, index) => (
                    <div
                      key={index}
                      className="border-0 mr-3 mb-3"
                      style={{
                        padding: "3px 10px",
                        height: 28,
                        borderRadius: 4,
                        border: "1px solid #fbb017",
                        background: "rgba(251, 176, 23, 0.6)",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {skill.skill_name}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="col-lg-8 pt-3 pt-lg-0">
              <h2 style={{ fontWeight: 600 }}>Hubungi {worker.worker_name}</h2>
              <h5 style={{ color: "#46505C" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <p style={{ margin: 0, color: "#9EA0A5" }}>Untuk Posisi</p>
                  <input
                    type="text"
                    placeholder="Masukan Posisi"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      padding: 15,
                    }}
                    value={data.hiring_title}
                    onChange={handleChange}
                    name="hiring_title"
                  />
                </div>
                <div className="mt-3">
                  <p style={{ margin: 0, color: "#9EA0A5" }}>Description</p>
                  <textarea
                    type="text"
                    placeholder="Deskripsikan/jelaskan lebih detail"
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 4,
                      border: "1px solid #e2e5ed",
                      padding: 15,
                    }}
                    value={data.hiring_message}
                    onChange={handleChange}
                    name="hiring_message"
                  />
                </div>
                <input
                  type="hidden"
                  name="worker_id"
                  value={(data.worker_id = user_id)}
                />
                <input
                  type="hidden"
                  name="recruiter_id"
                  value={(data.recruiter_id = recruiter.recruiter_id)}
                />
                <input
                  type="hidden"
                  name="worker_name"
                  value={(data.worker_name = worker.worker_name)}
                />
                <input
                  type="hidden"
                  name="worker_email"
                  value={(data.worker_email = worker.worker_email)}
                />
                <input
                  type="hidden"
                  name="company_name"
                  value={(data.company_name = recruiter.company_name)}
                />
                <button
                  type="submit"
                  className="w-100 mt-5"
                  style={{
                    height: 50,
                    backgroundColor: "#fbb017",
                    borderRadius: 4,
                    border: "1px solid #fbb017",
                  }}
                >
                  Send
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hire;
