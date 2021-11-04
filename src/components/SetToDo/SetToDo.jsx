import React, { useState } from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { useTodo } from '../../contexts/TodoContext';
import { v4 as uuidv4 } from "uuid";
import { useAuth } from '../../contexts/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import TodoItem from '../TodoItem/TodoItem';

export default function NewToDo() {
  const history = useHistory();
  const { currentUser } = useAuth();
  const [newTitle, setNewTitle] = useState('What do you need to do?');
  const [newDescription, setNewDescription] = useState('Describe it!');
  const [date, setDate] = useState(new Date());
  const { ref, addTodo } = useTodo();
  

  const newTodo = {
    id: uuidv4(),
    email: currentUser.email,
    date: moment(date).format('MMM Do YY'),
    title: newTitle,
    description: newDescription,
    completed: false
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(newTodo, ref);
    history.push('/');
  }

  return (
    <>
      <Header headerTitle='New Task'/>
      <main>
        <div className='wrapper'>
          <div className='main-content'>
          <TodoItem title={newTitle} description={newDescription} completed={false} />
          </div>
          <form className='todo-form' onSubmit={handleSubmit}>
            <label>
              <h3 className="input-title">Task title:</h3>
              <input
                className='todo-input'
                type='text'
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                onClick={() => setNewTitle('')}
              />
            </label>
            <label>
              <h3 className="input-title">Task description:</h3>
              <input
                className='todo-input'
                type='text'
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
                onClick={() => setNewDescription('')}
              />
            </label>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <input className='primary-button' type='submit' value='Save' />
          </form>
        </div>
      </main>
    </>
  )
}
