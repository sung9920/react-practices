import React, { useState } from "react";
import data from "./assets/json/data.js";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import TabView from "./TabView.js";
import Tabs from "./Tabs.js";

function TabBox() {
  const [active, setActive] = useState(true);

  const selectTab = (no) => {
    console.log(no);
  };

  return (
    <div className={Tab_Box}>
      <Tabs selectTab={selectTab} data={data.map((item, index) => ({
        no: item.no,
        name: item.name,
        active: index === active
      }))} />
      <TabView />
    </div> 
  );
}

export default TabBox;
