import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import cardsData from "../../data";
import { ICardsState } from "./kanbanSlice.types";

const initialState: ICardsState = {
  cards: cardsData,
  currentTask: null,
  currentCard: null,
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addCard: (state, action) => {
      // cardTitle: string
      state.cards.push({
        title: action.payload,
        id: uuidv4(),
        tasks: [],
      });
    },
    addTask: (state, action) => {
      // taskName: string, cardId: string
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
    deleteTaskFromCard: (state, action) => {
      // cardId: string, taskId: string
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
    deleteCard: (state, action) => {
      // cardId: string
      state.cards = [
        ...state.cards.filter((card) => card.id !== action.payload),
      ];
    },
    changeCards: (state, action) => {
      state.cards = action.payload;
    },
    changeCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
    changeCurrentCard: (state, action) => {
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
