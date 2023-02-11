import AddButton from "../AddButton/AddButton";
import "./Card.scss";

interface CardProps {
  title: string;
}

function Card({ title }: CardProps) {
  return (
    <li className="app__card card">
      <h2>{title}</h2>
      <div className="card__block">
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 3</li>
          <li>Task 3</li>
          <li>Task 3</li>
          <li>Task 3</li>
          <li>Task 3</li>
          <li>Task 4</li>
        </ul>
        <AddButton title={'Добавить еще одну карточку'}/>
      </div>
    </li>
  );
}

export default Card;
