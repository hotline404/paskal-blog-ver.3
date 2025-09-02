"use client"

import React from 'react'
import { mixtureStyle } from '../style/mixture/mixture'

function TitleBox(props) {
  return (
    <div className={mixtureStyle.titleBox}>
      {props.children}
    </div>
  )
}

export default TitleBox
