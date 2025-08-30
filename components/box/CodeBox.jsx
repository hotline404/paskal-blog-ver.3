'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div className="bg-cyan-300 clear-left w-[80%] p-0.5">
      <p>{props.code}</p>
    </div>
  )
}

export default CodeBox
