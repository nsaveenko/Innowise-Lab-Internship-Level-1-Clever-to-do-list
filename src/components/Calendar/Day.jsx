import React from 'react';
import { useTodo } from '../../contexts/TodoContext';

export default function Day({ day, weekDays, selected, currentDay }) {
  const date = new Date(Number(day));
  const cls = ['calendar-item'];
  const { getTodosByDate } = useTodo();

  if (selected === date.getDate() && selected !== currentDay) {
    cls.push('selected-item');
  } else if (currentDay === date.getDate()) {
    cls.push('current-day-item')
  }

  function handleClick() {
    getTodosByDate(date);
  }

  return (
    <li onClick={handleClick} className={cls.join(' ')}>
      <p className='week-day-title'>{weekDays[date.getDay()]}</p>
      <h3 id={date.getDate()}>{date.getDate()}</h3>
    </li>
  )
}
