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

  function addCard(cardName: string) {}

  function addTask(taskName: string, cardId: string) {
    setCards([
      ...cards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            tasks: [
              ...card.tasks,
              {
                taskTitle: taskName,
                id: uuidv4(),
              },
            ],
          };
        } else {
          return card;
        }
      }),
    ]);
  }

  function deleteTaskFromCard(cardId: string, taskId: string) {
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

  function deleteCard(cardId: string) {
    console.log("!");
    setCards([...cards.filter((card) => card.id !== cardId)]);
  }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((item) => (
          <Card
            key={item.id}
            cardId={item.id}
            title={item.title}
            tasks={item.tasks}
            deleteCard={deleteCard}
            deleteTaskFromCard={deleteTaskFromCard}
            addTask={addTask}
          />
        ))}
      </ul>
      <AddButton title={"Добавить еще одну колонку"} addItem={addCard} />
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
