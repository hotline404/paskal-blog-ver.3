"use client"
import React from 'react'
import { mixtureStyle } from '../style/mixture/mixture'

function SearchBox(props) {
  return (
    <div className={mixtureStyle.searchBox}>
      {props.children}
    </div>
  )
}

export default SearchBox
