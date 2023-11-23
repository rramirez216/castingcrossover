import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ handleSubmit, handleChange, names }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputName={'First actor'}
        handleChange={handleChange}
        names={names}
      />
      <p>&</p>
      <Input
        inputName={'Second Actor'}
        handleChange={handleChange}
        names={names}
      />
      <Button />
    </form>
  )
}

export default Form
