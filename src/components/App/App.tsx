import { useState } from "react";
import AddButton from "../AddButton/AddButton";
import Card from "../Card/Card";
import "./App.scss";

function App() {
  const [cards, setCards] = useState<typeof Card[]>([
    <Card title={"Планы на месяц"} />,
    <Card title={"Планы на день"} />,
  ]);

  function addCard() {
    // setCards([...cards, <Card title="f" />]);
  }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((item, index) => (
          <Card key={index} title={"Планы"} />
        ))}
      </ul>
      <AddButton title={"Добавить еще одну колонку"} onClickFunc={addCard} />
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
