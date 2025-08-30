'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div className="bg-gray-400 text-orange-500 clear-left px-0.5 rounded-[6px]">
      <p className='italic m-2'>{props.code}</p>
    </div>
  )
}

export default CodeBox
