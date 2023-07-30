import Image from "next/image";
import React from "react";
import profile from "./imgProfile/profile.png"
import map from "./imgEditProfile/map-pin.png"
import upload from "./imgEditProfile/upload.png"

const EditProfile = () => {
  return (
    <div>
      <main style={{ backgroundColor: "#f6f7f8" }}>
        <section
          style={{
            background:
              "linear-gradient( to bottom,#5e50a1 0%,#5e50a1 350px, #f3f4f8 350px,#f3f4f8 100%)",
          }}
        >
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-4">
                <div
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
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
                    style={{ color: "#9ea0a5", fontSize: 14, fontWeight: 400 }}
                  >
                    Freelancer
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
              </div>
              <div className="col-lg-8 pt-3 pt-lg-0">
                <div
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
                >
                  <p style={{ fontWeight: 600, fontSize: 22 }}>Data diri</p>
                  <hr />
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Nama lengkap
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan nama lengkap"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Job desk
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan job desk"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Domisili
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan domisili"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Tempat kerja
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan tempat kerja"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
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
                    <input
                      type="text"
                      placeholder="Tuliskan deskripsi singkat"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
                >
                  <p style={{ fontWeight: 600, fontSize: 22 }}>Skill</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-10">
                      <input
                        className="w-100"
                        type="text"
                        placeholder="Javascript, Html, css"
                        style={{
                          height: 50,
                          borderRadius: 4,
                          border: "1px solid #e2e5ed",
                        }}
                      />
                    </div>
                    <div className="col-md-2 mt-3 mt-md-0">
                      <button
                        className="w-100"
                        style={{
                          backgroundColor: "#fbb017",
                          height: 50,
                          borderRadius: 4,
                          border: 0,
                        }}
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-4"
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
                >
                  <p style={{ fontWeight: 600, fontSize: 22 }}>
                    Pengalaman kerja
                  </p>
                  <hr />
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
                            type="text"
                            placeholder="Januari 2018"
                            style={{
                              width: "100%",
                              height: 50,
                              borderRadius: 4,
                              border: "1px solid #e2e5ed",
                            }}
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
                            type="text"
                            placeholder="Januari 2019"
                            style={{
                              width: "100%",
                              height: 50,
                              borderRadius: 4,
                              border: "1px solid #e2e5ed",
                            }}
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
                    <input
                      type="text"
                      placeholder="Deskripsikan pekerjaan anda"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <hr />
                  <button
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
                </div>
                <div
                  className="mt-4"
                  style={{ borderRadius: 8, background: "white", padding: 20 }}
                >
                  <p style={{ fontWeight: 600, fontSize: 22 }}>Portofolio</p>
                  <hr />
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Nama aplikasi
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan nama aplikasi"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#9ea0a5",
                        fontSize: 12,
                        margin: "30px 0 0 0",
                      }}
                    >
                      Link repository
                    </p>
                    <input
                      type="text"
                      placeholder="Masukan link repository"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 4,
                        border: "1px solid #e2e5ed",
                      }}
                    />
                  </div>
                  <div>
                    <div>
                      <p
                        style={{
                          color: "#9ea0a5",
                          fontSize: 12,
                          margin: "30px 0 0 0",
                        }}
                      >
                        Type portofolio
                      </p>
                      <form style={{ display: "flex" }}>
                        <div
                          className="p-2 mr-3"
                          style={{
                            height: 50,
                            borderRadius: 4,
                            border: "1px solid #e2e5ed",
                          }}
                        >
                          <input
                            type="radio"
                            name="Type"
                            defaultValue="mobile"
                          />
                          <label htmlFor="mobile">Aplikasi mobile</label>
                          <br />
                        </div>
                        <div
                          className="p-2"
                          style={{
                            height: 50,
                            borderRadius: 4,
                            border: "1px solid #e2e5ed",
                          }}
                        >
                          <input type="radio" name="Type" defaultValue="web" />
                          <label htmlFor="web">Aplikasi Web</label>
                          <br />
                        </div>
                      </form>
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
                      Upload gambar
                    </p>
                    <div
                      style={{
                        width: "100%",
                        height: 300,
                        borderRadius: 10,
                        border: "2px dashed #e2e5ed",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <Image
                          src={upload}
                          alt="uploadImg"
                        />
                      </div>
                      <input className="border" type="file" />
                    </div>
                  </div>
                  <hr />
                  <button
                    className="w-100 mt-3"
                    style={{
                      height: 50,
                      backgroundColor: "white",
                      borderRadius: 4,
                      color: "#fbb017",
                      border: "1px solid #fbb017",
                    }}
                  >
                    Tambah portofolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditProfile;
