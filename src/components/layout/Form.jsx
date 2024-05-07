import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ handleSubmit, handleChange, names, register }) {
  return (
    <form
      onSubmit={handleSubmit}
      className='min-w-[248px] sm:w-[512px] flex flex-col gap-4 shadow-ss rounded-lg p-8'
    >
      <Input
        inputName={'actorOne'}
        handleChange={handleChange}
        names={names}
        labelName={'First Actor'}
        exampleName={'Willem Dafoe'}
      />
      {/* <p className=''>&</p> */}
      <Input
        inputName={'actorTwo'}
        handleChange={handleChange}
        names={names}
        labelName={'Second Actor'}
        exampleName={'Owen Wilson'}
      />
      <Button />
    </form>
  )
}

export default Form
