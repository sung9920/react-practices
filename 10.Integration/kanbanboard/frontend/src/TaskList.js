import React from "react";
import Task from "./Task";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";

function TaskList({tasks}) {
  return (
    <div className={Task_List}>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} name={task.name} done={task.done} />
        ))}
      </ul>
      <input className={Input_Add_Task} type='text' placeholder='태스크 추가'></input>
    </div>
  );
}

export default TaskList;
