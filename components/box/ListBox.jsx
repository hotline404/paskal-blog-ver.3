"use client"
import React from "react";
import List from "../common/List";
import { mixtureStyle } from "../style/mixture/mixture";
import useStore from "@/store/state";

//비즈니스 컴포넌트로 씀
//zustand에서 lists를 불러올 것
//필터링이 검색에서 바로바로 연동이 될 것 => 최적화 필요


function ListBox() {
    const initialData = useStore(state => state.initialData);
    const listDatas = initialData;
    console.log("list datas", listDatas);
    
  return (
    <div
      className={mixtureStyle.postListBox}
    >
      <List lists={listDatas} />
    </div>
  );
}

export default ListBox;
