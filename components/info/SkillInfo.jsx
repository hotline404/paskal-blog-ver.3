'use client'
import React from 'react'

function SkillInfo(props) {
  const skills = props.data.then(data => {return data.skills});
  return props.data.value ? (
    <div>
      {skills?.map((item) => {
        <img src={`https://img.shields.io/badge/-${item}-red?logo=${item}`} alt={`${item} 로고`} />
      })}
    </div>
  ) : <></>
}

export default SkillInfo

//https://img.shields.io/badge/-javascript-red?logo=react