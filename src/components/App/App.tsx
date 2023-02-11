import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../AddButton/AddButton";
import Card from "../Card/Card";
import cardsData from "../../data";
import "./App.scss";
import { ICard } from "../../types/types";

function App() {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  // function addCard() {
  //   // setCards([...cards, <Card title="f" />]);
  // }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((item) => (
          <Card key={uuidv4()} title={item.title} tasks={item.tasks} />
        ))}
      </ul>
      <AddButton title={"Добавить еще одну колонку"} />
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
