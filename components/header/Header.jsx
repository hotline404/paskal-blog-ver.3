"use client";
import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
import submitForm from "../serverAction/submitForm";
import { useFormState } from "react-dom";

const initFormState = null

export default function Header() {

  const [state, fromState] = useFormState(submitForm, initFormState);
  console.log('form state is ', state.then(data => {return data}));

  // async function submitForm(formData) {
  //   "use server";
  //   const query = formData.get("검색");

  //   console.log("Submitted query is", query);
  //   try {
  //     const res = await getSearchQuery(query);
  //     console.log("search api res is ", res);
  //     return res
  //   } catch (err) {
  //     console.error("error is ", err);
  //   }
  // }

  return (
    <div className={mixtureStyle.header}>
      <TitleBox>* P a s k a l *</TitleBox>
      <SearchBox>
        <form className="w-[100%] flex justify-end" action={fromState}>
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
