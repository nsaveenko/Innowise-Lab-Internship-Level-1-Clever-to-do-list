import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { useTodo } from '../../contexts/TodoContext';
import { v4 as uuidv4 } from "uuid";
import { useAuth } from '../../contexts/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import TodoItem from '../TodoItem/TodoItem';
import { useLocation } from "react-router-dom";

export default function SetToDo() {
  const location = useLocation();
  const history = useHistory();
  const isExisted = location.state.isExisted;
  const todoId = location.state.todoId;
  const { currentUser } = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const { addTodo, getTodoById, todo, editTodo } = useTodo();
  const submitInputValue = isExisted ? 'Update' : 'Save';
  const id = todoId ? todoId : uuidv4();
  
  useEffect(() => {
    if (todoId) {
      getTodoById(todoId);
      setNewTitle(todo.title);
      setNewDescription(todo.description);
    } else {
      setNewTitle('What do you need to do?');
      setNewDescription('Describe it!');
    }
  }, [todo.title])

  const newTodo = {
    id,
    email: currentUser.email,
    date: moment(date).format('MMM Do YY').toString(),
    title: newTitle,
    description: newDescription,
    completed: false
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todoId) {
      editTodo(newTodo);
    } else {
      addTodo(newTodo);
    }
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
            <input className='primary-button' type='submit' value={submitInputValue} />
          </form>
        </div>
      </main>
    </>
  )
}
