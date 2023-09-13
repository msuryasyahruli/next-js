import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import profile1 from "../../components/home/imgHome/profile1.png";
import map from "../../components/home/imgHome/map-pin.png";
import Pagination from "../../components/pagination/pagination";

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/worker`);
  return {
    props: { worker: res.data.data },
  };
}

function SSR({ worker }) {
  let [data, setData] = useState([]);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const onSelectionChange = (e) => {
    const sortDirection = e.target.value;
    setSort(sortDirection);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = worker.slice(firstPostIndex, lastPostIndex);

  return (
    <>
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
            {/* <select
              onChange={handleSort}
              value={sortValue}
              style={{ width: 70, height: 54, border: 0 }}
            >
              <option>Sort</option>
              <option value="worker_name">Name</option>
              <option value="worker_city">City</option>
              <option value="worker_jobdesk">Job</option>
            </select> */}
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
          <div
            className="p-3"
            style={{ backgroundColor: "white", borderRadius: 10 }}
          >
            {currentPosts
              .filter((worker) => {
                return search.toLowerCase() === ""
                  ? worker
                  : worker.worker_name
                      .toLowerCase()
                      .includes(search.toLowerCase());
              })
              .map((worker, index) => (
                <div key={index}>
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 d-flex justify-content-center align-items-center">
                      <div style={{ width: "120px", height: "120px" }}>
                        {!worker.worker_photo ? (
                          <Image
                            src={profile1}
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
                    <div className="col-lg-7 col-md-6">
                      <p style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
                        {worker.worker_name}
                      </p>
                      <p
                        style={{
                          color: "#9ea0a5",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        {worker.worker_jobdesk}
                      </p>
                      <div className="d-flex">
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
                      {/* <div className="d-flex">
                        {skill.map((skill) => (
                          <div
                            className="border-0 mr-2"
                            style={{
                              width: "auto",
                              padding: "0 10px",
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
                      </div> */}
                    </div>
                    <div className="col-lg-3 col-md-3 p-3 pt-md-5 p-lg-5">
                      <Link href={`/profile-view/${worker.worker_id}`}>
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
          </div>
          <Pagination
            totalPosts={worker.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </>
  );
}

export default SSR;
