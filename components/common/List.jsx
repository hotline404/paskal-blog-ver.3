import React from "react";
//리스트 캡슐화하기
//x축 800px부터는 미디어 쿼리 적용하기
function List(props) {
  return (
    <ol className="flex w-[100%] flex-wrap justify-start max-w-[800px] items-center mt-[200px] mb-[40px]">
      {props.lists.map((list) => {
        return (
          <li
            className="outline-[#31302B] outline-[5px] rounded-[10px] w-[calc(90%/3)] h-[80px] mx-[10px] my-[10px] p-[10px]"
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
