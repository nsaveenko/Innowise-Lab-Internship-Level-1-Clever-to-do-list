import React, { useEffect } from 'react';
import { useTodo } from '../../contexts/TodoContext';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import TodoList from '../../components/TodoList/TodoList';
import { date, currentDay } from '../../utils/date';

export default function Todos() {
  const { todos, loading, getTodosByDate } = useTodo();
  const todosCount = todos.length;

  let todosCountTitle = '';

  if (todosCount === 0) {
    todosCountTitle = 'There are no tasks on this day yet'
  } else if (todos.length === 1) {
    todosCountTitle = `${todosCount} task on this day`
  } else {
    todosCountTitle = `${todosCount} tasks on this day`
  }

  useEffect(() => {
    getTodosByDate(date);
  }, [])

  return (
    <>
      <Header headerTitle='Tassker' />
      <main>
        <div className='wrapper todos'>
          <Calendar
            date={date} 
            currentDay={currentDay} 
          />
          {loading && <h3 className='todos-count'>{todosCountTitle}</h3>}
          {
            loading ?
            <TodoList 
              date={date} 
              currentDay={currentDay} 
              todos={todos} 
            /> :
            <p className='loading'>Loading...</p>
          }
        </div>
      </main>

    </>
  )
}
