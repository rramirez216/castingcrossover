import React from 'react'
import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'
import randomMessage from '../util/randomMessage'

function Home() {
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const { list, fetchData } = useFetch()

  // TODO: hide form after form submission and include a toggle for  the form
  // TODO: display the roles of each actor in the movie
  // TODO: fix over flow so header doesn't stay, maybe?
  // TODO: figure out how to hide api key

  let totalCoStarCredits
  if (list) {
    totalCoStarCredits = list.length > 0 ? list.length : randomMessage()
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
    <main className='h-full flex flex-col sm:items-center gap-16'>
      <Form
        names={names}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <List list={list} total={totalCoStarCredits} />
    </main>
  )
}

export default Home
