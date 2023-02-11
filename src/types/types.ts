export interface ICard {
  title: string;
  id: string;
  tasks: ITask[];
}

export interface ITask {
  taskTitle: string;
  id: string;
}
