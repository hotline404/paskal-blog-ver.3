import React from "react";
import List from "../common/List";
import { mixtureStyle } from "../style/mixture/mixture";

function ListBox() {

    const selectHander = (id) => {
      console.log("select hander", id)
    }
    
    
  return (
    <div
      className={mixtureStyle.postListBox}
    >
      <List onClick={selectHander}/>
    </div>
  );
}

export default ListBox;
