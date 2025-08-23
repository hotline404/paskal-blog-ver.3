"use client";
import React, { useEffect, useState } from "react";

function Article({ data }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    data.then((items) => {
      console.log("items", items);
      setBlocks(items);
      return items;
    });

  }, [setBlocks]);

  console.log("block", blocks);
  return (
    <div>
      {blocks ? (
        blocks?.map((item) => {
          switch (item.type) {
            default:
              return (
                <p>{item.paragraph.rich_text[0].text.content}</p>
              );
            case "image":
              return (
                <img src={item.image.file.url} alt="포스트 이미지" />
              )
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Article;
