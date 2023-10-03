import React from 'react'

function Input({ inputName, actorName, setActor }) {
  return (
    <div>
      <label>{inputName}:</label>
      <input
        value={actorName}
        name={inputName}
        type='text'
        placeholder='Enter Name'
        onChange={(e) => setActor(e.target.value)}
      />
    </div>
  )
}

export default Input
