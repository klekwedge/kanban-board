import "./Task.scss";

interface TaskProps {
  title: string;
  deleteTask: (id: any) => void;
  taskId: string;
}

function Task({ title, deleteTask, taskId }: TaskProps) {
  return (
    <li className="card__item">
      <h3>{title}</h3>
      <img src="/public/svg/close.svg" onClick={() => deleteTask(taskId)} />
    </li>
  );
}

export default Task;
