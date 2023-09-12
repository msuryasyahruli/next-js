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

const ProfileRecruiter = () => {
  const router = useRouter();
  const [recruiter, setWorker] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/recruiter/${router.query.id}`)
        .then((res) => {
          setWorker(res.data.data[0]);
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
  }, []);

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
              <div>
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
                  <p
                    className="d-flex justify-content-center"
                    style={{ fontSize: 22, fontWeight: 600 }}
                  >
                    {recruiter.company_name}
                  </p>
                  <p className="d-flex justify-content-center">
                    {recruiter.company_field}
                  </p>
                  <div
                    className="d-flex justify-content-center"
                    style={{ display: "flex" }}
                  >
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
                  <div className="d-flex justify-content-center">
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 14,
                        fontWeight: 400,
                        width: 600,
                        textAlign: "center",
                      }}
                    >
                      {recruiter.company_info}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href={`/profile/edit/${login}`}>
                      <button
                        style={{
                          height: 50,
                          width: "300px",
                          borderRadius: 4,
                          border: 0,
                          color: "white",
                          background: "#5e50a1",
                        }}
                      >
                        Edit profile
                      </button>
                    </a>
                  </div>
                  <div className="mt-4">
                    <div
                      className="d-flex justify-content-center"
                      style={{ display: "flex" }}
                    >
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
                    <div
                      className="d-flex justify-content-center"
                      style={{ display: "flex" }}
                    >
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
                    <div
                      className="d-flex justify-content-center"
                      style={{ display: "flex" }}
                    >
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
                    <div
                      className="d-flex justify-content-center"
                      style={{ display: "flex" }}
                    >
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
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileRecruiter;
