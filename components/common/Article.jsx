"use client";
import React, { useEffect, useState } from "react";

function Article({ data }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    data.then((items) => {
      setBlocks(items);
      return items;
    });
  }, [setBlocks]);

  return (
    <div className="h-[100%] text-lg overflow-auto">
      {blocks ? (
        blocks?.map((item) => {
          switch (item.type) {
            case "heading_2": 
              return (
                <h2 className="italic font-bold">{item.heading_2.rich_text[0].text.content}</h2>
              )
            case "numbered_list_item":
              return (
                <p>
                  {item.numbered_list_item.rich_text[0].text.content}
                </p>
              );

            case "image":
              return <img className="h-80 w-100 object-cover" src={item.image.file.url} alt="포스트 이미지" />;
            default:
              return (
                <p>
                  {item.paragraph.rich_text.length === 0
                    ? <hr></hr>
                    : item.paragraph.rich_text[0].text.content}
                </p>
              );
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Article;
