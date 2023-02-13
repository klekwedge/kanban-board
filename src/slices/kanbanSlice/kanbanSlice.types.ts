import { ICard, ITask } from "../../types/types";

export interface ICardsState {
  cards: ICard[];
  currentTask: ITask | null;
  currentCard: ICard | null;
}

export interface AddTaskPayload {
  taskName: string;
  cardId: string;
}


export interface DeleteTaskPayload {
  taskId: string;
  cardId: string;
}
