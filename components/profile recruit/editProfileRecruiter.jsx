import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import profile from "./imgProfile/profile.png";
import map from "./imgEditProfile/map-pin.png";
import Image from "next/image";
import DataDiri from "./profileEdit/DataDiri";

const EditProfileRecruiter = () => {
  const router = useRouter();
  const [recruiter, setRecruiter] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/recruiter/${router.query.id}`)
        .then((res) => {
          setRecruiter(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.isReady]);

  return (
    <>
      <main style={{ backgroundColor: "#f6f7f8" }}>
        <section
          style={{
            background:
              "linear-gradient( to bottom,#5e50a1 0%,#5e50a1 350px, #f3f4f8 350px,#f3f4f8 100%)",
          }}
        >
          <div className="container pt-5 pb-5">
            <div className="row">
              <section className="col-lg-4">
                <div
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
                >
                  <div
                    className="pt-3 pb-3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div style={{ width: "150px", height: "150px" }}>
                      <Image
                        src={profile}
                        alt="profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <p style={{ fontSize: 22, fontWeight: 600 }}>
                    {recruiter.company_name}
                  </p>
                  <p>{recruiter.worker_jobdesk}</p>
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
                      {recruiter.recruiter_city}, {recruiter.recruiter_province}
                    </p>
                  </div>
                  <p
                    style={{ color: "#9ea0a5", fontSize: 14, fontWeight: 400 }}
                  >
                    {recruiter.company_field}
                  </p>
                </div>
                <button
                  className="w-100 mt-3"
                  style={{
                    height: 50,
                    backgroundColor: "#5e50a1",
                    borderRadius: 10,
                    color: "white",
                  }}
                >
                  Simpan
                </button>
                <button
                  className="w-100 mt-3"
                  style={{
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    color: "#5e50a1",
                  }}
                >
                  Batal
                </button>
              </section>
              <section className="col-lg-8 pt-3 pt-lg-0">
                <DataDiri />
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditProfileRecruiter;
