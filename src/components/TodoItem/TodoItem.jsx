import React, { useState } from 'react';
import './TodoItem.css';
import { useTodo } from '../../contexts/TodoContext';
import { useHistory } from 'react-router-dom';

function TodoItem({id, title, completed}) {
  const history = useHistory();
  const [checked, setChecked] = useState(completed);
  const { editTodoCompleted } = useTodo();

  function handleChange() {
    setChecked(!checked);
    editTodoCompleted(id, checked);
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
      <span
        className='todo-title'
        onClick={() => {
        history.push(
        {
          pathname: '/setToDo',
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