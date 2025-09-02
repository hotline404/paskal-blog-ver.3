"use client";
import React, { useState, useEffect } from "react";

function CommonInfo({ data }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);

  return (
    <ol className="justify-center items-center">
        <li id={Math.random()}>Name : {state?.common[0]}</li>
        <li id={Math.random()}>E-mail : {state?.common[1]}</li>
        <li id={Math.random()}>github : {state?.common[2]}</li>
    </ol>
  );
}

export default CommonInfo;
