// import { mixtureStyle } from "../style/mixture/mixture";
// import TitleBox from "../box/TitleBox";
// import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
// import Provider from "@/store/Provider";
// import { submit } from "../serverAction/submit";

// const Header = () => {
//   //input component 하위에서 캡슐화시켜야 함
//   //비즈니스 컴포넌트 분리

//   async function submitform(formData) {
//     "use server";
//     try {
//       const data = formData.get("검색");
//       console.log("handle submit test", data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className={mixtureStyle.header}>
//       <TitleBox>* P a s k a l *</TitleBox>
//       <SearchBox>
//         <Provider />
//         <form action={submitform}>
//           <Input
//             input={{
//               name: "검색",
//               type: "search",
//               id: "search",
//               placeholder: "search...",
//             }}
//           />
//           <button type="submit">검색</button>
//         </form>
//       </SearchBox>
//     </div>
//   );
// };

// export default Header;


// app/page.js
export default function Header() {
  async function submitForm(formData) {
    'use server'; // Marks this function as a Server Action
    const name = formData.get('검색');
    // Process data on the server, e.g., save to database
    console.log('Submitted name:', name);
  }

  return (
    <form action={submitForm}>
      <Input
            input={{
              name: "검색",
              type: "search",
              id: "search",
              placeholder: "search...",
            }}
          />
      <button type="submit">Submit</button>
    </form>
  );
}