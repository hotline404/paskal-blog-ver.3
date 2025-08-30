"use client";
import React, { useEffect, useState } from "react";
import CodeBox from "../box/CodeBox";

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
      {blocks == undefined ? (
        <div>Loading...</div>
      ) : (
        blocks?.map((item) => {
          switch (item.type) {
            case "heading_2":
              return (
                <h2 className="italic font-bold text-blue-500">
                  {`> ${item.heading_2.rich_text[0].text.content}`}
                </h2>
              );
            case "numbered_list_item":
              return <p>{item.numbered_list_item.rich_text[0].text.content}</p>;

            case "image":
              return (
                <img
                  className="h-80 w-100 object-contain"
                  src={item.image.file.url}
                  alt="포스트 이미지"
                />
              );

              case "code":
                return <CodeBox code={item.code.rich_text[0].text.content}/>;
            default:
              return (
                <p>
                  {item.paragraph.rich_text.length === 0 ? (
                    <br></br>
                  ) : (
                    item.paragraph.rich_text[0].text.content
                  )}
                </p>
              );
          }
        })
      )}
    </div>
  );
}

export default Article;
