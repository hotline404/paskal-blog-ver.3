"use client";
import React, { useState, useEffect } from "react";

function CommonInfo({ data }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    data.then((e) => setState(e));
    console.log("state common", state);
  }, [state]);

  return (
    <ol>
      {state?.common.map((item) => {
        return <li id={Math.random()}>{item}</li>;
      })}
    </ol>
  );
}

export default CommonInfo;
