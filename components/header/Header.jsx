import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
const Header = () => {
  return (
    <div className={mixtureStyle.header}>
      <TitleBox>
        PASKAL
      </TitleBox>
        <SearchBox >
          <input />
        </SearchBox>
      
    </div>
  )
};

export default Header