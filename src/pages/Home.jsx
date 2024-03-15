import React from 'react'
import axios from 'axios'

import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'
import randomMessage from '../util/randomMessage'
import Test from '../Test'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const { list, fetchData } = useFetch()

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

  let totalCoStarCredits
  if (list) {
    totalCoStarCredits = list.length > 0 ? list.length : randomMessage()
  }

  return (
    <main className='h-full flex flex-col sm:items-center gap-16'>
      <Test helloWorldFetcher={helloWorldFetcher} />
      <Form
        names={names}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <List list={list} total={totalCoStarCredits} names={names} />
    </main>
  )
}

export default Home

// TODO: hide form after form submission and include a toggle for  the form
//--------
// TODO: display the roles of each actor in the movie
// TODO: when zero matches message is displayed it re-renders and changes the message each new character add or removed from text input
// TODO: sort the movies listed by release date
// TODO: prevent identical names from being submitted
// TODO: figure out how to hide api key

//TODO: when overflow y is added to the app.js wrapper, react-scroll does not work

//TODO: switch the submit toggle from button onclick to form onsubmit
