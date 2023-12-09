import React from 'react'

function Input({ inputName, handleChange, names, labelName, exampleName }) {
  return (
    <div className=''>
      <label className='block mr-4'>{labelName}:</label>
      <input
        className='w-full h-10 block border-b-2 border-black bg-[#F7F7F7] pl-2'
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
