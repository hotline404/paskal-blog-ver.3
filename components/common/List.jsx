"use client"
import React from "react";
import { mixtureStyle } from "../style/mixture/mixture";
import { useRouter } from "next/navigation";
import useStore from "@/store/state";


//리스트 캡슐화하기
//x축 800px부터는 미디어 쿼리 적용하기
function List(props) {
  const router = useRouter();
  

  const onClickHandler = () => {
    router.push('/items');


  };

  return (
    <ol className={mixtureStyle.postList}>
      {props.lists.map((list) => {
        return (
          <li key={list.id} onClick={() => router.push('/items')}>
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
