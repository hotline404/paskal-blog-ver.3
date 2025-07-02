// 루트 페이지 크기 및 페이지 색상
import { mixtureStyle } from "@/components/style/mixture/mixture";
export default function Home() {
  const homePageStyle = mixtureStyle;
  return (
    <div className={homePageStyle.base_note}>
      hello world!
    </div>
  );
}
