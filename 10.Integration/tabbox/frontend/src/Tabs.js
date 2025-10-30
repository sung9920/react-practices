import React from "react";
import TabItem from "./TabItem";
import "./assets/scss/Tabs.scss";

function Tabs({selectTab, data }) {
  return (
    <ul>
      {data.map((item) => (
        <TabItem key={item.no} no={item.no} name={item.name} active={item.active} selectTab={selectTab} />
      ))}
    </ul>
  );
}

export default Tabs;
