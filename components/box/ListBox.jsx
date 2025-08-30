"use client";
import React from "react";
import List from "../common/List";
import { mixtureStyle } from "../style/mixture/mixture";
import useStore from "@/store/state";

function ListBox() {
  const initialData = useStore((state) => state.initialData);
  const listDatas = initialData;

  return (
    <div className={mixtureStyle.postListBox}>
      <List lists={listDatas} />
    </div>
  );
}

export default ListBox;
