import React, { Children } from 'react';

export default function Scroll({ children }) {
  return (
    <div className='scroller'>
      {
        Children.map(children, child => Children.only(child))
      }
    </div>
  )
}
