"use client"
import React, { useState, useEffect } from 'react'

function ProjectList({ data }) {
  const [ state, setState ] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e))
  }, [state]) 
  return (
    <ol className='flex-col'>
      {state?.projects.map((item, index) => {
        return <li id={Math.random()}><a href={`https://github.com/${item}`} target='_blank'>{`project ${index + 1} : ${item}`}</a></li>
      })}
    </ol>
  )
}

export default ProjectList