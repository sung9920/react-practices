import React from "react";
import TabItem from "./TabItem";
import "./assets/scss/Tabs.scss";

function Tabs({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((item) => (
        <TabItem key={item.no} name={item.name} />
      ))}
    </ul>
  );
}

export default Tabs;
