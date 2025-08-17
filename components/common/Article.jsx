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
          console.log("debug in item", item);
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Article;
