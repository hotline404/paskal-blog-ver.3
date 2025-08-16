'use client'
import React from 'react'

function Article({ data }) {
  return (
    <div>
      {data.map((item) => {
        if (item.type === 'paragraph') {
          return (
            <p>{item.paragraph.rich_text}</p>
          )
        } else if (item.type === 'image') {
          return (
            <img src={item.image.file} alt='test'></img>
          )
        }
      })}
    </div>
  )
}

export default Article;
