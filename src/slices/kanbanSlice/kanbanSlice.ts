import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import cardsData from "../../data";
import { ICard, ITask } from "../../types/types";
import { AddTaskPayload, DeleteTaskPayload, ICardsState } from "./kanbanSlice.types";

const initialState: ICardsState = {
  cards: cardsData,
  currentTask: null,
  currentCard: null,
};

// PayloadAction

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<string>) => {
      state.cards.push({
        title: action.payload,
        id: uuidv4(),
        tasks: [],
      });
    },
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      state.cards = [
        ...state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: [
                ...card.tasks,
                {
                  taskTitle: action.payload.taskName,
                  id: uuidv4(),
                },
              ],
            };
          } else {
            return card;
          }
        }),
      ];
    },
    deleteTaskFromCard: (state, action:PayloadAction<DeleteTaskPayload>) => {
      state.cards = [
        ...state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.filter(
                (task) => task.id !== action.payload.taskId
              ),
            };
          } else {
            return card;
          }
        }),
      ];
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = [
        ...state.cards.filter((card) => card.id !== action.payload),
      ];
    },
    changeCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    changeCurrentTask: (state, action: PayloadAction<ITask>) => {
      state.currentTask = action.payload;
    },
    changeCurrentCard: (state, action: PayloadAction<ICard>) => {
      state.currentCard = action.payload;
    },
  },
});

const { actions, reducer } = kanbanSlice;

export const {
  addCard,
  addTask,
  deleteTaskFromCard,
  deleteCard,
  changeCards,
  changeCurrentTask,
  changeCurrentCard,
} = actions;

export default reducer;
