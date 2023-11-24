import React from 'react'

function Input({ inputName, handleChange, names, labelName }) {
  return (
    <div>
      <label>{labelName}:</label>
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
