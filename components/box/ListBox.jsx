import React from 'react'
import List from '../common/List'

const lists = [
  {
    title: "개지리는 포스트 1",
    post_id: "i_1223454121",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 2",
    post_id: "i_12234542121",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 3",
    post_id: "i_12234543121",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 4",
    post_id: "i_12234541241",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 5",
    post_id: "i_12234541251",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 6",
    post_id: "i_12234541261",
    date: "2023.04.12"
  },
]

function ListBox() {
  return (
    <div>
      <List lists={lists}/> 
    </div>
  )
}

export default ListBox
