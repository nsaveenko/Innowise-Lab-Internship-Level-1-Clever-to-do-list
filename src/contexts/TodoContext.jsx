import React, { useContext, useState } from 'react';
import firebase from '../firebase';
import moment from 'moment';
import { useAuth } from './AuthContext';

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
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

  function getTodoById(todoId) {
    ref
    .doc(todoId).get()
    .then(snapshot => setTodo(snapshot.data()))
  }

  function addTodo(newTodo) {
    ref
      .doc(newTodo.id)
      .set(newTodo)
      .catch((err) => {
        console.error(err);
      });
  }

  function editTodoCompleted(id, checked) {
    ref
      .doc(id)
      .update({completed: !checked})
      .catch((err) => {
        console.error(err);
      });
  }

  function editTodo(updatedTodo) {
    ref
      .doc(updatedTodo.id)
      .update(updatedTodo)
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteTodo(todoId) {
    ref
      .doc(todoId)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  const value = {
    ref,
    addTodo,
    editTodoCompleted,
    getTodosByDate,
    getTodoById,
    todos,
    loading,
    todo,
    setTodo,
    editTodo,
    deleteTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}