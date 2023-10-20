import React from 'react'
import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const test = useFetch()

  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`form submitted ${names.actorOne + ' ' + names.actorTwo}`)
    console.log(test)
  }

  return (
    <div>
      <Form
        names={names}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <p>1.{names.actorOne}</p>
      <p>2.{names.actorTwo}</p>
      <List />
    </div>
  )
}

export default Home
