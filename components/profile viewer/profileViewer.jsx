import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "./imgProfile/profile.png";
import map from "./imgProfile/map-pin.png";
import mail from "./imgProfile/mail.png";
import instagram from "./imgProfile/instagram.png";
import github from "./imgProfile/github.png";
import gitlab from "./imgProfile/gitlab.png";
import axios from "axios";
import { useRouter } from "next/router";

const ProfileViewer = () => {
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

  // get all portfolio
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/portfolio/${router.query.id}`)
        .then((res) => {
          setPortfolio(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // get all exp
  const [exp, setExp] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/exp/${router.query.id}`)
        .then((res) => {
          setExp(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const [login, setLogin] = useState();
  useEffect(() => {
    const isLogin = localStorage.getItem("user_id");
    setLogin(isLogin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main style={{ backgroundColor: "#F6F7F8" }}>
        <div>
          <section
            style={{
              background:
                "linear-gradient( to bottom, #5e50a1 0%, #5e50a1 350px, #f3f4f8 350px, #f3f4f8 100%)",
            }}
          >
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
                    <p style={{ fontSize: 22, fontWeight: 600 }}>
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
                    <a href={`hire/${worker.worker_id}`}>
                      <button
                        style={{
                          height: 50,
                          width: "100%",
                          borderRadius: 4,
                          border: 0,
                          color: "white",
                          background: "#5e50a1",
                        }}
                      >
                        Hire
                      </button>
                    </a>
                    <p
                      style={{ fontSize: 22, fontWeight: 600, paddingTop: 20 }}
                    >
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
                    <div className="mt-4">
                      <div style={{ display: "flex" }}>
                        <div className="mr-2">
                          <Image src={mail} alt="mail" />
                        </div>
                        <p
                          style={{
                            color: "#9ea0a5",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          {worker.worker_email}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="mr-2">
                          <Image src={instagram} alt="instagram" />
                        </div>
                        <p
                          style={{
                            color: "#9ea0a5",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          @{worker.worker_name}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="mr-2">
                          <Image src={github} alt="github" />
                        </div>
                        <p
                          style={{
                            color: "#9ea0a5",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          @{worker.worker_name}
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="mr-2">
                          <Image src={gitlab} alt="gitlab" />
                        </div>
                        <p
                          style={{
                            color: "#9ea0a5",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          @{worker.worker_name}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="col-lg-8 pt-3 pt-lg-0">
                  <div
                    style={{
                      borderRadius: 8,
                      background: "white",
                      padding: 20,
                    }}
                  >
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-Portofolio-tab"
                          data-toggle="tab"
                          href="#nav-Portofolio"
                          role="tab"
                          aria-controls="nav-Portofolio"
                          aria-selected="true"
                        >
                          Portofolio
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-Pengalaman-tab"
                          data-toggle="tab"
                          href="#nav-Pengalaman"
                          role="tab"
                          aria-controls="nav-Pengalaman"
                          aria-selected="false"
                        >
                          Pengalaman kerja
                        </a>
                      </div>
                    </nav>
                    <div className="tab-content mt-4" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-Portofolio"
                        role="tabpanel"
                        aria-labelledby="nav-Portofolio-tab"
                      >
                        <div className="row">
                          {portfolio.map((portfolio, index) => (
                            <div
                              key={index}
                              className="col-md-4"
                              style={{ textAlign: "center" }}
                            >
                              <Image
                                src={portfolio.photo}
                                alt="app"
                                crossOrigin="anonymous"
                                style={{ width: "100%", borderRadius: 5 }}
                              />
                              <p>{portfolio.app_name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-Pengalaman"
                        role="tabpanel"
                        aria-labelledby="nav-Pengalaman-tab"
                      >
                        <div>
                          {exp.map((exp, index) => (
                            <div key={index}>
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
                                  <p className="ml-md-3 m-0 p-0">x months</p>
                                </div>
                              </div>
                              <p className="mt-3" style={{ color: "#1F2A36" }}>
                                {exp.description}
                              </p>
                              <hr />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProfileViewer;
