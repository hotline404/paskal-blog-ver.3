"use client";
import React, { useState, useEffect } from "react";

function SnsList({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);
  return (
    <div>
      {state?.sns.map((item) => {
        return <li id={Math.random()}>
          <a href={item}>{item}</a>
        </li>;
      })}
    </div>
  );
}

export default SnsList;
