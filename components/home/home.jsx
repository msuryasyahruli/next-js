import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile1 from "./imgHome/profile1.png";
import map from "./imgHome/map-pin.png";
import Link from "next/link";
import axios from "axios";
import Pagination from "../pagination/pagination";
// import { useRouter } from "next/router";

const Home = () => {
  const [sort, setSort] = useState();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  let [worker, setWorker] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/worker`)
      .then((res) => {
        setWorker(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSelectionChange = (e) => {
    const sortDirection = e.target.value;
    setSort(sortDirection);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = worker.slice(firstPostIndex, lastPostIndex);

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
              onChange={(e) => setSearch(e.target.value)}
              style={{ height: 54 }}
            />
            {/* <div className="input-group-append" id="button-addon4">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <div className="dropdown-menu dropdown-menu-right">
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
            </div> */}
            <select
              className="form-select "
              aria-label="Default select example"
              onChange={onSelectionChange}
              style={{ border: 0 }}
            >
              <option selected>Sort by</option>
              <option value="asc">asc name</option>
              <option value="desc">desc name</option>
            </select>
            <button
              className="btn"
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
          {currentPosts
            .filter((worker) => {
              return search.toLowerCase() === ""
                ? worker
                : worker.worker_name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            .sort((a, b) => {
              return sort === "asc"
                ? a.worker_name.localeCompare(b.name)
                : b.worker_name.localeCompare(a.name);
            })
            .map((worker) => (
              <div
                className="p-3"
                style={{ backgroundColor: "white", borderRadius: 10 }}
              >
                <div className="row">
                  <div className="col-lg-2 col-md-3">
                    <div style={{ width: "120px", height: "120px" }}>
                      <Image
                        className="w-100 h-100"
                        src={profile1}
                        alt="profile"
                        style={{ height: 120, width: 120 }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <p style={{ fontSize: 22, fontWeight: 600 }}>
                      {worker.worker_name}
                    </p>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      Web developer
                    </p>
                    <div style={{ display: "flex" }}>
                      <div className="pr-2">
                        <Image src={map} alt="map" />
                      </div>
                      <p
                        style={{
                          color: "#9ea0a5",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
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
                  <div className="col-lg-3 col-md-3 p-3 pt-md-5 p-lg-5">
                    <Link href={`/profile/${worker.worker_id}`}>
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
                <hr />
              </div>
            ))}
          <Pagination
            totalPosts={worker.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
