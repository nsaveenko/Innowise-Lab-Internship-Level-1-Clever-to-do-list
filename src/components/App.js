import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import AuthProvider from '../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Route path='/' exact component={Dashboard} />
        <Route path='/singup' exact component={Signup} />
        <Route path='/singin' exact component={Signin} />
      </div>
    </AuthProvider>
  );
}

export default App;
