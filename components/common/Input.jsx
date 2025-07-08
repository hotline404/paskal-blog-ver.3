import React from "react";

function Input({ input, onChange }) {
  return (
      <input onChange={onChange} {...input} />
  );
}

export default Input;
// input={{
//               name: "비밀번호",
//               type: "password",
//               id: "passwordIsValid",
//               placeholder: "비밀번호를 입력하세요",
//             }}
