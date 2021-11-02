import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';

export default function NewToDo() {
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  let isCreated = false;

  const createTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
        description: todoDescription,
        completed: false
      }
    ])
    setTodoTitle('');
    setTodoDescription('');

    isCreated = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo();

    if (isCreated) {
      isCreated = false;
      history.push('/');
    }
  }

  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
 
    const raw = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(raw));
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

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
                value={todoTitle}
                onChange={(event) => setTodoTitle(event.target.value)}
              />
            </label>
            <label>
              <h3>Task description:</h3>
              <input
                type='text'
                value={todoDescription}
                onChange={(event) => setTodoDescription(event.target.value)}
              />
            </label>
            <input className='primary-button' type='submit' value='Create new task' />
          </form>
        </div>
      </main>
    </>
  )
}
