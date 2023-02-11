import { useState } from "react";
import { ITask } from "../../types/types";
import AddButton from "../AddButton/AddButton";
import Task from "../Task/Task";
import "./Card.scss";

interface CardProps {
  title: string;
  tasks: ITask[];
  cardId: string;
  deleteTaskFromCard: (cardId: string, taskId: string) => void;
}

function Card({ title, tasks, cardId, deleteTaskFromCard }: CardProps) {
  function deleteTask(taskId: string) {
    deleteTaskFromCard(cardId, taskId);
  }

  return (
    <li className="app__card card">
      <div className="card__heading">
        <h2>{title}</h2>
        <img src="/public/svg/close.svg" />
      </div>

      <div className="card__tasks">
        <ul className="card__list">
          {tasks.map((item) => (
            <Task
              key={item.id}
              taskId={item.id}
              title={item.taskTitle}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
      <AddButton title={"Добавить еще одну карточку"} />
    </li>
  );
}

export default Card;
