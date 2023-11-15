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

  //"Looks like these actors haven't shared the spotlight... yet!"

  // TODO: implement a function that uses the messages array to randomly choose a message to use in the total variable

  let totalCoStarCredits
  if (list) {
    totalCoStarCredits =
      list.length > 0
        ? list.length
        : `Looks like these actors haven\'t shared the spotlight... yet!`
  }

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

      <List list={list} total={totalCoStarCredits} />
    </div>
  )
}

export default Home
