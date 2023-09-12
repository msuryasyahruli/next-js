import axios from "axios";
import React, { useEffect, useState } from "react";

const Skill = () => {
  //get skill
  let [skill, setSkill] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/skill`)
      .then((res) => {
        setSkill(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="d-flex">
        {skill.map((skill, index) => (
          <div
            key={index}
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
      </div>
    </div>
  );
};

export default Skill;
