import React from 'react';
import moment from 'moment';
import Scroll from '../Scroller/Scroller';
import CalendarItem from '../CalendarItem/CalendarItem';
import { convertToTimestamp, weekDays, daysInMonth, month, year } from '../../utils/date';
import { useTodo } from '../../contexts/TodoContext';
import './Calendar.css';

export default function Calendar({ date, currentDay, selectedDay, handleSelectedDayChange }) {
  const days = [];
  const { todos } = useTodo();

  for (let i = date.getDate(); i < daysInMonth + 1; i+=1) {
    days.push(convertToTimestamp(i, month, year));
  }

  function handleDayClick(event) {
    const currentId = event.currentTarget.id;
    handleSelectedDayChange(moment(`${month}/${currentId}/${year}`).format('MMM Do YY'));
  }

  return (
    <div className='scroll-container'>
      <Scroll>
          <ul className='calendar' >
          {
            days.map((day) => {
              const todosByDate = todos.filter((todo) => {
                return todo.date === moment(+day).format('MMM Do YY');
              })
              return (
                <CalendarItem
                  key={day}
                  day={day}
                  weekDays={weekDays}
                  currentDay={currentDay}
                  selectedDay={selectedDay}
                  handleDayClick={handleDayClick}
                  todosByDate={todosByDate}
                />
              )
            })
          }
        </ul>
      </Scroll>
    </div>
  )
}
