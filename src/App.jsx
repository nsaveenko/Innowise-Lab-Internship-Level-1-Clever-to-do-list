import React from 'react';
import AuthProvider from './contexts/AuthContext';
import TodoProvider from './contexts/TodoContext';
import Router from './router/Router';

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;