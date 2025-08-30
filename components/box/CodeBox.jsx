'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div className="bg-cyan-300 clear-left px-0.5 rounded-[1px]">
      <p className='italic m-2'>{props.code}</p>
    </div>
  )
}

export default CodeBox
