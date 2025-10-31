import React, { useState } from "react";
import data from "./assets/json/data.js";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import TabView from "./TabView.js";
import Tabs from "./Tabs.js";
function TabBox() {
  const [active, setActive] = useState(data[0].no);
  const selectTab = (no) => {
    setActive(no);
  };
  const tabData = data.map((item) => ({
    ...item,
    active: item.no === active,
  }));
  return (
    <div className={Tab_Box}>
      <Tabs selectTab={selectTab} data={tabData} />
      <TabView contents={data.find((item) => item.no === active).contents} />
    </div>
  );
}
export default TabBox;