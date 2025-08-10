"use client";

import React, { useEffect } from 'react';
import useStore from './state';

function Provider({ children, data }) {


  const {initialData, initialize} = useStore();
  data.then(data => initialize(data));

  

  
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
