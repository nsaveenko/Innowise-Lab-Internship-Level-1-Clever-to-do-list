import React, { useState } from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { ref } from '../../contexts/TodoContext';
import { v4 as uuidv4 } from "uuid";
import { useAuth } from '../../contexts/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewToDo() {
  const history = useHistory();
  const { currentUser } = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const newTodo = {
    id: uuidv4(),
    email: currentUser.email,
    date,
    title: newTitle,
    description: newDescription,
    completed: false
  }

  function addTodo(newTodo, ref) {
    ref
      .doc(newTodo.id)
      .set(newTodo)
      .catch((err) => {
        console.error(err);
      });
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
          <form className='form' onSubmit={handleSubmit}>
            <label>
              <h3>Task title:</h3>
              <input
                type='text'
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </label>
            <label>
              <h3>Task description:</h3>
              <input
                type='text'
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
              />
            </label>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <input className='primary-button' type='submit' value='Create new task' />
          </form>
        </div>
      </main>
    </>
  )
}
