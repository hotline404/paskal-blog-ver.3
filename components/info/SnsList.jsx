import React from 'react'

function SnsList(props) {
  console.log('SnsList', props.data?.filter((e) => e.key === "sns"));

  return (
    <div>
      this is sns
    </div>
  )
}

export default SnsList
