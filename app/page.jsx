// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
const getNotion = require("../API/test.js");
require("dotenv").config();

export const dynamic = "force-dynamic";
export const metadata = { title: "홈", description: "루트 페이지" };

async function run() {
  try {
    const res = await getNotion();
    console.log("res", res);
  } catch (error) {
    console.log("get error", error);
  }
}

function Home() {
  run()
  console.log("env file check", process.env.NOTION_KEY);
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

export default Home
