import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

export default function Header({ headerTitle }) {
  const [error, setError] = useState('');
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const isDasboard = headerTitle === 'Tassker' ? true : false;

  async function handleSignout() {
    setError('');

    try {
      await signout();
      history.push('/signin');
    } catch {
      setError('Failed to sign out');
    }
  }

  if (error !== '') {
    alert(error);
  }

  return (
    <header className='header'>
      <h1 className='page-title' onClick={() => history.push('/')}>{headerTitle}</h1>
      <h3 className='email-title'>{currentUser.email}</h3> 
      {isDasboard && 
        <button
          className='primary-button'
          onClick={() => {
            history.push(
              {
                pathname: '/todo',
                state: {
                  isExisted: false,
                  todoId: null,
                },
              }
            )}
          }
        >
        + Add a New Task
        </button>
      }

      <button className='primary-button' onClick={handleSignout}>Sign out</button>
    </header>
  )
}
