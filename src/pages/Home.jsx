import React from 'react'
import Form from '../components/layout/Form'

function Home() {
  const [actorOne, setActorOne] = React.useState('')
  const [actorTwo, setActorTwo] = React.useState('')
  const [NamesObject, setNamesObject] = React.useState(null)

  return (
    <div>
      <Form
        actorOne={actorOne}
        actorTwo={actorTwo}
        setActorOne={setActorOne}
        setActorTwo={setActorTwo}
      />
      <p>1.{actorOne}</p>
      <p>2.{actorTwo}</p>
    </div>
  )
}

export default Home
