// 루트 페이지 크기 및 페이지 색상
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";

export default function Home() {
  const homePageStyle = mixtureStyle;
  return (
    <div className={homePageStyle.base_note}>
      <MainBox BoxAttribute={homePageStyle.page}>
        <Header />
        <ListBox />
      </MainBox>
    </div>
  );
}
