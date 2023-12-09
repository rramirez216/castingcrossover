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

  // TODO: work on medium responsive layout

  // TODO:

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
