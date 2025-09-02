"use client"

import React from 'react'
import { mixtureStyle } from '../style/mixture/mixture'
import { useRouter } from "next/navigation";


function TitleBox(props) {
    const router = useRouter();
  
  return (
    <div className={mixtureStyle.titleBox} onClick={() => {router.push('/info')}}>
      {props.children}
    </div>
  )
}

export default TitleBox
