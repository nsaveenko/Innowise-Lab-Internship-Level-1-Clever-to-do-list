import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Singup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, signin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function entry(email, password) {
    try {
      setError('');
      await signin(email, password);
      history.push('/');
    } catch {
      setError('Failed to sign in');
    }
  }

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
    entry(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className='wrapper'>
      <h2>Sing Up</h2>
      {error && <p className='error-message'>{error}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <h3 className='input-title'>Email</h3>
          <input type='email' ref={emailRef} required />
        </label>
        
        <label>
          <h3 className='input-title'>Password</h3>
          <input type='password' ref={passwordRef} required />
        </label>

        <label>
          <h3 className='input-title'>Confirm password</h3>
          <input type='password' ref={passwordConfirmRef} required />
        </label>

        <input className='primary-button' type='submit' disabled={loading} value='Sign Up'/>
      </form>
      <h2 className="auth-info">Already have an account? <NavLink to='/signin' className='link'>Sign In</NavLink></h2>
    </div>
  )
}
