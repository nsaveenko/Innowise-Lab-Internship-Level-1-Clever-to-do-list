import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Singup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    if (passwordRef.current.value.length < 6) {
      return setError('Password should be at least 6 characters');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div className='wrapper'>
      <h2>Sing Up</h2>
      {error && <p className='error-message'>{error}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Email
          <input type='email' ref={emailRef} required />
        </label>
        
        <label>
          Password
          <input type='password' ref={passwordRef} required />
        </label>

        <label>
          Confirm password
          <input type='password' ref={passwordConfirmRef} required />
        </label>

        <input type='submit' disabled={loading} value='Sing Up'/>
      </form>
      <h2 className="auth-info">Already have an account? <NavLink to='/singin' className='link'>Sing In</NavLink></h2>
    </div>
  )
}
