import AddButton from "../AddButton/AddButton";
import Task from "../Task/Task";
import "./Card.scss";

interface CardProps {
  title: string;
}

function Card({ title }: CardProps) {
  return (
    <li className="app__card card">
      <div className="card__heading">
        <h2>{title}</h2>
        <img src="/public/svg/close.svg" />
      </div>

      <div className="card__block">
        <ul>
          <Task title={"ffccffccffccffccffccffccffccffccffccffc"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
          <Task title={"ff"} />
        </ul>
        <AddButton title={"Добавить еще одну карточку"} />
      </div>
    </li>
  );
}

export default Card;
