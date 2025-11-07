import React, { useEffect, useState } from "react";
import data from "./assets/json/data";
import { Kanban_Board } from "./assets/scss/KanbanBoard.scss";
import CardList from "./CardList";
import axios from "axios";


function KanbanBoard() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const res = await axios.get("/api/card");
      if (res.data.result === "fail") {
        throw new Error(res.data.message);
      }
      setCards(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className={Kanban_Board}>
      <CardList
        key={"To Do"}
        title={"To Do"}
        cards={cards.filter((card) => card.status === "ToDo")}
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
