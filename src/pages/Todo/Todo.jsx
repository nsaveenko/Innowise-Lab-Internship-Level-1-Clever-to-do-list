import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTodo } from '../../contexts/TodoContext';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header/Header';
import { RemoveButton } from '../../components/RemoveButton/RemoveButton';
import './Todo.css';

export default function SetToDo() {
  const location = useLocation();
  const history = useHistory();
  const isExisted = location.state.isExisted;
  const todoId = location.state.todoId;
  const { currentUser } = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const { addTodo, getTodoById, todo, editTodo, deleteTodo } = useTodo();
  const submitInputValue = isExisted ? 'Update' : 'Save';
  const id = todoId ? todoId : uuidv4();

  useEffect(() => {
    if (todoId) {
      getTodoById(todoId);
      setNewTitle(todo.title || '');
      setNewDescription(todo.description || '');
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

  function handleDelete() {
    deleteTodo(todoId);
    history.push('/');
  }

  return (
    <>
      <Header headerTitle='Todo'/>
      <main>
        <div className='wrapper'>
          <form className='todo-form' onSubmit={handleSubmit}>
            <label>
              <h3 className='input-title'>Task title:</h3>
              <input
                className='todo-input'
                type='text'
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                onClick={() => {
                  if (!todoId){
                    setNewTitle('');
                  }
                }}
              />
            </label>
            <label>
              <h3 className='input-title'>Task description:</h3>
              <input
                className='todo-input'
                type='text'
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
                onClick={() => {
                  if (!todoId){
                    setNewDescription('');
                  }
                }}
              />
            </label>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <div className='main-content'>
              <input className='primary-button' type='submit' value={submitInputValue} />
              { todoId && <RemoveButton handleDelete={handleDelete} /> }
            </div>
          </form>
        </div>
      </main>
    </>
  )
}