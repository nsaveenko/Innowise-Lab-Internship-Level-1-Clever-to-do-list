import React from 'react';
import './TodoItem.css';

function TodoItem({id, title, completed}) {
  return (
    <li className='todo'>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => console.log('changed')}
        />
        <span className='todo-title'>{title}</span>
    </li>
  )
}

export default TodoItem;