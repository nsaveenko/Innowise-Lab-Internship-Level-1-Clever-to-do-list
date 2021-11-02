import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import { useHistory } from 'react-router-dom';
import { ref } from '../../contexts/TodoContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  function getTodos() {
    ref.where('email', '==', currentUser.email)
      .get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setTodos(items);
      setLoading(true);
    })
    setLoading(false);
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="wrapper">
      {loading ? <TodoList todos={todos} /> : <p className="loading">Loading...</p>}
      <button className='primary-button' onClick={() => history.push('/setToDo')}>+ Add a New Task</button>
    </div>
  )
}
