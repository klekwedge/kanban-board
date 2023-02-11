import "./Task.scss";

interface TaskProps {
  title: string;
  deleteTask: (id: string) => void;
}

function Task({ title, deleteTask }: TaskProps) {
  return (
    <li className="card__item">
      <h3>{title}</h3>
      <img src="/public/svg/close.svg" onClick={() => deleteTask("")} />
    </li>
  );
}

export default Task;
