"use client";
import React, { useState, useEffect } from "react";

function SkillInfo({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);

  return (
    <div className="">
      {state?.skills.map((item) => {
        return (
          <img
            src={`https://img.shields.io/badge/-${item}-transparent?logo=${item}&logoColor=white`}
            alt={`${item} 로고`}
            className="mb-3 mr-3 w-65 h-20"
          />
        );
      })}
      
    </div>
  );
}

export default SkillInfo;

//https://img.shields.io/badge/-javascript-red?logo=react
