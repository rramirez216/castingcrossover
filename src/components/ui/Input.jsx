import React from 'react'

function Input({ inputName, handleChange, names }) {
  return (
    <div>
      <label>{inputName}:</label>
      <input
        value={names.inputName}
        name={inputName}
        type='text'
        placeholder='Enter Name'
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
