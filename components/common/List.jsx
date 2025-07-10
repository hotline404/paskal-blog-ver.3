import React from 'react'
//리스트 캡슐화하기

function List(props) {
  return (
    <ol>
      {props.lists.map((list) => {
        return (
          <li key={list.post_id}>
            <h1>{list.title}</h1>
            <p>{list.date}</p>
          </li>
        )
      })}
    </ol>
  )
}

export default List;
