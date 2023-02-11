import { useEffect, useState } from "react";
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

  function deleteTaskFromCard(cardId: string, taskId: string) {
    console.log(cards[0]);
    console.log(cardId);

    setCards([
      ...cards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            tasks: card.tasks.filter((task) => task.id !== taskId),
          };
        } else {
          return card;
        }
      }),
    ]);
  }

  // function deleteCard(cardId: string) {
  //   setCards([...cards.filter((card) => card.id !== cardId)]);
  // }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((item) => (
          <Card
            key={item.id}
            cardId={item.id}
            title={item.title}
            tasks={item.tasks}
            deleteTaskFromCard={deleteTaskFromCard}
          />
        ))}
      </ul>
      <AddButton title={"Добавить еще одну колонку"} />
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
