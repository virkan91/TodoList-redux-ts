import React from 'react'
import { ITodo } from './types'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../store/store'




const todos = () => {

    const todos: ITodo[] = useAppSelector ((state: RootState) => state.todos);
    const dispatch = useAppDispatch();
    return (
      
      <div>
          <h1>Todo List</h1>
    </div>
  )
}

export default todos