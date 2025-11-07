import React, { useState } from "react";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";
import TaskList from "./TaskList";
import axios from "axios";


function Card({ no, title, description }) {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`/api/task/${no}`);
      if (res.data.result === "fail") {
        throw new Error(res.data.message);
      }
      setTasks(res.data.data);
      setIsShowDetails(!isShowDetails)
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={_Card}>
      <div
        className={[Card_Title, isShowDetails && Card_Title_Open].join(" ")}
        onClick={fetchTasks}
      >
        {title}
      </div>
      <p>{description}</p>
      {isShowDetails && (
        <div className="Card_Details">
          <TaskList cardNo={no} cardTasks={tasks} />
        </div>
      )}
    </div>
  );
}

export default Card;
