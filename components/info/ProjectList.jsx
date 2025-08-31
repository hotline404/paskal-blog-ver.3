"use client"
import React from 'react'

function ProjectList(props) {
  return (
    <div>
      {props.data?.map((e) => {
        return <a href={e}>{e}</a>
      })}
    </div>
  )
}

export default ProjectList
