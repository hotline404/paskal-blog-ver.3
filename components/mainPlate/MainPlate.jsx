import React from 'react'
import PostList from './PostList'

const data = [
  {
    ha: "afdfsf",
    af: "asdsf",
    asd: "1234"
  },
  {
    ha: "afd4sf",
    af: "asdgf",
    asd: "12345"
  },
  {
    ha: "afd5sf",
    af: "asdjf",
    asd: "12346"
  },
]

function MainPlate() {
  return (
    <div>
      MainPlaite vamos
      <PostList data={data}/>
    </div>
  )
}

export default MainPlate
