"use client";
import React from "react";

function CodeBox(props) {
  return (
    <span className="bg-gray-600 text-orange-500 clear-left p-2 rounded-[6px] w-[50%] italic tracking-wide">
      {props.code}
    </span>
  );
}

export default CodeBox;
