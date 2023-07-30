import Image from "next/image";
import React from "react";
import img1 from "./imgLandingPage/landingImg1.png";
import img2 from "./imgLandingPage/landingImg2.png";
import img3 from "./imgLandingPage/landingImg3.png";
import tick1 from "./imgLandingPage/tick 1.png";
import tick2 from "./imgLandingPage/tick 2.png";
import profile1 from "./imgLandingPage/profile1.png";
import profile2 from "./imgLandingPage/profile2.png";
import profile3 from "./imgLandingPage/profile3.png";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <main>
        <div className="container">
          <section className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 490 }}>
                <p style={{ fontWeight: 600, fontSize: 44, color: "#1f2a36" }}>
                  Talenta terbaik negri untuk perubahan revolusi 4.0
                </p>
                <p style={{ fontWeight: 400, fontSize: 18, color: "#46505c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <Link href="/home">
                  <button
                    style={{
                      width: 170,
                      height: 50,
                      borderRadius: 5,
                      border: 0,
                      backgroundColor: "#5e50a1",
                      color: "white",
                      marginTop: 20,
                    }}
                  >
                    Mulai Dari Sekarang
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <Image src={img1} alt="img1" className="w-100 h-100" />
            </div>
          </section>
          <section className="row">
            <div className="col-md-6">
              <Image src={img2} alt="img2" className="w-100 h-100" />
            </div>
            <div className="col-md-6">
              <div style={{ marginTop: 30 }}>
                <p style={{ fontWeight: 600, fontSize: 36 }}>
                  Kenapa harus mencari tallent di peworld
                </p>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image src={tick1} alt="tick1" />
                  </div>
                  <div style={{ margin: "0 20px" }}>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image src={tick1} alt="tick1" />
                  </div>
                  <div style={{ margin: "0 20px" }}>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image src={tick1} alt="tick1" />
                  </div>
                  <div style={{ margin: "0 20px" }}>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image src={tick1} alt="tick1" />
                  </div>
                  <div style={{ margin: "0 20px" }}>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <div style={{ width: 480 }}>
                <p style={{ fontWeight: 600, fontSize: 36 }}>Skill Tallent</p>
                <p style={{ fontWeight: 400, fontSize: 18, color: "#46505c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>Java</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>Golang</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>Kotlin</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>C++</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>PHP</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>Ruby</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "50%" }}>
                    <div>
                      <Image src={tick2} alt="tick2" />
                    </div>
                    <div style={{ margin: "0 20px" }}>
                      <p>10+ Bahasa lainnya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image src={img3} alt="img3" className="w-100 h-100" />
            </div>
          </section>
        </div>
        <div style={{ backgroundColor: "#f6f7f8" }}>
          <div
            className="container pt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{ fontWeight: 600, fontSize: 36 }}>
              Their opinion about peworld
            </p>
          </div>
          <div className="container pb-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide row"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile1} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Harry Styles
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile2} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Niall Horan
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile3} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Louis Tomlinson
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="carousel-item">
                  <section
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile1} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Harry Styles
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile2} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Niall Horan
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 339,
                        height: 437,
                        backgroundColor: "white",
                        padding: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            backgroundColor: "#fbb0175e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={profile3} alt="profile" />
                        </div>
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: 30,
                            width: "fit-content",
                          }}
                        >
                          Louis Tomlinson
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#9ea0a5",
                            width: "fit-content",
                          }}
                        >
                          Web Developer
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 18,
                            color: "#46505c",
                            width: "fit-content",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: "100px 20px" }}>
          <div
            style={{
              height: 227,
              backgroundColor: "#5e50a1",
              borderRadius: "40px 8px 40px 8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 60px",
            }}
          >
            <div style={{ width: 293 }}>
              <p style={{ fontWeight: 600, fontSize: 36, color: "white" }}>
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <Link href="/home">
              <button
                style={{
                  width: 210,
                  height: "63.11px",
                  borderRadius: 5,
                  border: 0,
                  color: "#796eaf",
                  backgroundColor: "white",
                }}
              >
                Mulai Dari Sekarang
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
