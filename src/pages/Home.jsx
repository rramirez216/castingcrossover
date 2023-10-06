import React from 'react'
import Form from '../components/layout/Form'

function Home() {
  const [actorOne, setActorOne] = React.useState('')
  const [actorTwo, setActorTwo] = React.useState('')
  const [names, setNames] = React.useState({
    one: '',
    two: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setNames({ one: actorOne, two: actorTwo })
    alert(`form submitted ${actorOne + '' + actorTwo}`)
  }

  return (
    <div>
      <Form
        actorOne={actorOne}
        actorTwo={actorTwo}
        setActorOne={setActorOne}
        setActorTwo={setActorTwo}
        handleSubmit={handleSubmit}
      />
      <p>1.{names.one}</p>
      <p>2.{names.two}</p>
    </div>
  )
}

export default Home
