"use client";

import React from 'react';
import useStore from './state';

function Provider({ children, data }) {


  const {initialData, initialize} = useStore();

  initialize(data);
  console.log("stored data in initialData", initialData);
  
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
