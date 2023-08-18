import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { ITodo } from "../components/Todos/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodo[] = [
  {
    title: "name",
    complete: false,
    id: 1,
  },
  {
    title: "noname",
    complete: false,
    id: 2,
  },
  {
    title: "yesname",
    complete: false,
    id: 3,
  }
];

// const initialState: CounterState = {
//   value: 0,
// };

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    //    delete
    deleteTodo: (state: ITodo[], action: PayloadAction<number>) => {
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    },
  },
});

export const { deleteTodo } = todoSlice.actions;
export const selectCount = (state: RootState) => state.counterSlice.value;
export default todoSlice.reducer;
