import { configureStore } from "@reduxjs/toolkit";
import kanban from '/src/slices/kanbanSlice/kanbanSlice'

const store = configureStore({
  reducer: {
    kanban,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
