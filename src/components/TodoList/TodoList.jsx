import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({todos}) {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        )
      })}
    </ul>
  )
}