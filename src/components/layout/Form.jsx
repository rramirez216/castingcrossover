import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ handleSubmit, handleChange, names }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input inputName={'actorOne'} handleChange={handleChange} names={names} />
      <Input inputName={'actorTwo'} handleChange={handleChange} names={names} />
      <Button />
    </form>
  )
}

export default Form
