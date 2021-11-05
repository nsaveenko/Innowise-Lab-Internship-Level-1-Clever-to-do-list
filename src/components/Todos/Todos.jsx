import React, { useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import { useHistory } from 'react-router-dom';
import { useTodo } from '../../contexts/TodoContext';
import Calendar from '../Calendar/Calendar';

export default function Todos() {
  const history = useHistory();
  const { todos, loading, getTodosByDate } = useTodo();
  const todosCount = todos.length;
  const date = new Date();
  const currentDay = date.getDate();

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
    <div className="wrapper todos">
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
        <p className="loading">Loading...</p>
      }
      <button
        className='primary-button'
        onClick={() => {
          history.push(
            {
              pathname: '/setToDo',
              state: {
                isExisted: false,
                todoId: null,
              },
            }
          )}
        }
      >
      + Add a New Task
      </button>
    </div>
  )
}
