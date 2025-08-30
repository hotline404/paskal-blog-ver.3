'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div className="bg-cyan-300 clear-left w-[100%]">
      <p>{props.code}</p>
    </div>
  )
}

export default CodeBox
