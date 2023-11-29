import React from 'react'

function Input({ inputName, handleChange, names, labelName, exampleName }) {
  return (
    <div className=''>
      <label className='block mr-4'>{labelName}:</label>
      <input
        className='h-10 block border-b-2 border-black'
        value={names.inputName}
        name={inputName}
        type='text'
        placeholder={'e.g. ' + exampleName}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
