import React from 'react';
import Todos from '../Todos/Todos';
import Header from '../Header/Header';

export default function Dashboard() {
  return (
    <>
      <Header headerTitle='Tassker'/>
      <main>
        <Todos /> 
      </main>
    </>
  )
}
