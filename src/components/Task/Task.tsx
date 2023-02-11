import { useState } from "react";
import { ITask } from "../../types/types";
import "./Task.scss";

interface TaskProps {
  task: ITask;
  deleteTask: (id: any) => void;
}

function Task({ deleteTask, task }: TaskProps) {
  const board = "";
  const item = "";

  const [boards, setBoards] = useState([]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

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
  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  // пользователь отпускает курсор мыши в процессе перетаскивания.
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }

  // происходит drop элемента.
  function dropHandler(e: React.DragEvent<HTMLLIElement>, board, item) {
    e.preventDefault();
    if (currentBoard) {
      const currentIndex = currentBoard.items.indexOf(currentItem);

      // currentBoard.items.splice(currentIndex, 1)

      const dropIndex = board.items.indexOf(item);
      // board.items.splice(dropIndex + 1, 0, currentItem);

      // setBoards(
      //   boards.map((item) => {
      //     if (item.id === board.id) {
      //       return board;
      //     }

      //     if (item.id === currentBoard.id) {
      //       return currentBoard
      //     }

      //     return b;
      //   })
      // );
    }
  }

  return (
    <li
      draggable="true"
      className="card__item item"
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, board, item)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, board, item)}
    >
      <h3>{task.taskTitle}</h3>
      <img src="/public/svg/close.svg" onClick={() => deleteTask(task.id)} />
    </li>
  );
}

export default Task;
