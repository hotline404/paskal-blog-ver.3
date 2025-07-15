import React from 'react'
import List from '../common/List'

//비즈니스 컴포넌트로 씀
//zustand에서 lists를 불러올 것
//필터링이 검색에서 바로바로 연동이 될 것 => 최적화 필요

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
  {
    title: "개지리는 포스트 7",
    post_id: "i_122345417261",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 8",
    post_id: "i_122345412618",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 9",
    post_id: "i_192234541261",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 10",
    post_id: "i_122345411261",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 11",
    post_id: "i_1223411541261",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 12",
    post_id: "i_1223451241261",
    date: "2023.04.12"
  },
  {
    title: "개지리는 포스트 13",
    post_id: "i_1223413541261",
    date: "2023.04.12"
  },

]

function ListBox() {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center mt-[70px] px-[20px] overflow-scroll overflow-x-hidden">
      <List lists={lists}/> 
    </div>
  )
} 

export default ListBox
