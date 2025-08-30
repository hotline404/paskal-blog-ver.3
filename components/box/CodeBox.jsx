'use client'
import React from 'react'

function CodeBox(props) {
  return (
    <div>
      <p className='italic m-2 tracking-wider bg-gray-400 text-orange-500 clear-left px-0.5 rounded-[6px]'>{props.code}</p>
    </div>
  )
}

export default CodeBox
