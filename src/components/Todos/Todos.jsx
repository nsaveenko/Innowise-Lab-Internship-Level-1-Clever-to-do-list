import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const history = useHistory();
  const ref =  firebase.firestore().collection('todos');

  function getTodos() {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setTodos(items);
    })
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="wrapper">
      <TodoList todos={todos} />
      <button className='primary-button' onClick={() => history.push('/setToDo')}>+ Add a New Task</button>
    </div>
  )
}
