import { ICard } from "../../types/types";
import AddButton from "../AddButton/AddButton";
import Task from "../Task/Task";
import "./Card.scss";

import {
  deleteTaskFromCard,
  deleteCard,
  addTask,
  changeCards,
} from "../../slices/kanbanSlice/kanbanSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

interface CardProps {
  card: ICard;
}

function Card({ card }: CardProps) {
  const dispatch = useAppDispatch();
  const { cards, currentTask, currentCard } = useAppSelector(
    (state) => state.kanban
  );

  function deleteTask(taskId: string) {
    dispatch(
      deleteTaskFromCard({
        cardId: card.id,
        taskId: taskId,
      })
    );
  }

  function deleteCardEvent(cardId: string) {
    dispatch(deleteCard(cardId));
  }

  function addTaskEvent(taskName: string) {
    dispatch(addTask({ taskName: taskName, cardId: card.id }));
  }

  // курсор мыши наведен на элемент при перетаскивани
  const dragOverHandler: React.DragEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();

    if (e.target.className.includes("card__item")) {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  };


  // происходит drop элемента.
  const dropCardHandler: React.DragEventHandler<HTMLLIElement> = (e) => {
    if (!e.target.className.includes("item") && currentCard && currentTask && card.id !== currentCard.id) {
      const newBoard = JSON.parse(JSON.stringify(card));
      const oldBoard = JSON.parse(JSON.stringify(currentCard));

      const currentIndex = currentCard.tasks.indexOf(currentTask);

      newBoard.tasks.push(currentTask);
      oldBoard.tasks.splice(currentIndex, 1);

      dispatch(
        changeCards(
          cards.map((cardItem) => {
            if (cardItem.id === card.id) {
              return newBoard;
            }
            if (cardItem.id === currentCard.id) {
              return oldBoard;
            }
            return cardItem;
          })
        )
      );
      e.target.style.boxShadow = "none";
    }
  }

  return (
    <li
      className="app__card card"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHandler(e)}
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
            />
          ))}
        </ul>
      </div>
      <AddButton
        title={"Добавить еще одну карточку"}
        addItem={addTaskEvent}
        placeholder="Введите название карточки"
      />
    </li>
  );
}

export default Card;
