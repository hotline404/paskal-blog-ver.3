"use client";
import React, { useEffect, useState } from "react";

function Article({ data }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    data.then((items) => {
      console.log("items", items);
      setBlocks([items]);
      return items;
    });

  }, [setBlocks]);

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
