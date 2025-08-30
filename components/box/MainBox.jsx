"use client"
const MainBox = (props) => {
  return (
    <div className={`flex justify-center items-center ${props.BoxAttribute}`}>
      {props.children}
    </div>
  )
}

export default MainBox;