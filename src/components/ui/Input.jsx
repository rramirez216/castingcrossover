import React from 'react'

function Input({ labelText, labelFor, children, errors }) {
  return (
    <div className=''>
      <label className='block mr-4' htmlFor={labelFor}>
        {labelText}:
      </label>

      {children}
      <p className='text-red-600'>{errors[labelFor]?.message}</p>
    </div>
  )
}

export default Input
