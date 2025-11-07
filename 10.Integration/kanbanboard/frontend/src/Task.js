import React, { useEffect, useState } from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";
import axios from "axios";

function Task({ no, name, done, deleteTask }) {
  const [isDone, setIsDone] = useState(done);

  useEffect(() => {
  }, [done]);

  const updateTask = async (newValue) => {
    try {
      const res = await axios.put(`/api/task/${no}?done=${newValue}`);
      if (res.data.result === "fail") {
        throw new Error(res.data.message);
      }
      console.log(res.data.data);
    } catch (err) {
         console.error(err);
    }
  };

  return (
    <li className={_Task}>
      <input
        type="checkbox"
        checked={isDone === "Y"}
        onChange={() => {
          const newValue = isDone === "Y" ? "N" : "Y";
          setIsDone(newValue);
          updateTask(newValue);
        }}
      />
      {" " + name + " "}
      <a href="#" className={Task_Remove} onClick={(e) => {
        e.preventDefault();
        deleteTask(no)}}
      >
      </a>
    </li>
  );
}

export default Task;
