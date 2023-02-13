import { ICard, ITask } from "../../types/types";

export interface ICardsState {
  cards: ICard[];
  currentTask: ITask | null;
  currentCard: ICard | null;
}
