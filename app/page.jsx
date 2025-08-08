// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
import useStore from "@/store/state.js";
import { useSyncExternalStore } from 'react';

console.log('useSyncExternalStore:', useSyncExternalStore);

const getNotion = require("../API/service.js");
require("dotenv").config();

export const dynamic = "force-dynamic";
export const metadata = { title: "홈", description: "루트 페이지" };

async function run() {
  const { initialData, initialize } = useStore();

  const addNewPost = (data) => {
    initialize(data);

    //데이터 정리해서 넣기
    console.log("addNwePost", initialData)
  }


  try {
    const res = await getNotion();

    addNewPost(res);
    console.log("요청 성공");

    return res;
  } catch (error) {
    console.log("get error", error);
  }
}

function Home() {
  run()
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
