import React from 'react'
import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const { firstActorData, secondActorData, fetchData } = useFetch()

  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let first = names.actorOne.split(' ').join('%20')
    let second = names.actorTwo.split(' ').join('%20')

    fetchData(first, second)
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
      {/* TODO: pass the actor data to the list component */}
      {/* <List /> */}
    </div>
  )
}

export default Home
