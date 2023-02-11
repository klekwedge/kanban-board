import { useState } from "react";
import { ICard, ITask } from "../../types/types";
import "./Task.scss";

interface TaskProps {
  task: ITask;
  card: ICard;
  deleteTask: (id: any) => void;
  changeCards: (boards: ICard[]) => void;
}

function Task({ deleteTask, changeCards, task, card }: TaskProps) {
  const [boards, setBoards] = useState([]);

  const [currentBoard, setCurrentBoard] = useState<ICard>();
  const [currentItem, setCurrentItem] = useState<ITask>();

  // курсор мыши наведен на элемент при перетаскивани
  function dragOverHandler(e: React.DragEvent<HTMLLIElement>) {
    e.preventDefault();

    if (e.target.className.includes("card__item")) {
      e.target.style.boxShadow = "0 4px 3px gray";
    }
  }

  // курсор мыши покидает пределы перетаскиваемого элемента
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }

  // пользователь начинает перетаскивание элемента
  function dragStartHandler(e, board: ICard, item: ITask) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  // пользователь отпускает курсор мыши в процессе перетаскивания.
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }

  // происходит drop элемента.
  function dropHandler(
    e: React.DragEvent<HTMLLIElement>,
    board: ICard,
    item: ITask
  ) {
    e.preventDefault();
    if (currentBoard && currentItem) {
      const currentIndex = currentBoard.tasks.indexOf(currentItem);

      currentBoard.tasks.splice(currentIndex, 1)

      const dropIndex = board.tasks.indexOf(item);
      board.tasks.splice(dropIndex + 1, 0, currentItem);

      changeCards(
        boards.map((item) => {
          if (item.id === board.id) {
            return board;
          }

          if (item.id === currentBoard.id) {
            return currentBoard
          }

          return b;
        })
      );
    }
  }

  return (
    <li
      draggable="true"
      className="card__item item"
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, card, task)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, card, task)}
    >
      <h3>{task.taskTitle}</h3>
      <img src="/public/svg/close.svg" onClick={() => deleteTask(task.id)} />
    </li>
  );
}

export default Task;
