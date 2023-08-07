import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../modal skill/modalDelete";

const Skill = () => {
  // get all skill
  let [skill, setSkill] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/skill`)
      .then((res) => {
        setSkill(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //login
  const router = useRouter();
  const [login, setLogin] = useState();
  useEffect(() => {
    if (router.isReady) {
      const login = localStorage.getItem("worker_id");
      setLogin(login);
    }
  }, [router.isReady]);

  // create exp
  const [data, setData] = useState({
    skill_name: "",
    workerid: ""
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
      .post("http://localhost:2525/skill", data)
      .then((res) => {
        console.log(res);
        alert("created");
        // setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // setShow(false);
      });
  };

  //delete
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   axios
  //     .delete(`http://localhost:2525/skill/${skill_id}`, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       alert("skill deleted");
  //       setShow(false);
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err);
  //       setShow(false);
  //     });
  // };

  return (
    <div>
      <div
        className="mt-4"
        style={{ borderRadius: 8, background: "white", padding: 20 }}
      >
        <div>
          <p style={{ fontWeight: 600, fontSize: 22 }}>Skill</p>
        </div>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {skill.map((skill) => (
            <div className="row m-0 p-0">
              {/* <div
                className="border-0 ml-2 mb-3"
                style={{
                  padding: "3px 10px",
                  height: 40,
                  borderRadius: 4,
                  border: "1px solid #fbb017",
                  background: "rgba(251, 176, 23, 0.6)",
                  textAlign: "center",
                  color: "white",
                }}
              >
                
              </div> */}
              <div>
                <ModalDelete skill_id={skill.skill_id}>{skill.skill_name}</ModalDelete>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              <input
                className="w-100"
                type="text"
                placeholder="Javascript, HTML, CSS"
                style={{
                  height: 50,
                  borderRadius: 4,
                  border: "1px solid #e2e5ed",
                }}
                value={data.skill_name}
                onChange={handleChange}
                name="skill_name"
              />
            </div>
            <div className="col-md-2 mt-3 mt-md-0">
              <button
                onSubmit={handleSubmit}
                className="w-100"
                style={{
                  backgroundColor: "#fbb017",
                  height: 50,
                  borderRadius: 4,
                  border: 0,
                  color: "white"
                }}
              >
                Simpan
              </button>
            </div>
            <div>
              <input
                type="hidden"
                name="workerid"
                value={(data.workerid = login)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skill;
