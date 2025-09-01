import React from "react";

function SkillInfo(props) {
  const skills = props.data.then((data) => {
    return data.skills;
  });
  console.log("???", skills);
  return (
    <div>
      {skills.map((item) => {
        return (
          <img
            src={`https://img.shields.io/badge/-${item}-red?logo=${item}`}
            alt={`${item} 로고`}
          />
        );
      })}
    </div>
  );
}

export default SkillInfo;

//https://img.shields.io/badge/-javascript-red?logo=react
