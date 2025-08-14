// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
import Provider from "@/store/Provider.jsx";
const { getNotion, getPost } = require("../API/service.js");
require("dotenv").config();

export const dynamic = "force-dynamic";
export const metadata = { title: "* p a s k a l ' s   b l o g *", description: "루트 페이지" };

// zustand store list 컴포넌트에 넣기 'use client'로 해서 넣어야 함
async function run() {

  try {
    const res = await getNotion();

    await getPost("2451600f02ad8078bd65c94c1e16f05e");
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
