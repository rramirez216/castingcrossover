import React from 'react'
import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let first = names.actorOne.split(' ').join('%20')

    // alert(`form submitted ${names.actorOne + ' ' + names.actorTwo}`)
    let firstActor = useFetch(
      `https://api.themoviedb.org/3/search/person?query=${first}&include_adult=false&language=en-US`
    )
    console.log(firstActor[0].id)
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
