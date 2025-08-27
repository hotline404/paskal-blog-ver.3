import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
import Provider from "@/store/Provider";
import { submit } from "../serverAction/submit";

const Header = () => {
  //input component 하위에서 캡슐화시켜야 함
  //비즈니스 컴포넌트 분리
  return (
    <div className={mixtureStyle.header}>
      <TitleBox>* P a s k a l *</TitleBox>
      <SearchBox>
        <Provider />
        <form action={submit}>
          <input name='검색' type="text" id='search' placeholder="search.." />
          <button type="submit">검색</button>
        </form>
      </SearchBox>
    </div>
  );
};

export default Header;

// <Input
//             input={{
//               name: "검색",
//               type: "search",
//               id: "search",
//               placeholder: "search...",
//             }}
//           />