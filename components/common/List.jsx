import React from "react";
import { mixtureStyle } from "../style/mixture/mixture";
//리스트 캡슐화하기
//x축 800px부터는 미디어 쿼리 적용하기
function List(props) {
  return (
    <ol className={mixtureStyle.postList}>
      {props.lists.map((list) => {
        return (
          <li key={list.post_id}>
            <h1>{list.title}</h1>
            <p>{list.date}</p>
          </li>
        );
      })}
    </ol>
  );
}

export default List;
