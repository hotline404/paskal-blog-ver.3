'use client'
import React from 'react'

function SkillInfo(props) {
  console.log('SkillInfo', props.data.value);
  return props.data.value ? (
    <div>
      {props.data.value.skills?.map((item) => {
        <img src={`https://img.shields.io/badge/-${item}-red?logo=${item}`} alt={`${item} 로고`} />
      })}
    </div>
  ) : <></>
}

export default SkillInfo

//https://img.shields.io/badge/-javascript-red?logo=react