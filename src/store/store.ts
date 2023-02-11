import { configureStore } from "@reduxjs/toolkit";
import cards from "/src/slices/cardsSlice/cardsSlice";

const store = configureStore({
  reducer: {
    cards,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
