'use client'
import React from 'react'

function CommonInfo(props) {
  console.log('CommonInfo', props.data.filter((e) => e.key === "common"));

  return (
    <div>
      CommonInfo
    </div>
  )
}

export default CommonInfo
