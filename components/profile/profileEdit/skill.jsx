import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import ModalDelete from "../../modal skill/modalDelete";
// import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { createSkill, deleteSkill, getSkillUser } from "../../../config/redux/actions/skill";

const Skill = () => {
  // get all skill
  const router = useRouter();
  const dispatch = useDispatch();
  const { skillUser } = useSelector((state) => state.skill);
  useEffect(() => {
    const login = localStorage.getItem("user_id");
    dispatch(getSkillUser(login));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //login
  const [login, setLogin] = useState();
  useEffect(() => {
    if (router.isReady) {
      const login = localStorage.getItem("user_id");
      setLogin(login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // create skill
  const [data, setData] = useState({
    skill_name: "",
    workerid: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    dispatch(createSkill(data));
  };

  //delete
  const handleDeleteSkill = (skill_id) => {
    dispatch(deleteSkill(skill_id));
  };
  // const handleDeleteSkill = (skill_id) => {
  //   const deleteSkills = skill.filter((s) => s.skill_id !== skill_id);
  //   setSkill(deleteSkills);
  //   axios.delete(`${process.env.NEXT_PUBLIC_API}/skill/${skill_id}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
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
          {skillUser.map((skill, index) => (
            <div className="row m-0 p-0" key={index}>
              <div
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
                {skill.skill_name}
                <button
                  className="btn"
                  style={{ borderRadius: "50%", padding: 5 }}
                  onClick={() => handleDeleteSkill(skill.skill_id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
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
                  color: "white",
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
