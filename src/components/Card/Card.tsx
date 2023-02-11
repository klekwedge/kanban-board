import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "../AddButton/AddButton";
import Task from "../Task/Task";
import "./Card.scss";

interface CardProps {
  title: string;
  tasks: string[];
}

function Card({ title, tasks }: CardProps) {
  function deleteTask() {
    console.log("p");
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
            <Task key={uuidv4()} title={item} deleteTask={deleteTask} />
          ))}
        </ul>
      </div>
      <AddButton title={"Добавить еще одну карточку"} />
    </li>
  );
}

export default Card;
