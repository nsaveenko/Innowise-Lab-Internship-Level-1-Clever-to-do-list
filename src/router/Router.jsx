import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Todo from '../pages/Todo/Todo';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function Router() {
  return (
    <>
      <Route path='/signup' exact component={Signup} />
      <Route path='/signin' exact component={Signin} />
      <PrivateRoute path='/' exact component={Dashboard} />
      <PrivateRoute path='/todo' exact component={Todo} />
    </>
  )
}
