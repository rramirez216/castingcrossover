import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ handleSubmit, register, onSubmit, errors, getValues }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-w-[248px] sm:w-[512px] flex flex-col gap-4 shadow-ss rounded-lg p-8'
    >
      <Input labelText={'First Actor'} labelFor={'actorOne'} errors={errors}>
        <input
          className='w-full h-10 block border-b-2 border-black bg-[#F7F7F7] pl-2'
          type='text'
          id='actorOne'
          placeholder='e.g. Owen Wilson'
          {...register('actorOne', {
            required: 'please type a name for Actor #1',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters long.',
            },
          })}
        />
      </Input>
      <Input labelText={'Second Actor'} labelFor={'actorTwo'} errors={errors}>
        <input
          className='w-full h-10 block border-b-2 border-black bg-[#F7F7F7] pl-2'
          type='text'
          id='actorTwo'
          placeholder='e.g. Willem Dafoe'
          {...register('actorTwo', {
            required: 'please type a name for Actor #2',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters long.',
            },
            validate: (value) => {
              let test = getValues('actorOne')
              return (
                value.toLowerCase() !== test.toLowerCase() ||
                'Actor names cannot match cannot match names'
              )
            },
          })}
        />
      </Input>
      <Button />
    </form>
  )
}

export default Form
