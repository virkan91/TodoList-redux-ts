import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";
import todos from "../components/Todos/Todos";
import todoSlice from "../reducers/todoSlice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    todos: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
