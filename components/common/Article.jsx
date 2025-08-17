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

  console.log("blocks", blocks[11].image.file.url);
  return (
    <div>
      {blocks ? (
        blocks?.map((item) => {
          switch (item.type) {
            case "paragraph":
              return (
                <p>{item.paragraph.rich_text[0].text.content}</p>
              );
            case "image":
              return (
                <img src={l} alt="포스트 이미지" />
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
