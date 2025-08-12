"use client";

import React, { useEffect } from "react";
import useStore from "./state";

function Provider({ children, data }) {
  const { initialData, initialize } = useStore();

  useEffect(() => {
    data.then((datas) => datas.forEach(data => initialize(data)));
    console.log("initialData1", initialData);
  }, [initialize]);

  console.log("initialData2", initialData);

  return <div>{children}</div>;
}

export default Provider;
