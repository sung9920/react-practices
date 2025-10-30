import React, { useState } from "react";
import { Tab_Item } from "./assets/scss/TabItem.scss";

function TabItem({ no, name, selectTab }) {

  return <li className={Tab_Item}>{name}</li>;
}

export default TabItem;