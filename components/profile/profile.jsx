import Image from "next/image";
import React from "react";
import profile from "./imgProfile/profile.png";
import map from "./imgProfile/map-pin.png";
import mail from "./imgProfile/mail.png";
import instagram from "./imgProfile/instagram.png";
import github from "./imgProfile/github.png";
import gitlab from "./imgProfile/gitlab.png";
import remainderApp from "./imgProfile/remainderApp.png";
import sosmedApp from "./imgProfile/sosmedApp.png";
import managementWeb from "./imgProfile/managementWeb.png";
import remainderApp2 from "./imgProfile/remainderApp2.png";
import sosmedApp2 from "./imgProfile/sosmedApp2.png";
import managementWeb2 from "./imgProfile/managementWeb2.png";

const Profile = () => {
  return (
    <div>
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
                      <Image src={profile} alt="profile" />
                    </div>
                    <p style={{ fontSize: 22, fontWeight: 600 }}>
                      Louis Tomlinson
                    </p>
                    <p>Web Developer</p>
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
                        Purwokerto, Jawa Tengah
                      </p>
                    </div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      Freelancer
                    </p>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
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
                    <p
                      style={{ fontSize: 22, fontWeight: 600, paddingTop: 20 }}
                    >
                      Skill
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div
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
                        Phyton
                      </div>
                      <div
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
                        Laravel
                      </div>
                      <div
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
                        Golang
                      </div>
                      <div
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
                        JavaScript
                      </div>
                      <div
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
                        PHP
                      </div>
                      <div
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
                        HTML
                      </div>
                      <div
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
                        C++
                      </div>
                      <div
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
                        Kotlin
                      </div>
                      <div
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
                        Swift
                      </div>
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
                          Louistommo@gmail.com
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
                          @Louist91
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
                          @Louistommo
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
                          @Louistommo91
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
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={remainderApp}
                              alt="remainderApp"
                            />
                            <p>Remainder app</p>
                          </div>
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={sosmedApp}
                              alt="sosmedApp"
                            />
                            <p>Social media app</p>
                          </div>
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={managementWeb}
                              alt="managementWeb"
                            />
                            <p>Project management web</p>
                          </div>
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={remainderApp2}
                              alt="remainderApp2"
                            />
                            <p>Remainder app</p>
                          </div>
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={sosmedApp2}
                              alt="sosmedApp2"
                            />
                            <p>Social media app</p>
                          </div>
                          <div
                            className="col-md-4"
                            style={{ textAlign: "center" }}
                          >
                            <Image
                              className="w-100"
                              src={managementWeb2}
                              alt="managementWeb2"
                            />
                            <p>Project management web</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-Pengalaman"
                        role="tabpanel"
                        aria-labelledby="nav-Pengalaman-tab"
                      >
                        <div>
                          <div>
                            <div>
                              <p
                                className="m-0 p-0"
                                style={{ fontWeight: 600, fontSize: 20 }}
                              >
                                Engineer
                              </p>
                              <p className="m-0 p-0">Tokopedia</p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  color: "#9EA0A5",
                                }}
                              >
                                <p className="m-0 p-0">
                                  July 2019 - January 2020
                                </p>
                                <p className="ml-md-3 m-0 p-0">6 months</p>
                              </div>
                            </div>
                            <p className="mt-3" style={{ color: "#1F2A36" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum erat orci, mollis nec gravida
                              sed, ornare quis urna. Curabitur eu lacus
                              fringilla, vestibulum risus at.
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <div>
                            <div>
                              <p
                                className="m-0 p-0"
                                style={{ fontWeight: 600, fontSize: 20 }}
                              >
                                Web Developer
                              </p>
                              <p className="m-0 p-0">Tokopedia</p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  color: "#9EA0A5",
                                }}
                              >
                                <p className="m-0 p-0">
                                  July 2019 - January 2020
                                </p>
                                <p className="ml-md-3 m-0 p-0">6 months</p>
                              </div>
                            </div>
                            <p className="mt-3" style={{ color: "#1F2A36" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum erat orci, mollis nec gravida
                              sed, ornare quis urna. Curabitur eu lacus
                              fringilla, vestibulum risus at.
                            </p>
                          </div>
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
    </div>
  );
};

export default Profile;
