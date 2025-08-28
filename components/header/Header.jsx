"use client";
import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
import submitForm from "../serverAction/submitForm";
import { useFormState } from "react-dom";
import { useEffect } from "react";


export default function Header() {

  const [state, formAction] = useFormState(submitForm, "");

  // useEffect(() => {
  //   console.log("state is ", state)
  // }, [fromState])


  return (
    <div className={mixtureStyle.header}>
      <TitleBox>* P a s k a l *</TitleBox>
      <SearchBox>
        <form className="w-[100%] flex justify-end" action={formAction}>
          <Input
            input={{
              name: "검색",
              type: "search",
              id: "search",
              placeholder: "search...",
            }}
          />
          <button className="hidden" type="submit">
            검색
          </button>
        </form>
      </SearchBox>
    </div>
  );
}
