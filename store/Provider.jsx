"use client";

import React, { useEffect } from "react";
import useStore from "./state";

function Provider({ children, data }) {
  const { initialData, initialize } = useStore();

  useEffect(() => {
    data.then((data) => initialize(data));
    console.log("initialData", initialData);
  }, [initialize]);

  console.log("initialData", initialData);

  return <div>{children}</div>;
}

export default Provider;
