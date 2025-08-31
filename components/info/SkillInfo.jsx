import React from 'react'

function SkillInfo(props) {
  console.log('SkillInfo', props.data?.filter((e) => e.key === "skills"));
  return (
    <div>
      this is skill info
    </div>
  )
}

export default SkillInfo
