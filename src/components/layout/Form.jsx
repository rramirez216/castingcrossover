import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ handleSubmit, handleChange, names }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputName={'actorOne'}
        handleChange={handleChange}
        names={names}
        labelName={'First Actor'}
      />
      <p>&</p>
      <Input
        inputName={'actorTwo'}
        handleChange={handleChange}
        names={names}
        labelName={'Second Actor'}
      />
      <Button />
    </form>
  )
}

export default Form
