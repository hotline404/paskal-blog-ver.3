import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
const Header = () => {
  //input component 하위에서 캡슐화시켜야 함
  //비즈니스 컴포넌트 분리
  return (
    <div className={mixtureStyle.header}>
      <TitleBox>
        * P a s k a l *
      </TitleBox>
        <SearchBox >
          <Input input={{
            name: "검색",
            type: "search",
            id: "search",
            placeholder: "search...",
          }}/>
        </SearchBox>
      
    </div>
  )
};

export default Header