"use client";
import React, { useEffect, useState } from "react";

function Article({ data }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const items = data.then((items) => {
      console.log("items", items)
      return items;
    });
    setBlocks([items]);

    console.log("blocks, in the Article", blocks);
  }, [items]);



  console.log("blocks", blocks);
  return (
    <div>
      {blocks ? (
        blocks.map((item) => {
          console.log("debug in item", item);
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Article;
