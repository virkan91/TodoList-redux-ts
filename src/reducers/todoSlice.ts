import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { ITodo } from "../components/Todos/types";

const initialState: ITodo[] = [
    {
        id: 1,
        title: "name",
        complete: false
    },
    {
        id: 2,
        title: "noname",
        complete: false
    }
]

// const initialState: CounterState = {
//   value: 0,
// };

export const todoSlice = createSlice({
  name: "todos",
    initialState,
  
  reducers: {
   
  },
});

export const { } = todoSlice.actions;
export const selectCount = (state: RootState) => state.counterSlice.value;
export default todoSlice.reducer;
