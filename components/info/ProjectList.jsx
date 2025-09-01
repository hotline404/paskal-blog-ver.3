"use client"
import React, { useState, useEffect } from 'react'

function ProjectList({ data }) {
  const [ state, setState ] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e))
  }, [state]) 
  return (
    <div>
      {state?.projects.map((item, index) => {
        return <a href={`https://github.com/${item}`} target='_blank'>{`project ${index} : ${item}`}</a>
      })}
    </div>
  )
}

export default ProjectList
//https://github.com/