import React from 'react'

function PostList({ data }) {
  return (
    <div>
      {data ? data.map( (list)=> {
        return (
          <li>{list.title}</li>
        )
      }) : <></>}
    </div>
  )
}

export default PostList
