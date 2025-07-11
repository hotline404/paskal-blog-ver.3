import React from 'react'
//리스트 캡슐화하기

function List(props) {
  return (
    <ol className="flex">
      {props.lists.map((list) => {
        return (
          <li className="outline-[#31302B] outline-[5px] rounded-[10px] " key={list.post_id}>
            <h1>{list.title}</h1>
            <p>{list.date}</p>
          </li>
        )
      })}
    </ol>
  )
}

export default List;
