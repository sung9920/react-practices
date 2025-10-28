import React from "react";
import data from "./assets/json/data.js";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import TabView from "./TabView.js";
import Tabs from "./Tabs.js";

/* <Tabs tabs={data} /> */
function TabBox() {
  return (
    <div className={Tab_Box}>
      <Tabs data={data} />
      <TabView />
    </div>
  );
}

export default TabBox;
