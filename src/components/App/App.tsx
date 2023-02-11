import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../AddButton/AddButton";
import Card from "../Card/Card";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { addCard } from "../../slices/kanbanSlice/kanbanSlice";

function App() {
  const { cards } = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  function addCardEvent(cardName: string) {
    dispatch(addCard(cardName));
  }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <AddButton title={"Добавить еще одну колонку"} addItem={addCardEvent} />
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
