import React, { useState } from "react";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";
import TaskList from "./TaskList";

function Card({ title, description, tasks }) {
  const [isShowDetails, setIsShowDetails] = useState(true);
  return (
    <div className={_Card}>
      <div
        className={[Card_Title, isShowDetails && Card_Title_Open].join(" ")}
        onClick={() => setIsShowDetails(!isShowDetails)}>
        {title}
      </div>
      <p>{description}</p>
      {isShowDetails && (
        <div className="Card_Details">
          <TaskList tasks={tasks} />
        </div>
      )}
    </div>
  );
}

export default Card;
