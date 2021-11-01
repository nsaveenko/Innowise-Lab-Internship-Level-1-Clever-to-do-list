import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Singin() {
  return (
    <div className='wrapper'>
      <h2>Sing In</h2>
      <form className='form'>
        <label>
          Email
          <input type='email' />
        </label>
        
        <label>
          Password
          <input type='password' />
        </label>

        <input type='submit' value='Sign In' />
      </form>
      <h2 className="auth-info">Don't have an account yet? <NavLink to='/singup' className='link'>Register now</NavLink></h2>
    </div>
  )
}
