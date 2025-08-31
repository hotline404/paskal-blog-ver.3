"use client"
import React from 'react'

function ProjectList(props) {
  //console.log('ProjectList', props.data.then((data) => {return data}));
  return (
    <div>
      {props.data?.then((data) => {return data})}
    </div>
  )
}

export default ProjectList
