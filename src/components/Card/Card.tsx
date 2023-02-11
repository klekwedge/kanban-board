import { useState } from "react";
import { ICard, ITask } from "../../types/types";
import AddButton from "../AddButton/AddButton";
import Task from "../Task/Task";
import "./Card.scss";

interface CardProps {
  card: ICard;
  deleteTaskFromCard: (cardId: string, taskId: string) => void;
  deleteCard: (cardId: string) => void;
  addTask: (taskName: string, cardId: string) => void;
  changeCards: () => void;
}

function Card({
  card,
  deleteTaskFromCard,
  deleteCard,
  addTask,
  changeCards
}: CardProps) {
  function deleteTask(taskId: string) {
    deleteTaskFromCard(card.id, taskId);
  }

  function deleteCardEvent(cardId: string) {
    deleteCard(cardId);
  }

  function addTaskEvent(taskName: string) {
    addTask(taskName, card.id);
  }
  //
  //
  //
  //
  //

  // курсор мыши наведен на элемент при перетаскивани
  function dragOverHandler(e) {
    e.preventDefault();

    if (e.target.className.includes("card__item")) {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }

  // происходит drop элемента.
  function dropCardHandler(e, board) {
    if (!e.target.className.includes("item")) {
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      // currentBoard.items.splice(currentIndex, 1)

      // setBoards(
      //   boards.map((item) => {
      //     if (item.id === board.id) {
      //       return board;
      //     }
      //     if (item.id === currentBoard.id) {
      //       return currentBoard;
      //     }
      //     return b;
      //   })
      // );
      e.target.style.boxShadow = "none";
    }
  }

  const board = 1;

  return (
    <li
      className="app__card card"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHandler(e, board)}
    >
      <div className="card__heading">
        <h2>{card.title}</h2>
        <img
          src="/public/svg/close.svg"
          onClick={() => deleteCardEvent(card.id)}
        />
      </div>

      <div className="card__tasks">
        <ul className="card__list">
          {card.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              card={card}
              changeCards={changeCards}
            />
          ))}
        </ul>
      </div>
      <AddButton title={"Добавить еще одну карточку"} addItem={addTaskEvent} />
    </li>
  );
}

export default Card;
