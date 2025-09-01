"use client";
import React, {useState, useEffect} from "react";


function SkillInfo({ data, test }) {
  const [state, setState] = useState(null)
  data.then((e) => setState(e))
  useEffect(() => {
  console.log("???", state);
  }, [setState])

  return (
    <div>
      {/* {skills?.map((item) => {
        return (
          <img
            src={`https://img.shields.io/badge/-${item}-red?logo=${item}`}
            alt={`${item} 로고`}
          />
        );
      })} */}asd
    </div>
  );
}

export default SkillInfo;

//https://img.shields.io/badge/-javascript-red?logo=react
