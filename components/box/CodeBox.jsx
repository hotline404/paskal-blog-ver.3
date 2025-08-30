'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div className="bg-cyan-300 clear-left px-0.5 rounded-3xl">
      <p className='italic mx-2'>{props.code}</p>
    </div>
  )
}

export default CodeBox
