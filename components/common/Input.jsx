"use client"
import React from "react";

function Input({ input, onChange }) {
  return (
      <input onChange={onChange} {...input} />
  );
}

export default Input;
