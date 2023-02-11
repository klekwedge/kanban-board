import { ICard } from "../../types/types";

export interface ICardsState {
  cards: ICard[];
  currentCard: ICard | null;
}
