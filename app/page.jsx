// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
import Provider from "@/store/Provider.jsx";
const { getNotion, getNotionBlock } = require("../API/service.js");
require("dotenv").config();

export const dynamic = "force-dynamic";
export const metadata = { title: "홈", description: "루트 페이지" };

// zustand store list 컴포넌트에 넣기 'use client'로 해서 넣어야 함
async function run() {

  try {
    const res = await getNotion();
    const test = await getNotionBlock("2451600f02ad80e5b932c90add82d2ae");
    test.then(data => console.log("getNotionBlock in root page", data))
    return res;
  } catch (error) {
    console.log("get error", error);
  }
}

function Home() {
  const homePageStyle = mixtureStyle;
  return (
    <div className={homePageStyle.base_note}>
      <Provider data={run()}/>
      <MainBox BoxAttribute={homePageStyle.page}>
        <Header />
        <ListBox />
      </MainBox>
    </div>
  );
}

export default Home;
