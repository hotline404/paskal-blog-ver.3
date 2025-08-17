"use client";
import React from "react";

function Article({ data }) {
  const items = data.then((items) => {
    return items;
  });
  return (
    <div>
      {!items ? (
        items.map((item) => {
          return <div>{item.paragraph.rich_text[0]}</div>;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Article;
