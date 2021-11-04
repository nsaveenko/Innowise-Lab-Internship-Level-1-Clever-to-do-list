import React, { useContext, useState } from 'react';
import firebase from '../firebase';
import { useAuth } from './AuthContext';
import moment from 'moment';

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref =  firebase.firestore().collection('todos');
  const { currentUser } = useAuth();

  function getTodosByDate(date) {
    ref
      .where('email', '==', currentUser.email)
      .where('date', '==', moment(date).format('MMM Do YY'))
      .get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setTodos(items);
      setLoading(true);
    })
    setLoading(false);
  }

  function addTodo(newTodo, ref) {
    ref
      .doc(newTodo.id)
      .set(newTodo)
      .catch((err) => {
        console.error(err);
      });
  }

  function editTodo(id, checked) {
    ref
      .doc(id)
      .update({completed: !checked})
      .catch((err) => {
        console.error(err);
      });
  }

  const value = {
    ref,
    addTodo,
    editTodo,
    getTodosByDate,
    todos,
    loading
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}