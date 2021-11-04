import React, { useState } from 'react';
import './TodoItem.css';
import { useTodo } from '../../contexts/TodoContext';

function TodoItem({id, title, completed}) {
  const [checked, setChecked] = useState(completed);
  const { editTodo } = useTodo();

  function handleChange() {
    setChecked(!checked);
    editTodo(id, checked);
  }

  return (
    <li className='todo'>
      <input
        className='custom-checkbox'
        id={id}
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} />
      <span className='todo-title'>{title}</span>
    </li>
  )
}

export default TodoItem;