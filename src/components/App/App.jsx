import React from 'react';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Dashboard from '../Dashboard/Dashboard';
import AuthProvider from '../../contexts/AuthContext';
import PrivateRoute from '../PrivateRoute';
import TodoProvider from '../../contexts/TodoContext';
import SetToDo from '../SetToDo/SetToDo';

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <>
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Signin} />
          <PrivateRoute path='/' exact component={Dashboard} />
          <PrivateRoute path='/setToDo' exact component={SetToDo} />
        </>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
