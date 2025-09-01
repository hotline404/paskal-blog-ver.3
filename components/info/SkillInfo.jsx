"use client";
import React from "react";

function SkillInfo({data}) {
  
  console.log("???", data.then((e) => {return e}));
  return (
    <div>
      {/* {skills?.map((item) => {
        return (
          <img
            src={`https://img.shields.io/badge/-${item}-red?logo=${item}`}
            alt={`${item} 로고`}
          />
        );
      })} */}{
        res
      }
    </div>
  );
}

export default SkillInfo;

//https://img.shields.io/badge/-javascript-red?logo=react
