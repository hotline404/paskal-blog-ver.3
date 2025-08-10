"use client";

import React from 'react';
import useStore from './state';

function Provider({ children, data }) {


  const {initialDatani, initialize} = useStore();

  initialize(data);
  console.log("stored data in initialData", initialDatani);
  
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
