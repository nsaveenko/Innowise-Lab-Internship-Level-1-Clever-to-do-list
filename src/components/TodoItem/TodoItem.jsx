import React, { useState } from 'react';
import { useTodo } from '../../contexts/TodoContext';
import { useHistory } from 'react-router-dom';
import './TodoItem.css';

function TodoItem({id, title, completed}) {
  const history = useHistory();
  const [checked, setChecked] = useState(completed);
  const { editTodoCompleted, getTodos } = useTodo();

  function handleChange() {
    setChecked(!checked);
    editTodoCompleted(id, checked);
    getTodos();
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
      <label htmlFor={id} className='custom-checkbox-label' />
      <span
        className='todo-title'
        onClick={() => {
        history.push(
        {
          pathname: '/todo',
          state: {
            isExisted: true,
            todoId: id,
          },
        }
      )}}
      >
      {title}
      </span>
    </li>
  )
}

export default TodoItem;