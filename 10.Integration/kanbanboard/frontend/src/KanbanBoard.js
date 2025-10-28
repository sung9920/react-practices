import React from "react";
import data from "./assets/json/data";
import { Kanban_Board } from "./assets/scss/KanbanBoard.scss";
import CardList from "./CardList";

function KanbanBoard() {
  return (
    <div className={Kanban_Board}>
      <CardList
        key={"To Do"}
        title={"To Do"}
        cards={data.filter((card) => card.status === "ToDo")}
      />
      <CardList
        key={"Doing"}
        title={"Doing"}
        cards={data.filter((card) => card.status === "Doing")}
      />
      <CardList
        key={"Done"}
        title={"Done"}
        cards={data.filter((card) => card.status === "Done")}
      />
    </div>
  );
}

export default KanbanBoard;
