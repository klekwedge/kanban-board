import "./Task.scss";

interface TaskProps {
  title: string;
}

function Task({ title }: TaskProps) {
  return (
    <li className="card__item">
          <h3>{title}</h3>
      <img src='/public/svg/close.svg'/>
    </li>
  );
}

export default Task;
