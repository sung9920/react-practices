import React, { useState } from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ name, done }) {
  const [isDone, setIsDone] = useState(done);

  return (
    <li className={_Task}>
      <input
        type="checkbox"
        defaultChecked={isDone}
        onChange={(e) => {
          setIsDone(e.target.checked);
        }}
      />
      {" " + name + " "}
      <a href="#" className={Task_Remove}></a>
    </li>
  );
}

export default Task;
