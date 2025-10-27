import React from "react";
import { _GroceryList } from "./assets/scss/GroceryList.scss";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
  return (
    <ol className={_GroceryList}>
      {groceries.map((item, index) => (
        <GroceryItem key={index} name={item.name} count={item.count} />
      ))}
    </ol>
  );
}

export default GroceryList;
