import React from "react";
//리스트 캡슐화하기

function List(props) {
  return (
    <ol className="flex w-[100%] flex-wrap justify-center items-center">
      {props.lists.map((list) => {
        return (
          <li
            className="outline-[#31302B] outline-[5px] rounded-[10px] w-[calc(90%/3)] mx-[10px] my-[10px] p-[10px]"
            key={list.post_id}
          >
            <h1 className="font-bold">{list.title}</h1>
            <p className="">{list.date}</p>
          </li>
        );
      })}
    </ol>
  );
}

export default List;
