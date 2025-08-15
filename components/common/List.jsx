"use client";
import React from "react";
import { mixtureStyle } from "../style/mixture/mixture";
import { useRouter } from "next/navigation";
import useStore from "@/store/state";

//리스트 캡슐화하기
//x축 800px부터는 미디어 쿼리 적용하기
//클라이언트
function List({ onClick }) {
  const router = useRouter();

  const initialData = useStore((state) => state.initialData);
  const listDatas = initialData;

  const onClickHandler = (title, id) => {
    router.push(`/${title}`);
    onClick(id);
  };

  return (
    <ol className={mixtureStyle.postList}>
      {listDatas.map((list) => {
        return (
          <li key={list.id} onClick={() => onClickHandler(list.title, list.id)}>
            <p>{list.icon}</p>
            <h1>{list.title}</h1>
            <p>{list.date.date.start}</p>
          </li>
        );
      })}
    </ol>
  );
}

export default List;
