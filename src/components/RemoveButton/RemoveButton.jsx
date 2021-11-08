import React from 'react';
import RemoveIcon from '../../asserts/RemoveIcon';

export const RemoveButton = ({ handleDelete }) => {
  return (
    <>
      <i className='secondary-button' onClick={handleDelete}>
        <RemoveIcon />
      </i>
    </>
  )
}