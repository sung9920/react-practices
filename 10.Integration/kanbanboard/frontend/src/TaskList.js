import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";
import axios from "axios";


function TaskList({ cardNo, cardTasks }) {
  const [tasks, setTasks] = useState(cardTasks);
  const [inputTask, setInputTask] = useState("");

  const addTask = async (task) => {
    try {
      const res = await axios.post(`/api/task?cardNo=${cardNo}`, task);
      if (res.data.result === "fail") {
        throw new Error(res.data.message);
      }
      console.log(res.data.data);
      setTasks([res.data.data, ...tasks]);
      setInputTask("");
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (no) => {
    try {
      const res = await axios.delete(`/api/task/${no}`);
      if (res.data.result === "fail") {
        throw new Error(res.data.message);
      }
      setTasks(tasks.filter((task) => task.no !== no))
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map((task) => (
          <Task key={task.no} no={task.no} name={task.name} done={task.done} deleteTask={deleteTask} />
        ))}
      </ul>
      <input
        className={Input_Add_Task}
        type="text"
        placeholder="태스크 추가"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            addTask({name: e.target.value , done: "N", cardNo: cardNo});
          }
        }}
      ></input>
    </div>
  );
}

export default TaskList;
