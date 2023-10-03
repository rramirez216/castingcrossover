import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

function Form({ actorOne, actorTwo, setActorOne, setActorTwo }) {
  return (
    <form>
      <Input inputName={'actor1'} actorName={actorOne} setActor={setActorOne} />
      <Input inputName={'actor2'} actorName={actorTwo} setActor={setActorTwo} />
      <Button />
    </form>
  )
}

export default Form
