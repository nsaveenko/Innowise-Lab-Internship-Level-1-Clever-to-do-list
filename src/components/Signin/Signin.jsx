import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Singin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  }

  return (
    <div className='wrapper'>
      <h2>Sign In</h2>
      {error && <p className='error-message'>{error}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Email
          <input type='email' ref={emailRef} />
        </label>
        
        <label>
          Password
          <input type='password' ref={passwordRef} />
        </label>

        <input className='primary-button' type='submit' value='Sign In' />
      </form>
      <h2 className="auth-info">Don't have an account yet? <NavLink to='/signup' className='link'>Register now</NavLink></h2>
    </div>
  )
}
