"use client";
import React, { useState, useEffect } from "react";

function SkillInfo({ data, test }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
    console.log("???", state);
  }, [state]);

  return (
    <div>
      {state.skills?.map((item) => {
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
