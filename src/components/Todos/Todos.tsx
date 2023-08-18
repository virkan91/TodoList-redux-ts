import React from "react";
import { ITodo } from "./types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store/store";
import Todo from "./Todo/Todo";
import { deleteTodo } from "../../reducers/todoSlice";

const todos = () => {
  const todos: ITodo[] = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  return (
    <>
          <h1>Todo List</h1>
          <form>
              <input type="text" />
              <button>Add</button>
          </form>
          {
              todos.map((todo: ITodo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      onDelete={(id: number) => dispatch(deleteTodo(id))}
                    />
                  );
              
                      
                  
              })
      }
    </>
  );
};

export default todos;
