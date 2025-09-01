"use client"
import React, { useState, useEffect } from 'react'

function ProjectList({ data }) {
  const [ state, setState ] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e))
  }, [state]) 
  return (
    <span className='flex-col'>
      {state?.projects.map((item, index) => {
        return <a href={`https://github.com/${item}`} target='_blank'>{`project ${index + 1} : ${item}`}</a>
      })}
    </span>
  )
}

export default ProjectList
//https://github.com/