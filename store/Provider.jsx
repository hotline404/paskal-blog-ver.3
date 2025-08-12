"use client";

import React, { useEffect } from "react";
import useStore from "./state";

function Provider({ children, data }) {
  const { initialize } = useStore();

  useEffect(() => {
    data.then((datas) => datas.map((data) => initialize(data)));
  }, [initialize]);


  return <div>{children}</div>;
}

export default Provider;
