import React from 'react'
import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const { list, fetchData } = useFetch()

  // TODO: create a variable that displays the total number of co staring credits and display on the page

  // const totalCoStarCredits = list.length >
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

      <List list={list} />
    </div>
  )
}

export default Home
