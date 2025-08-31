"use client"
import React from 'react'

function ProjectList(props) {
  console.log('ProjectList', props.data?.filter((e) => e.key === "projects"));
  return (
    <div>
      ProjectList
    </div>
  )
}

export default ProjectList
