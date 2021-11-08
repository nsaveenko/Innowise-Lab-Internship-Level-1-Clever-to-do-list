import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ERRORS } from '../../utils/errors';

export default function Singin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError(ERRORS.SIGN_IN_MESSAGE);
    }
  }

  return (
    <div className='wrapper'>
      <h2>Sign In</h2>
      {error && <p className='error-message'>{error}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <h3 className='input-title'>Email</h3>
          <input type='email' ref={emailRef} autoComplete='on' required />
        </label>
        
        <label>
          <h3 className='input-title'>Password</h3>
          <input type='password' ref={passwordRef} autoComplete='on' required />
        </label>

        <input className='primary-button' type='submit' value='Sign In' />
      </form>
      <h2 className='auth-info'>Don't have an account yet? <NavLink to='/signup' className='link'>Register now</NavLink></h2>
    </div>
  )
}
