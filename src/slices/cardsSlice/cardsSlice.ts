import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cardsData from "../../data";

const initialState = {
  cards: cardsData,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

const { actions, reducer } = cardsSlice;
export const {} = actions;

export default reducer;
