import Image from "next/image";
import React from "react";
import profile1 from "./imgHome/profile1.png";
import map from "./imgHome/map-pin.png";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <main style={{ backgroundColor: "#f6f7f8" }}>
        <div style={{ backgroundColor: "#5e50a1" }}>
          <div className="container">
            <p
              style={{
                fontWeight: 700,
                fontSize: 28,
                color: "white",
                padding: "20px 0",
              }}
            >
              Top Jobs
            </p>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div
            className="input-group"
            style={{
              backgroundColor: "white",
              height: 70,
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
              padding: "0 7px",
            }}
          >
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search for any skill"
              aria-label="Search for any skill with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Sort by name
                </a>
                <a className="dropdown-item" href="#">
                  Sort by skill
                </a>
                <a className="dropdown-item" href="#">
                  Sort by location
                </a>
                <a className="dropdown-item" href="#">
                  Sort by freelance
                </a>
                <a className="dropdown-item" href="#">
                  Sort by fulltime
                </a>
              </div>
            </div>
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{
                backgroundColor: "#5e50a1",
                width: 121,
                height: 54,
                color: "white",
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="container pb-5">
          <div
            className="p-3"
            style={{ backgroundColor: "white", borderRadius: 10 }}
          >
            <div className="row">
              <div className="col-md-2">
                <Image
                  src={profile1}
                  alt="profile"
                  style={{ height: 120, width: 120 }}
                />
              </div>
              <div className="col-md-7">
                <p style={{ fontSize: 22, fontWeight: 600 }}>Louis Tomlinson</p>
                <p style={{ color: "#9ea0a5", fontSize: 14, fontWeight: 400 }}>
                  Web developer
                </p>
                <div style={{ display: "flex" }}>
                  <div className="pr-2">
                    <Image src={map} alt="map" />
                  </div>
                  <p
                    style={{ color: "#9ea0a5", fontSize: 14, fontWeight: 400 }}
                  >
                    Lorem ipsum
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    className="border-0 mr-2"
                    style={{
                      width: 70,
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
                    className="border-0 mr-2"
                    style={{
                      width: 99,
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
                    className="border-0 mr-2"
                    style={{
                      width: 76,
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
                </div>
              </div>
              <div className="col-md-3 p-5">
                <Link href="/profile">
                  <button
                    style={{
                      width: 148,
                      height: 54,
                      borderRadius: 4,
                      background: "#5e50a1",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Lihat Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
