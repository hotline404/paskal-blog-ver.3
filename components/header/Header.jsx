import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
import { getSearchQuery } from "@/API/service";

export default function Header () {
  //input component 하위에서 캡슐화시켜야 함
  //비즈니스 컴포넌트 분리

async function submitForm(formData) {
    'use server'; // Marks this function as a Server Action
    const query = formData.get('검색');
    // Process data on the server, e.g., save to database
    console.log('Submitted query is', query);

    const res = await getSearchQuery(query);
    console.log("search api res is ", res);
  }

  return (
    <div className={mixtureStyle.header}>
      <TitleBox>* P a s k a l *</TitleBox>
      <SearchBox>
        <form className="w-[100%] flex justify-end" action={submitForm}>
          <Input
            input={{
              name: "검색",
              type: "search",
              id: "search",
              placeholder: "search...",
            }}
          />
          <button className="hidden" type="submit">검색</button>
        </form>
      </SearchBox>
    </div>
  );
};



// app/page.js
// export default function Header() {
//   async function submitForm(formData) {
//     'use server'; // Marks this function as a Server Action
//     const name = formData.get('검색');
//     // Process data on the server, e.g., save to database
//     console.log('Submitted name:', name);
//   }

//   return (
//     <form action={submitForm}>
//       <Input
//             input={{
//               name: "검색",
//               type: "search",
//               id: "search",
//               placeholder: "search...",
//             }}
//           />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }