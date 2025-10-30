import React from "react";
import TabItem from "./TabItem";
import "./assets/scss/Tabs.scss";

function Tabs({selectTab, data }) {
  console.log(data);
  return (
    <ul>
      {data.map((item) => (
        <TabItem key={item.no} no={item.no} name={item.name} selectTab={selectTab} />
      ))}
    </ul>
  );
}

export default Tabs;
