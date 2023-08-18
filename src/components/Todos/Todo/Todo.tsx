import React from 'react'
import { ITodoProps } from '../types'

const Todo = ({todo, onDelete}: ITodoProps) => {
  return (
      <div>
          <input type="checkbox" />
          <span>{todo.complete ? <s>{todo.title}</s>: todo.title }</span>
          <button onClick={() => onDelete(todo.id)}>Del</button>
    </div>
  )
}

export default Todo